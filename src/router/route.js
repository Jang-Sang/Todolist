import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/login";
import TodoPage from "../page/todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/todo",
    element: <TodoPage />,
  },
]);

export default router;
