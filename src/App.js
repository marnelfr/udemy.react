import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './App.css'
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Layouts/Root";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage />},
      { path: '/products', element: <ProductsPage />}
    ]
  },
])

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
