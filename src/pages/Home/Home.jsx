import React from "react";
import { useSelector } from "react-redux";
import SinglePost from "../../components/SinglePost";
import styles from "./Home.module.css";

const Home = () => {
  // redux staff
  const { posts } = useSelector((state) => state.post);
  return (
    <div className={styles.post_container}>
      {posts.map((post) => (
        <SinglePost key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Home;
