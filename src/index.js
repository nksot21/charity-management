import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Root from './Root';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import ErrorPage from './modules/ErrorPage/ErrorPage';
import LandingPage from './modules/LandingPage/screens/LandingPage';
import HomepageRoot from './modules/Homepage/screens/HomepageRoot';
import Receiver from './modules/ReceiverPage/screens/Receiver';
import AddReceiver from './modules/ReceiverPage/screens/AddReceiver';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/gioi-thieu",
        element: <LandingPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/",
        element: <HomepageRoot />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "nguoi-nhan",
            element: <Receiver />,
          },
          {
            path: "nguoi-nhan/them",
            element: <AddReceiver />,
          },
        ]
      },
      

    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);


