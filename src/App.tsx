import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Template from "./Pages/Template";
import Welcome from "./Pages/Welcome";
import GraphIQL from "./Pages/GraphIQl";
import Error from "./Pages/Error";
import SignUp from "./Pages/Registration";
import SignIn from "./Pages/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: "/auth",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/graph",
        element: <GraphIQL />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
