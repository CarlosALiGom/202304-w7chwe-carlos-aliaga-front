import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import HomePage from "../pages/HomePage/HomePage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to={"/login"} replace /> },
      { path: "/login", element: <HomePage /> },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;