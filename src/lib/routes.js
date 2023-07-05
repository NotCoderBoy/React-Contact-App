import { createBrowserRouter } from "react-router-dom";
import Login from "pages/login/Login";
import Register from "pages/register/Register";
import Home from "pages/home/Home";
import Dashboard from "pages/dashboard/Dashboard";

export const paths = {
  // pages
  ROOT: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/dashboard",
};

export const router = createBrowserRouter([
  { path: paths.ROOT, element: <Home /> },
  { path: paths.LOGIN, element: <Login /> },
  { path: paths.REGISTER, element: <Register /> },
  { path: paths.DASHBOARD, element: <Dashboard /> },
]);
