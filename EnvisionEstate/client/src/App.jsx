import Homepage from "./routes/Homepage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Listpage from "./routes/Listpage";
import Layout from "./routes/Layout";
import Singlepage from "./routes/Singlepage";
import ProfilePage from "./routes/ProfilePage";

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
        },
        {
          path: '/profile',
          element: <ProfilePage/>
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router}/>
  );
}