import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Game from "./components/game/Game";
import Agents from "./components/agents/Agents";
import Maps from "./components/maps/Maps";
import Weapons from "./components/weapons/Weapons";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Homepage />,
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