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
import ReceiverDetail from "./modules/ReceiverPage/screens/ReceiverDetail";
import EventsPage from "./modules/EventsPage/screens/EventsPage";
import EventDetailPage from "./modules/EventDetailPage/screens/EventDetailPage";
import AdminDonorsPage from "./modules/AdminDonorsPage/screens/AdminDonorsPage";
import AdminEventsPage from "./modules/AdminEventsPage/screens/AdminEventsPage";
import UpdateReceiver from "./modules/ReceiverPage/screens/UpdateReceiver";
import DistributionPage from "./modules/DistributionPage/screens/DistributionPage";
import { Provider } from "react-redux";
import store from "./store/store";
import InventoryPage from "./modules/InventoryManagePage/screens/InventoryPage";
import DetailCategory from "./modules/InventoryManagePage/screens/DetailCategory";
import SomethingWentWrong from "./globalComponents/NoResult/Error";
import Signup from "./modules/Authentication/screens/Signup";
import Login from "./modules/Authentication/screens/Login";
import CreateDistributionPage from "./modules/AdminEventsPage/screens/CreateDistributionPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import NotAllow from "./globalComponents/NoResult/NotAllow";

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
            path: "nha-hao-tam",
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
            path: "quyen-gop",
            element: <DonationPage />,
          },
          {
            path: "su-kien",
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
            path: "trang-ca-nhan",
            element: <DonorDetailPage />,
          },
          {
            element: <ProtectedRoute />,
            children: [
              {
                path: "quan-ly",
                children: [
                  {
                    path: "nha-hao-tam",
                    element: <AdminDonorsPage />,
                  },
                  {
                    path: "su-kien",
                    children: [
                      {
                        index: true,
                        element: <AdminEventsPage />,
                      },
                      {
                        path: ":id/them-phan-phat",
                        element: <CreateDistributionPage />,
                      },
                    ],
                  },
                  {
                    path: "tai-tro",
                    element: <DistributionPage />,
                  },
                  {
                    path: "kho",
                    children: [
                      {
                        index: true,
                        element: <InventoryPage />,
                      },
                      {
                        path: ":id",
                        element: <DetailCategory />,
                      },
                    ],
                  },
                  {
                    path: "nguoi-nhan",
                    children: [
                      {
                        index: true,
                        element: <Receiver />,
                      },
                      {
                        path: "them",
                        element: <AddReceiver />,
                      },
                      {
                        path: ":id",
                        element: <ReceiverDetail />,
                      },
                      {
                        path: ":id/sua",
                        element: <UpdateReceiver />,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "khong-co-quyen",
        element: <NotAllow />,
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
