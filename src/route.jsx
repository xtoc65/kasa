import {
    createBrowserRouter
  } from "react-router-dom";
import App from "./App";
import Apropos from "./pages/apropos/Apropos";
import Home from "./pages/home/Home";
import Error from "./pages/error/error";
import Logement from "./pages/logement/logemement"
   
  // Instead of this:
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
            path: "/apropos",
            element: <Apropos />
        },
        {
            path: "/home",
            element: <Home />
        },
        {
          path: "/logement/:id",
          element: <Logement />
        }
      ],
    },
  ]);

  export default router;