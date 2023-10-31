import React, { useState } from 'react';
import styles from '@/app/index.module.scss';
import { useDispatch } from 'react-redux';
import { voteUp } from '@/redux/general-slice';

const UserCard = ({ item }) => {
    const dispatch = useDispatch();
    const [detail, setDetail] = useState(false);


    const handleDetail = () => {
        setDetail(!detail);
    }

    return <div className={styles.userCard} onClick={handleDetail}>
        <div className={styles.userCardBody}>
            <div className={styles.userCardItem}>
                <img src={item.avatar} />
            </div>
            <div className={styles.userCardItem}>
                <span> <strong>Raiting: </strong> {item.vote}</span>
                <span> <strong>Name: </strong> {item.name}</span>
                <span> <strong>Username: </strong> {item.username}</span>
                <span> <strong>Email: </strong> {item.email}</span>
            </div>
        </div>
        {detail && <div className={styles.userCardBody} style={{ marginTop: '10px' }}>
            <div className={styles.userCardItem}>
                <span> <strong>Company Name: </strong> {item.company.name}</span>
                <span> <strong>Company Catch Phrase: </strong> {item.company.catchPhrase}</span>
                <span> <strong>Phone: </strong> {item.phone}</span>
                <span> <strong>Web Site: </strong>{item.website}</span>
            </div>
            <div className={styles.userCardItem}>
                <span> <strong>City: </strong> {item.address.city}</span>
                <span> <strong>Street: </strong> {item.address.street}</span>
                <span> <strong>Suite: </strong> {item.address.suite}</span>
                <span> <strong>Zip Code: </strong> {item.address.zipcode}</span>
            </div>
        </div>}

        <div className={styles.userCardFooter}>
            {/* <button onClick={handleDetail}>Detail</button> */}
            <button onClick={(e) => {
                e.stopPropagation();
                dispatch(voteUp(item))
            }}>Vote</button>
        </div>
    </div>
}

export default UserCard;