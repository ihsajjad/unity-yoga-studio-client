import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import Classes from "../pages/classes/classes/Classes";
import SingleClass from "../pages/classes/SingleClass";

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
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/single-class",
        element: <SingleClass />,
      },
    ],
  },
]);
