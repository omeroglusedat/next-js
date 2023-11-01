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
            console.log('134', updatedUser.filter((f) => f.id === action.payload?.id)[0])
            if (updatedUser.length > 0)
                fetch(`http://127.0.0.1:5305/users/${action.payload?.id}`, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: 'PUT',
                    body: JSON.stringify(updatedUser.filter((f) => f.id === action.payload?.id)[0])
                });
            state.users = updatedUser;
        },
    },
})

// Action creators are generated for each case reducer function
export const { voteUp, setData } = generalSlice.actions

export default generalSlice.reducer

