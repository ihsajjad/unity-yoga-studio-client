import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import Classes from "../pages/classes/classes/Classes";
import SingleClass from "../pages/classes/SingleClass";
import Schedule from "../pages/schedule/schedule/Schedule";
import Instructors from "../pages/instructors/Instructors";
import ContactUs from "../pages/contactUs/contactUs/ContactUs";
import AboutUs from "../pages/aboutUs/AboutUs/AboutUs";

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
        path:"/about",
        element: <AboutUs/>
      }
      ,
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/single-class",
        element: <SingleClass />,
      },
      { path: "/schedule", element: <Schedule /> },
      {
        path: "/instructors",
        element: <Instructors />,
        loader: () => fetch("instructors.json"),
      },
      {
        path: "/contact",
        element: <ContactUs />
      }
    ],
  },
]);
