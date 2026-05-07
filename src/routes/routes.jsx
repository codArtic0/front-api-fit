import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import RegistrarRefeicao from "../pages/RegistrarRefeicao";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";

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
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
      },
      {
        path: "/registrarRefeicao",
        element: <ProtectedRoute><RegistrarRefeicao /></ProtectedRoute>,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);