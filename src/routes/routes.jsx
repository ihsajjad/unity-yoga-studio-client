import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import Schedule from "../pages/schedule/schedule/Schedule";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/schedule",
        element: <Schedule />
      }
    ],
  },
]);
