import { BsSearch } from "react-icons/bs";

export default function Filter() {
    return (
        <div className="flex flex-col gap-y-2.5">
            <h1 className="text-3xl font-light">
                Search results for <b>London</b>
            </h1>
            <div className="w-full">
                <div className="flex flex-col gap-2">
                    <label htmlFor="type" className="text-sm">
                        Type
                    </label>
                    <select
                        id="type"
                        name="type"
                        className="p-4 border border-[#a5abb4] rounded-md"
                    >
                        <option value="">any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <label htmlFor="type" className="text-sm">
                        Type
                    </label>
                    <select
                        id="type"
                        name="type"
                        className="p-2 w-24 border border-[#a5abb4] rounded-sm"
                    >
                        <option value="">any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="property" className="text-sm">
                        Property
                    </label>
                    <select
                        id="property"
                        name="property"
                        className="w-24 p-2 border border-[#a5abb4] rounded-sm"
                    >
                        <option value="">any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="minPrice" className="text-sm">
                        Min Price
                    </label>
                    <input
                        className="w-24 p-2 border border-[#a5abb4] rounded-sm"
                        type="number"
                        id="minPrice"
                        name="minPrice"
                        placeholder="any"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="maxPrice" className="text-sm">
                        Max Price
                    </label>
                    <input
                        className="w-24 p-2 border border-[#a5abb4] rounded-sm"
                        type="text"
                        id="maxPrice"
                        name="maxPrice"
                        placeholder="any"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="bedroom" className="text-sm">
                        Bedroom
                    </label>
                    <input
                        className="w-24 p-2 border border-[#a5abb4] rounded-sm"
                        type="text"
                        id="bedroom"
                        name="bedroom"
                        placeholder="any"
                    />
                </div>
                <button className="p-1 flex justify-center items-center text-3xl rounded-sm text-[#f0ebd8] bg-[#1d2d44] w-28">
                    <BsSearch />
                </button>
            </div>
        </div>
    );
}
