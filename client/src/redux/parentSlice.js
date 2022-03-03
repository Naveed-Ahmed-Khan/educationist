import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentName: "",
  fatherName: "",
  email: "",
  watsappNo: "",
  country: "",
  city: "",
  password: "",
};

export const parentSlice = createSlice({
  name: "parent",
  initialState,
  reducers: {
    AddParent: (state, action) => {
      state = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddParent } = parentSlice.actions;

export default parentSlice.reducer;
