import type { RouteObject } from "react-router-dom";

import { Layout } from "@pages/home/layout";
import { Page } from "@pages/home/page";

export const homeRoute: RouteObject = {
  children: [
    {
      element: <Page />,
      index: true,
      path: "/todo-app/home/",
    },
  ],
  element: <Layout />,
  path: "/todo-app/home/",
};
