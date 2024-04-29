import {createSlice} from "@reduxjs/toolkit";

export const termsOfUseSlice = createSlice({
  name: 'termsOfUse',
  initialState: {accepted: false},
  reducers: {
    accept: (state) => {
      state.accepted = true;
    },
  },
})

export const { accept } = termsOfUseSlice.actions
export const termsOfUseReducer = termsOfUseSlice.reducer;
export const termsOfUseReducerPath = termsOfUseSlice.reducerPath;
