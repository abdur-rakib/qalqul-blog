import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SinglePost from "../../components/SinglePost";
import styles from "./Home.module.css";

const Home = () => {
  // redux staff
  const { posts, searchText } = useSelector((state) => state.post);
  // component state
  const [postData, setPostData] = useState([]);

  // set posts
  useEffect(() => {
    if (searchText) {
      const data = posts.filter((post) => {
        return post.tags.includes(searchText);
      });
      setPostData(data);
    } else {
      setPostData(posts);
    }
  }, [posts, searchText]);
  return (
    <div className={styles.post_container}>
      {postData.length === 0 ? (
        <h1 className={styles.empty}>No Posts Found</h1>
      ) : (
        postData.map((post) => <SinglePost key={post._id} post={post} />)
      )}
    </div>
  );
};

export default Home;
