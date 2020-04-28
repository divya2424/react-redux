import App from "../../App/App";
import React from "react";

import PageNotFound from "../../Shared/PageNotFound/PageNotFound.jsx";
import MemberComponent from "../../../container/Dashboard/Account";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>,
  },
  {
    path: "/bubblegum",
    strict: true,
    sensitive: true,
    exact: true,
    // sidebar: () => <div>bubblegum!</div>,
    main: MemberComponent,
  },
  {
    path: "*",
    main: PageNotFound,
  },
];

export default routes;
