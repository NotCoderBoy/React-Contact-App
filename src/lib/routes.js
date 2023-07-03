import { createBrowserRouter } from "react-router-dom";
import Login from "pages/login/Login";
import Register from "pages/register/Register";
import Home from "pages/home/Home";
export const paths = {
  // pages
  ROOT: "/",
  LOGIN: "/login",
  REGISTER: "/register",
};

export const router = createBrowserRouter([
  { path: paths.ROOT, element: <Home /> },
  { path: paths.LOGIN, element: <Login /> },
  { path: paths.REGISTER, element: <Register /> },
]);
