import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  likedPosts: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    likePost: (state) => {},
    unlikePost: (state) => {},
  },
});

// Action creators are generated for each case reducer function
export const { setPosts, likePost, unlikePost } = postSlice.actions;

export default postSlice.reducer;
