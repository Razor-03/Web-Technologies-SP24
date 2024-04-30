import Navbar from "./components/Navbar";
import Homepage from "./routes/Homepage";
export default function App() {
  return (
    <div className="flex flex-col max-w-[100%] sm:max-w-[90%] md:max-w-[80%] h-screen mx-auto px-[20px] text-[#0d1321]">
      <div className="">
        <Navbar />
      </div>
      <div className="flex-1">
        <Homepage />
      </div>
    </div>
  );
}