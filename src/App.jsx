import React, { useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";
import { getPosts } from "./api/posts";

const App = () => {
  // get posts
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      {/* nav */}
      <Navbar />
      <section className="main_container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:postId" element={<Post />} />
        </Routes>
      </section>
      <footer>
        <p className="copyright">QALQUL Blog © 2022</p>
      </footer>
    </>
  );
};

export default App;
