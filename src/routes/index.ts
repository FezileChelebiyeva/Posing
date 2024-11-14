import { RouteObject } from "react-router-dom";
import Home from "../pages/home/Home";
import MainRoot from "../components/roots/main-root/MainRoot";

const ROUTES: RouteObject[] = [
  {
    path: "/",
    element: MainRoot(),
    children: [
      {
        path: "",
        element: Home(),
      },
    ],
  },
];

export default ROUTES;
