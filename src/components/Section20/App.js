import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './App.css'
import HomePage from "../../pages/Section20/Home";
import ProductsPage from "../../pages/Section20/Products";
import ProductDetailsPage from "../../pages/Section20/ProductDetails";
import RootLayout from "../../pages/Section20/Layouts/Root";
import ErrorPage from "../../pages/Section20/Error";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage />},
      { path: '/products', element: <ProductsPage />},
      { path: '/products/:id', element: <ProductDetailsPage />}
    ],
    errorElement: <ErrorPage />
  },
])

const RouteApp = () => {
  return <RouterProvider router={router} />;
}

export default RouteApp;
