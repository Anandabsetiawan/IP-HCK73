import { createBrowserRouter, redirect } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/Hompage";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      if (localStorage.getItem("accessToken")) {
        return redirect("/menu");
      }
      return null;
    },
  },
  {
    loader: () => {
      if (!localStorage.getItem("accessToken")) {
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/menu",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
