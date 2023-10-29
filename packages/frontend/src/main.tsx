import "@styles/tailwind.scss";

import React from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { routerClient } from "@src/router";
import { storeClient } from "@src/store";

createRoot(document.querySelector("#root") as HTMLDivElement).render(
  <React.StrictMode>
    <ReduxProvider store={storeClient}>
      <RouterProvider router={routerClient} />
    </ReduxProvider>
  </React.StrictMode>
);
