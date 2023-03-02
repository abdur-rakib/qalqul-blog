import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  likedPosts: [],
  searchText: "",
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
      if (state.posts[postIndex].liked) {
        state.likedPosts = [state.posts[postIndex], ...state.likedPosts];
      } else {
        state.likedPosts = state.likedPosts.filter(
          (post) => post._id !== action.payload
        );
      }
    },
    postComment: (state, action) => {
      const postId = action.payload.postId;
      const commentData = action.payload.commentData;
      // get post
      const postIndex = state.posts.findIndex((post) => post._id == postId);

      state.posts[postIndex].comments = [
        commentData,
        ...state.posts[postIndex].comments,
      ];
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPosts, toggleLikePost, postComment, setSearchText } =
  postSlice.actions;

export default postSlice.reducer;
