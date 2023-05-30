import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import ErrorPage from "./modules/ErrorPage/ErrorPage";
import LandingPage from "./modules/LandingPage/screens/LandingPage";
import Homepage from "./modules/Homepage/screens/Homepage";
import DonorsPage from "./modules/DonorsPage/screens/DonorsPage";
import DonorDetailPage from "./modules/DonorDetailPage/screens/DonorDetailPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "trang-chu",
        element: <Homepage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "donors",
        children: [
          {
            index: true,
            element: <DonorsPage />,
          },
          {
            path: ":donorId",
            element: <DonorDetailPage />,
          },
        ],
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
