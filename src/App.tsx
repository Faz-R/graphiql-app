import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Template from "./Pages/Template";
import Welcome from "./Pages/Welcome";
import GraphIQL from "./Pages/GraphIQl";
import Error from "./Pages/Error";
import SignUp from "./Pages/Registration";
import SignIn from "./Pages/Auth";
import ProtectedRoute from "./utils/ProtectedRoute";

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
        element: (
          <ProtectedRoute route="/graph">
            <SignIn />
          </ProtectedRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <ProtectedRoute route="/graph">
            <SignUp />
          </ProtectedRoute>
        ),
      },
      {
        path: "/graph",

        element: (
          <ProtectedRoute route="/" isOtherWay={false}>
            <GraphIQL />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
