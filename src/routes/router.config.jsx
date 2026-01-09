import { createBrowserRouter, Outlet } from "react-router-dom";

import MainLayout from "../layouts/mainLayout";
import DashboardLayout from "../layouts/dashboardLayout";
import Home from "../pages/home";
import Articles from "../pages/articles/articles";
import Article from "../pages/articles/article";
import Support from "../pages/support";
import About from "../pages/about";
import {
  Signup,
  Login,
  singupAction,
  loginAction,
} from "../pages/auth/accounts";
import UserProfile from "../pages/profile";
import { ProfileLoader } from "../pages/profile";

let AppRoutes = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "articles",
        element: <Articles />,
        children: [{ path: "article/:id", element: <Article /> }],
      },

      { path: "support", element: <Support /> },
      { path: "about", element: <About /> },
      {path:"profile",
        loader:ProfileLoader,
        element:<UserProfile/>},
      { path: "/auth/sign-up", element: <Signup />, action: singupAction },
      { path: "auth/login", element: <Login />, action: loginAction },
      { path: "*", element: <h3> page not found or not exist</h3> },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,

    errorElement: <h3> page not found inisde dashboard</h3>,
    children: [
      {
        index: true,
        element: <h4> main dashboard </h4>,
      },
      {
        path: "posts",
        element: <h4> hello posts</h4>,
      },
      {
        path: "new-blog",
        element: <h4> hello new blog page</h4>,
      },
      {
        path: "archieve",
        element: <h4> hello archive</h4>,
      },
      {
        path: "earning",
        element: <h4> hello earning</h4>,
      },
      {
        path: "settings",
        element: <h4> hello settings</h4>,
      },
      {
        path: "*",
        element: <h4> page not found inside dashboard</h4>,
      },
    ],
  },
]);

export default AppRoutes;
