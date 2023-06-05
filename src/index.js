import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DonorsPage from "./modules/DonorsPage/screens/DonorsPage";
import DonorDetailPage from "./modules/DonorDetailPage/screens/DonorDetailPage";
import LandingPage from "./modules/LandingPage/screens/LandingPage";
import HomepageRoot from "./modules/Homepage/screens/HomepageRoot";
import Receiver from "./modules/ReceiverPage/screens/Receiver";
import AddReceiver from "./modules/ReceiverPage/screens/AddReceiver";
import DonationPage from "./modules/DonationPage/screens/DonationPage";
import EventsPage from "./modules/EventsPage/screens/EventsPage";
import EventDetailPage from "./modules/EventDetailPage/screens/EventDetailPage";
import AdminDonorsPage from "./modules/AdminDonorsPage/screens/AdminDonorsPage";
import AdminEventsPage from "./modules/AdminEventsPage/screens/AdminEventsPage";
import { Provider } from "react-redux";
import store from "./store/store";
import SomethingWentWrong from "./globalComponents/NoResult/Error";
import Signup from "./modules/Authentication/screens/Signup";
import Login from "./modules/Authentication/screens/Login";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    errorElement: <SomethingWentWrong />,
    children: [
      {
        path: "",
        element: <HomepageRoot />,
        errorElement: <SomethingWentWrong />,
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
              {
                path: "profile",
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
        path: "dang-ky",
        element: <Signup />,
      },
      {
        path: "dang-nhap",
        element: <Login />,
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
