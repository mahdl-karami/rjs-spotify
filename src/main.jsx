//? react imports
import React from "react";
import ReactDOM from "react-dom/client";
//? import route components
import App from "./App.jsx";
import Root from "./routes/Root.jsx";
//? react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//? global styles
import "./fonts.css";
import "./index.css";

//! create router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/artist/:artistId",
        element: <h1>Artist Page</h1>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
