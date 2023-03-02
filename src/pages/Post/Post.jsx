import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { postComment } from "../../store/postSlice";
import { capitalize, truncate } from "../../utils";
import styles from "./Post.module.css";

const Post = () => {
  // router staff
  const location = useLocation();
  const {
    state: { post },
  } = location;
  // redux staff
  const dispatch = useDispatch();
  // component state
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post.comments);

  // handle submit comment
  const handleSubmit = () => {
    if (comment.trim() === "") {
      alert("Please enter a comment");
    } else {
      const commentData = {
        _id: Math.random().toString(),
        description: comment,
        commented_at: new Date().toISOString(),
        user: "User",
      };
      // store comments to local state
      setComments((prevComments) => [commentData, ...prevComments]);
      // store comment to redux
      dispatch(postComment({ postId: post._id, commentData }));
      // clear comment form
      setComment("");
    }
  };

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
      <div className={styles.tags_container}>
        {post.tags.map((tag, index) => (
          <p key={index} className={styles.tag}>
            {tag}
          </p>
        ))}
      </div>
      {/* comment part */}
      <div className={styles.comment_container}>
        <h1>Leave a comment</h1>
        <div className={styles.input_container}>
          <textarea
            placeholder="Please write comment"
            rows="5"
            className={styles.input}
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <div className={styles.post_action} onClick={handleSubmit}>
            <p className={styles.action_text}>Comment</p>
          </div>
        </div>
        {/* comment data  */}
        <div className={styles.comments}>
          <h1>Comments</h1>
          {post.comments.length > 0 ? (
            comments.map((comment) => (
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
