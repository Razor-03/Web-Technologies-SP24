import Searchbar from "../components/Searchbar";

export default function Homepage() {
    return (
        <main className="flex flex-col md:flex-row h-full bg-[#fff00f]">
            <div className="basis-3/5">
                <div className="pr-24 flex flex-col justify-center gap-y-12 h-full">
                    <h1 className="text-6xl font-semibold">Discover Your Dream Home</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At sapiente tempora modi dolore nisi laudantium cupiditate non deserunt quis consequatur! Dolore consectetur cumque fugiat soluta sunt fuga nulla dicta eaque.
                    </p>
                    <Searchbar />
                    <div className="flex justify-between">
                        <div className="">
                            <h1 className="text-3xl font-semibold">16+</h1>
                            <h2 className="text-xl font-light">Years of Experience</h2>
                        </div>
                        <div className="">
                            <h1 className="text-3xl font-semibold">16+</h1>
                            <h2 className="text-xl font-light">Awards Gained</h2>
                        </div>
                        <div className="">
                            <h1 className="text-3xl font-semibold">16+</h1>
                            <h2 className="text-xl font-light">Awards Gained</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basis-2/5 flex items-center bg-[#f0ebd8] relative hidden lg:flex">
                <img className="rounded-md absolute right-0" src="/houses.jpg" alt="" />
            </div>
        </main>
    )
}