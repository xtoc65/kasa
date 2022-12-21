import {
    createBrowserRouter
  } from "react-router-dom";
import App from "./App";
import Apropos from "./pages/apropos/Apropos";
import Home from "./pages/home/Home";
   
  // Instead of this:
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/apropos",
            element: <Apropos />
        },
        {
            path: "/home",
            element: <Home />
        }
      ],
    },
  ]);

  export default router;