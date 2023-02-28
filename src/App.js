import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './App.css'

import ProductsPage from './pages/Section25/Products';
import FavoritesPage from './pages/Section25/Favorites';
import RootLayout from "./pages/Section25/Layout/Root";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {index: true, element: <ProductsPage/>},
      {path: '/favorites', element: <FavoritesPage/>}
    ]
  },
])

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
