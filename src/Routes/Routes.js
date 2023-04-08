import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/pages/Home/Home";
import Catagory from "../components/pages/Category/Catagory";
import News from "../components/pages/news/News";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <Catagory></Catagory>,
      },
      {
        path: "/news/:id",
        element: <News></News>,
      },
    ],
  },
]);
