import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  console.log("Render Home");
  return (
    <section className={styles.main_container}>
      <div className={styles.post_container}>
        <div className={styles.post_box}>
          <div>
            <p className={styles.post_title}>Blog Post Title</p>
          </div>
          <p className={styles.post_author}>By Author</p>
          <p className={styles.post_date}>
            Posted on August 24, 2013 at 9:00 PM
          </p>

          <p className={styles.post_body}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
            veritatis, tempora, necessitatibus inventore nisi quam quia repellat
            ut tempore laborum possimus eum dicta id animi corrupti debitis
            ipsum officiis rerum.
          </p>
          <div className={styles.post_action}>
            <p className={styles.action_text}>Like</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
