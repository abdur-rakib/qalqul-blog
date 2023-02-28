import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";

const App = () => {
  return (
    <>
      {/* nav */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:postId" element={<Post />} />
      </Routes>
    </>
  );
};

export default App;
