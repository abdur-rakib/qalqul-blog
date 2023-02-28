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
    toggleLikePost: (state, action) => {
      // get liked post
      const postIndex = state.posts.findIndex(
        (post) => post._id == action.payload
      );
      state.posts[postIndex].liked = !state.posts[postIndex].liked;

      // add post to likedPosts or remove it from likedPosts
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPosts, toggleLikePost } = postSlice.actions;

export default postSlice.reducer;
