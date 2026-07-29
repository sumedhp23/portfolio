import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Home from "../pages/Home";
import ProjectDetail from "../pages/ProjectDetail";
import ExperienceDetail from "../pages/ExperienceDetail";
import ResearchDetail from "../pages/ResearchDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects/:id", element: <ProjectDetail /> },
      { path: "experience/:id", element: <ExperienceDetail /> },
      { path: "research/details", element: <ResearchDetail /> },
    ],
  },
]);
