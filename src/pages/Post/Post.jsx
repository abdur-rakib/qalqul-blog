import React from "react";
import { Link, useLocation } from "react-router-dom";
import { capitalize, truncate } from "../../utils";
import styles from "./Post.module.css";

const Post = () => {
  const location = useLocation();
  const {
    state: { post },
  } = location;
  return (
    <div className={styles.post_box}>
      {/* post info part */}
      <div>
        <p className={styles.post_title}>{capitalize(post.title)}</p>
      </div>
      <p className={styles.post_author}>By {post.author}</p>
      <p className={styles.post_date}>
        Posted on {post.created_at.split("T")[0]}
      </p>
      <p className={styles.post_body}>{post.description}</p>
      {/* comment part */}
      <div className={styles.comment_container}>
        <div className={styles.input_container}>
          <textarea placeholder="Please write comment" rows="5"></textarea>
        </div>
        {/* comment data  */}
        <div className={styles.comments}>
          {post.comments.length > 0 ? (
            post.comments.map((comment) => (
              <div key={comment._id} className={styles.single_comment}>
                <p className={styles.user_name}>
                  {comment.user}{" "}
                  <span className={styles.comment_date}>
                    {comment.commented_at.split("T")[0]}
                  </span>{" "}
                </p>
                <p className={styles.description}>{comment.description}</p>
              </div>
            ))
          ) : (
            <h4 className={styles.no_comments_text}>No Comments Found</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
