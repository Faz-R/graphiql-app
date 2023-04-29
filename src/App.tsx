import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Template from './Pages/Template';
import Welcome from './Pages/Welcome';
import Auth from './Pages/Auth';
import GraphIQL from './Pages/GraphIQl';
import Error from './Pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: '/auth',
        element: <Auth />,
      },
      {
        path: '/graph',
        element: <GraphIQL />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
