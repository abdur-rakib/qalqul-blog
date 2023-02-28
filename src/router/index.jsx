import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Post from "../pages/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:postId",
    element: <Post />,
  },
]);

const index = () => {
  return <RouterProvider router={router} />;
};

export default index;
