import Homepage from "./routes/Homepage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Listpage from "./routes/Listpage";
import Layout from "./routes/Layout";
import Singlepage from "./routes/Singlepage";

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Homepage/>
        },
        {
          path: '/list',
          element: <Listpage/>
        },
        {
          path: '/:id',
          element: <Singlepage/>
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router}/>
  );
}