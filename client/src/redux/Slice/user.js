import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    introdata: {
        fname: '',
        lname: '',
        email: '',
        cn: '',
        lpl: '',
        city: ''
      },
    educationSections: [],
    
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        adduser: (state,action) => {
            state.user = action.payload
        },
        addintro: (state, action) => {
            state.introdata = action.payload
        },
        updateEducationSections: (state, action) => {
            state.educationSections = [...state.educationSections, action.payload];
        },
    },
})

export const {adduser, addintro, updateEducationSections} = userSlice.actions;

export default userSlice.reducer