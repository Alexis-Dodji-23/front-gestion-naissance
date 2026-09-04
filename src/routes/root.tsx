import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import PrivateLayout from "../layout/PrivateLayout";
import Declarations from "../pages/Declarations";
import Demandes from "../pages/Demandes";

const root = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/private",
        element: <PrivateLayout />,
        children: [
          {
            path: "declarations",
            element: <Declarations />,
          },
          {
            path: "demandes",
            element: <Demandes />,
          },
        ],
      },
    ],
  },
]);

export { root };
