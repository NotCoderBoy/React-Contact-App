import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "pages/login/Login";
import Register from "pages/register/Register";
import Home from "pages/home/Home";
import Dashboard from "pages/dashboard/Dashboard";
import Settings from "pages/settings/Settings";
import Contacts from "pages/contacts/Contacts";
import NotFound from "pages/notfound/NotFound";
import ServerError from "pages/servererror/ServerError";
import LockProfile from "pages/lockprofile/LockProfile";

export const paths = {
  // pages
  ROOT: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  NOTFOUND: "*",
  SERVERERROR: "/500",
  LOCKPROFILE: "/locked",
  DASHBOARD: "/dashboard",
  SETTINGS: "/dashboard/settings",
  CONTACTS: "/dashboard/contacts",
};

const user = true;
const ProtectedRoute = ({ children }) => {
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};

const UnProtectedRoute = ({ children }) => {
  if (user) {
    // user is not authenticated
    return <Navigate to="/dashboard" />;
  }
  return children;
};

export const router = createBrowserRouter([
  { path: paths.ROOT, element: <Home /> },
  { path: paths.NOTFOUND, element: <NotFound /> },
  { path: paths.SERVERERROR, element: <ServerError /> },
  {
    path: paths.LOGIN,
    element: (
      <UnProtectedRoute>
        <Login />
      </UnProtectedRoute>
    ),
  },
  {
    path: paths.REGISTER,
    element: (
      <UnProtectedRoute>
        <Register />
      </UnProtectedRoute>
    ),
  },
  {
    path: paths.LOCKPROFILE,
    element: (
      <UnProtectedRoute>
        <LockProfile />
      </UnProtectedRoute>
    ),
  },
  {
    path: paths.DASHBOARD,
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: paths.CONTACTS,
    element: (
      <ProtectedRoute>
        <Contacts />
      </ProtectedRoute>
    ),
  },
  {
    path: paths.SETTINGS,
    element: (
      <ProtectedRoute>
        <Settings />
      </ProtectedRoute>
    ),
  },
]);
