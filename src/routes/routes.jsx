import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import RegistrarRefeicao from "../pages/RegistrarRefeicao";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/registrarRefeicao",
        element: <RegistrarRefeicao />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);