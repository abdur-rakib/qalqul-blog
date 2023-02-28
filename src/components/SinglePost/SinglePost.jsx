import React from "react";
import { Link } from "react-router-dom";
import { capitalize, truncate } from "../../utils";
import styles from "./SinglePost.module.css";

const SinglePost = ({ post }) => {
  return (
    <div className={styles.post_box}>
      <div>
        <Link
          to={`/${post._id}`}
          state={{ post }}
          className={styles.post_title}
        >
          {capitalize(post.title)}
        </Link>
      </div>
      <p className={styles.post_author}>By {post.author}</p>
      <p className={styles.post_date}>
        Posted on {post.created_at.split("T")[0]}
      </p>

      <Link to={`/${post._id}`} state={{ post }} className={styles.post_body}>
        {truncate(post.description, 200)} ...
      </Link>
      <div className={styles.post_action}>
        <p className={styles.action_text}>Like</p>
      </div>
    </div>
  );
};

export default SinglePost;
