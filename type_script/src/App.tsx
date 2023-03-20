import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import RootLayout from "./pages/Layout/Root";
import LoginPage, { loginAction } from "./pages/login";
import OurStorePage from "./pages/our-store";
import AboutUsPage from "./pages/about-us";
import DashboardPage from "./pages/admin/dashboard";
import AdminLayout from "./pages/Layout/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage />, action: loginAction },
      { path: "our-store", element: <OurStorePage /> },
      { path: "about-us", element: <AboutUsPage /> },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [{ index: true, element: <DashboardPage /> }],
  },
]);

const App: React.FC = () => <RouterProvider router={router} />;
export default App;
