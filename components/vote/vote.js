'use client'
import React, { useEffect, useMemo, useState } from 'react';

// redux 
import { useSelector, useDispatch } from 'react-redux';
import { setData } from '@/redux/general-slice';

// styles
import styles from '../../app/index.module.scss'
import UserCard from './components/user-card';


const Vote = ({ data }) => {
    const _users = useSelector((state) => state.generalSlice.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setData(data));
    }, [data])

    const lastData = useMemo(() => {
        const _usersData = [..._users];
        if (_usersData.length !== 0) {
            return _usersData.sort((a, b) => {
                return b.vote - a.vote
            });
        } 
        return [];
    }, [_users])

    return <div className={styles.voteContainer} style={{ backgroundColor: 'red' }}>
        {lastData && lastData.length > 0 && lastData
            .map((item, index) => {
                return <UserCard key={`user-${index}`} item={item} />
            })}
    </div>
}

export default Vote;