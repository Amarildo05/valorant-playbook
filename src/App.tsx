import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Agents from "./pages/Agents";
import Maps from "./pages/Maps";
import Weapons from "./pages/Weapons";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/game",
        element: <Game />,
      },
      {
        path: "/agents",
        element: <Agents />,
      },
      {
        path: "/maps",
        element: <Maps />,
      },
      {
        path: "/weapons",
        element: <Weapons />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}