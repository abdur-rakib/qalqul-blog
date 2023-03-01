import { store } from "../store/index";
import { setUser } from "../store/userSlice";

export const getUser = async () => {
  try {
    const response = await fetch("src/data/user.json");
    const data = await response.json();
    store.dispatch(setUser(data));
  } catch (error) {
    console.log("🚀 ~ file: posts.js:15 ~ getPosts ~ error:", error);
  }
};
