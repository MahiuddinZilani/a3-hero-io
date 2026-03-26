import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AllApps from "../Pages/AllApps/AllApps";
import AppDetails from "../Components/AppDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        loader: () => fetch("./apps.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("./apps.json"),
        Component: AllApps,
      },
      {
        path: "/appDetails/:id",
        Component: AppDetails,
      },
      {
        path: "/installation",
        element: <div>Installation</div>,
      },
    ],
  },
]);
