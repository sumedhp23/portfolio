import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import "./styles/global.css";
import InteractiveHeroBG from "./components/Hero/InteractiveHeroBG";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InteractiveHeroBG />
    <RouterProvider router={router} />
  </React.StrictMode>
);
