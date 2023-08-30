import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    ps:null,
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        adduser: (state,action) => {
            state.user = action.payload
        },
    },
})

export const {adduser} = userSlice.actions;

export default userSlice.reducer