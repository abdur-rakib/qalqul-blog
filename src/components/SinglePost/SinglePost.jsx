import React from "react";
import { Link } from "react-router-dom";
import { truncate } from "../../utils";
import styles from "./SinglePost.module.css";

const SinglePost = ({ post }) => {
  return (
    <div className={styles.post_box}>
      <div>
        <p className={styles.post_title}>{post.title}</p>
      </div>
      <p className={styles.post_author}>{post.author}</p>
      <p className={styles.post_date}>{post.created_at}</p>

      <Link to={`/${post._id}`} className={styles.post_body}>
        {truncate(post.description, 200)} ...
      </Link>
      <div className={styles.post_action}>
        <p className={styles.action_text}>Like</p>
      </div>
    </div>
  );
};

export default SinglePost;
