import service from '@/service/service';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
}

export const generalSlice = createSlice({
    name: 'generalSlice',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.users = action.payload;
        },
        voteUp: (state, action) => {
            const _users = [...state.users];
            const updatedUser = _users.map((item) => {
                if (item.id === action.payload?.id) {
                    return {
                        ...item,
                        vote: item.vote + 1
                    }
                }
                return item;
            })
            if (updatedUser.length > 0) {
                const userObject = updatedUser.filter((f) => f.id === action.payload?.id)[0]
                service.userUpdate(userObject);
            }
            state.users = updatedUser;
        },
    },
})

// Action creators are generated for each case reducer function
export const { voteUp, setData } = generalSlice.actions

export default generalSlice.reducer

