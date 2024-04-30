import Navbar from "./components/Navbar";
import Homepage from "./routes/Homepage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Listpage from "./routes/Listpage";

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>,
    },
    {
      path: "/list",
      element: <Listpage/>,
    },
  ]);

  return (
    // <div className="flex flex-col max-w-[100%] md:max-w-[90%] xl:max-w-[80%] md:h-screen mx-auto px-[20px] text-[#0d1321]">
    //   <div className="">
    //     <Navbar />
    //   </div>
    //   <div className="flex-1">
    //     <Homepage />
    //   </div>
    // </div>
    <RouterProvider router={router}/>
  );
}