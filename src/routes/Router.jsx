import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import Classes from "../pages/classes/classes/Classes";
import Schedule from "../pages/schedule/schedule/Schedule";
import Instructors from "../pages/instructors/Instructors";
import ContactUs from "../pages/contactUs/contactUs/ContactUs";
import AboutUs from "../pages/aboutUs/AboutUs/AboutUs";
import SingleClass from "../pages/singleClasses/singleClass/SingleClass";
import Dashboard from "../layouts/Dashboard";
import AddClass from "../pages/dashboard/addClass/AddClass";
import AddInstructor from "../pages/dashboard/addInstructor/AddInstructor";
import AddEvent from "../pages/dashboard/addEvent/AddEvent";
import Blog from "../pages/blog/blog/Blog";
import Login from "../pages/login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/classes/",
        element: <Classes />,
      },
      {
        path: "/class/:url",
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
        element: <ContactUs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/add-class",
        element: <AddClass />,
      },
      {
        path: "/dashboard/add-instructor",
        element: <AddInstructor />,
      },
      {
        path: "/dashboard/add-event",
        element: <AddEvent />,
      },
    ],
  },
  {
    path: "/admin-login",
    element: <Login />,
  },
  {
    path: '/admin-signup',
    element: <SignUp />
  }
]);
