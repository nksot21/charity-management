import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DonorsPage from "./modules/DonorsPage/screens/DonorsPage";
import DonorDetailPage from "./modules/DonorDetailPage/screens/DonorDetailPage";
import ErrorPage from "./modules/ErrorPage/ErrorPage";
import LandingPage from "./modules/LandingPage/screens/LandingPage";
import HomepageRoot from "./modules/Homepage/screens/HomepageRoot";
import Receiver from "./modules/ReceiverPage/screens/Receiver";
import AddReceiver from "./modules/ReceiverPage/screens/AddReceiver";
import DonationPage from "./modules/DonationPage/screens/DonationPage";
import ReceiverDetail from "./modules/ReceiverPage/screens/ReceiverDetail";
import EventsPage from "./modules/EventsPage/screens/EventsPage";
import EventDetailPage from "./modules/EventDetailPage/screens/EventDetailPage";
import AdminDonorsPage from "./modules/AdminDonorsPage/screens/AdminDonorsPage";
import AdminEventsPage from "./modules/AdminEventsPage/screens/AdminEventsPage";
import { Update } from "@mui/icons-material";
import UpdateReceiver from "./modules/ReceiverPage/screens/UpdateReceiver";
import DistributionPage from "./modules/DistributionPage/screens/DistributionPage";
import { Provider } from "react-redux";
import store from "./store/store";

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
            path: "trang-chu",
            element: <LandingPage />,
          },
          {
            path: "nguoi-nhan",
            element: <Receiver />,
          },
          {
            path: "quan-ly/tai-tro",
            element: <DistributionPage />,
          },
          {
            path: "nguoi-nhan/them",
            element: <AddReceiver />,
          },
          {
            path: ":nguoi-nhan/:id",
            element: <ReceiverDetail />,
          },
          {
            path: ":nguoi-nhan/:id/sua",
            element: <UpdateReceiver />,
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
                element: <EventsPage />,
              },
              {
                path: ":eventId",
                element: <EventDetailPage />,
              },
            ],
          },
          {
            path: "admin",
            children: [
              {
                path: "manage",
                children: [
                  {
                    path: "donors",
                    element: <AdminDonorsPage />,
                  },
                  {
                    path: "events",
                    element: <AdminEventsPage />,
                  },
                ],
              },
            ],
          },
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
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
