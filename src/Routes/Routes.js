import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/pages/Home/Home";
import Catagory from "../components/pages/Category/Catagory";
import News from "../components/pages/news/News";
import Login from "../components/pages/Share/Login/Login";
import Register from "../components/pages/Share/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import TramsAndCondition from "../components/pages/Share/Register/TramsAndCondition";
import Profile from "../components/pages/Share/Header/Profile/Profile";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/category/:id",
        element: <Catagory></Catagory>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            {" "}
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <TramsAndCondition></TramsAndCondition>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);
