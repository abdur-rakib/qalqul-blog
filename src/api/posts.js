import { store } from "../store/index";
import { setPosts } from "../store/postSlice";

export const getPosts = async () => {
  try {
    const response = await fetch("src/data/posts.json");
    const data = await response.json();
    store.dispatch(setPosts(data));
  } catch (error) {
    console.log("🚀 ~ file: posts.js:15 ~ getPosts ~ error:", error);
  }
};
