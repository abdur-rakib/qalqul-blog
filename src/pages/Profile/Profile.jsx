import React from "react";
import { useSelector } from "react-redux";
import SinglePost from "../../components/SinglePost";
import styles from "./Profile.module.css";

const Profile = () => {
  const { likedPosts } = useSelector((state) => state.post);
  console.log("🚀 ~ file: Profile.jsx:7 ~ Profile ~ likedPosts:", likedPosts);
  return (
    <div className={styles.profile_box}>
      {/* user container */}
      <div className={styles.user_container}></div>
      {/* liked post container */}
      <div className={styles.post_container}>
        <p className={styles.title}>Liked Posts</p>
        <div className={styles.post_list}>
          {likedPosts.length > 0 ? (
            likedPosts.map((post) => <SinglePost key={post._id} post={post} />)
          ) : (
            <h4 className={styles.empty}>No Liked Posts Found</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
