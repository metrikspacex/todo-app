import { createBrowserRouter } from "react-router-dom";

import { Layout } from "@pages/layout";
import { homeRoute } from "@routes/home.routes";

export const routerClient = createBrowserRouter([
  {
    children: [homeRoute],
    element: <Layout />,
    path: "/todo-app/",
  },
]);
