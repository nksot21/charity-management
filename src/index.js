import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DonorsPage from "./modules/DonorsPage/screens/DonorsPage";
import DonorDetailPage from "./modules/DonorDetailPage/screens/DonorDetailPage";
import ErrorPage from './modules/ErrorPage/ErrorPage';
import LandingPage from './modules/LandingPage/screens/LandingPage';
import HomepageRoot from './modules/Homepage/screens/HomepageRoot';
import Receiver from './modules/ReceiverPage/screens/Receiver';
import AddReceiver from './modules/ReceiverPage/screens/AddReceiver';
import DonationPage from "./modules/DonationPage/screens/DonationPage";
import EventsPage from "./modules/EventsPage/screens/EventsPage";
import EventDetailPage from "./modules/EventDetailPage/screens/EventDetailPage";
const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
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
          {
            path: "donations",
            element: <DonationPage />,
          },
          {
            path: "events",
            children: [
              {
                index: true,
                element: <EventsPage/>
              }, 
              {
                path: ":eventId",
                element: <EventDetailPage/>
              }
            ]
          }
        ],
      },
      {
        path: "/gioi-thieu",
        element: <LandingPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
