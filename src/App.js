import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './App.css'
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Layouts/Root";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage />},
      { path: '/products', element: <ProductsPage />}
    ],
    errorElement: <ErrorPage />
  },
])

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
