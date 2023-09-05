import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './router/root.jsx';
import ErrorPage from './error-page';
import Australia from './router/australia-page';
import Hongkong from './router/hong_kong-page';
import Jakarta from './router/jakarta-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "Australia",
    element: <Australia/>,
  },
  {
    path: "Hongkong",
    element: <Hongkong/>,
  },
  {
    path: "Jakarta",
    element: <Jakarta/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
