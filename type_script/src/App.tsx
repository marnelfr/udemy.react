import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import RootLayout from "./pages/Layout/Root";
import LoginPage, { loginAction } from "./pages/login";
import OurStorePage from "./pages/our-store";
import AboutUsPage from "./pages/about-us";

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
]);

const App: React.FC = () => <RouterProvider router={router} />;
export default App;
