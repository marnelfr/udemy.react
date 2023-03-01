import React, {lazy, Suspense} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './App.css'
import RootLayout from "./pages/Section25/Layout/Root";

const ProductsPage = lazy(() => import("./pages/Section25/Products"))
const FavoritesPage = lazy(() => import('./pages/Section25/Favorites'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {index: true, element: <Suspense fallback={<p>Loading...</p>}><ProductsPage/></Suspense>},
      {path: '/favorites', element: <Suspense fallback={<p>Loading...</p>}><FavoritesPage/></Suspense>}
    ]
  },
])

const FavApp = () => <RouterProvider router={router} />

export default FavApp;
