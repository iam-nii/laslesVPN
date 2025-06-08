import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Main from "./pages/Main/Main";
import Plans from "./pages/Plans/Plans";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "/plans",
    element: <Plans />,
  },
]);

export default router;
