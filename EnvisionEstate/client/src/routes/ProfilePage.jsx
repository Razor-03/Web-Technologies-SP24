import List from "../components/List";

export default function ProfilePage() {
    return (
        <div className="profilePage flex h-full">
            <div className="details basis-3/5">
                <div className="wrapper pe-12 flex flex-col gap-12">
                    <div className="title flex items-center justify-between">
                        <h1 className="font-light text-4xl">User Information</h1>
                        <button className="py-3 px-6 bg-[#1d2d44] rounded-md text-[#f0ebd8]">Update Profile</button>
                    </div>
                    <div className="info flex flex-col gap-5">
                        <span className="flex items-center gap-5">Username: <b>John Doe</b></span>
                        <span className="flex items-center gap-5">Email: <b>john@something.com</b></span>
                    </div>
                    <div className="title flex items-center justify-between">
                        <h1 className="font-light text-4xl">My List</h1>
                        <button className="py-3 px-6 bg-[#1d2d44] rounded-md text-[#f0ebd8]">Create new post</button>
                    </div>
                    <List/>
                    <div className="title flex items-center justify-between">
                        <h1 className="font-light text-4xl">Saved List</h1>
                    </div>
                    <List/>
                </div>
            </div>
            <div className="chatContainer basis-2/5 bg-[#f0ebd8] h-full">
                <div className="wrapper px-5"></div>
            </div>
        </div>
    )
}