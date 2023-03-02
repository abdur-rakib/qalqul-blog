import React from "react";
import { useSelector } from "react-redux";
import SinglePost from "../../components/SinglePost";
import styles from "./Profile.module.css";

const Profile = () => {
  const { likedPosts } = useSelector((state) => state.post);
  const { userData } = useSelector((state) => state.user);
  return (
    <div className={styles.profile_box}>
      {/* user container */}
      <div className={styles.user_container}>
        <div className={styles.image_container}>
          <img
            src={userData.avatarUrl}
            alt="profile_picture"
            className={styles.image}
          />
        </div>
        <div className={styles.info_container}>
          <p className={styles.name}>
            {userData.firstName} {userData.lastName}
          </p>
          <p className={styles.info_data}>{userData.phoneNumber}</p>
          <p className={styles.info_data}>{userData.emailAddress}</p>
        </div>
      </div>
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
