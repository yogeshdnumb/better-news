import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./features/Layout/Layout";
import Home from "./pages/Home/Home";
import Articles from "./features/Articles/Articles";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/:category",
        element: <Articles />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
