import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null ,
  introdata: {
    fname: "",
    lname: "",
    email: "",
    cn: "",
    lpl: "",
    city: "",
  },
  educationSections: [],
  addSkills: [],
  projectSections: [],
  paSections: [],
  expSections: [],
  tcSections: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    adduser: (state, action) => {
      state.user = {
        email: action.payload.email,
        photoURL: action.payload.photoURL, // Update the photoURL property
        displayName: action.payload.displayName, // Update the displayName property
      };
    },
    addintro: (state, action) => {
      state.introdata = action.payload;
    },
    updateEducationSections: (state, action) => {
      state.educationSections = action.payload;
    },
    updateSkills: (state, action) => {
      state.addSkills = action.payload;
    },
    updateprojectSections: (state, action) => {
      state.projectSections = action.payload;
    },
    updatepaSections: (state, action) => {
      state.paSections = action.payload;
    },
    updateExpSections: (state, action) => {
      state.expSections = action.payload;
    },
    updateTcSections: (state, action) => {
      state.tcSections = action.payload;
    },
  },
});

export const {
  adduser,
  addintro,
  updateEducationSections,
  updateSkills,
  updateprojectSections,
  updatepaSections,
  updateExpSections,
  updateTcSections,
} = userSlice.actions;

export default userSlice.reducer;
