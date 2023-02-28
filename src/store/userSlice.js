import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state) => {},
  },
});

// Action creators are generated for each case reducer function
export const { setUser, unlikePost } = userSlice.actions;

export default userSlice.reducer;
