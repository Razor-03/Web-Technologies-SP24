import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const types = ["buy", "rent"];

export default function Searchbar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div className="">
      <div className="">
        {types.map((type) => {
          return (
            <button
              key={type}
              className={`px-7 py-3 border border-[#a5abb4] md:border-b-0 capitalize ${
                query.type === type ? "text-[#f0ebd8] bg-[#1d2d44]" : ""
              } first:rounded-tl-md first:border-r-0 last:rounded-tr-md last:border-l-0`}
              onClick={() => switchType(type)}
            >
              {type}
            </button>
          );
        })}
      </div>
      <form
        action=""
        className="flex flex-col gap-y-2 mt-2 md:mt-0 md:flex-row justify-between md:border md:border-[#a5abb4] md:h-16"
      >
        <input
          type="text"
          name="location"
          placeholder="Where"
          className="p-2 border border-x-0 border-t-0 border-b-[#a5abb4] md:border-0 md:flex-auto md:w-40 md:px-2"
        />
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          min={0}
          max={1000000000}
          className="p-2 border border-x-0 border-t-0 border-b-[#a5abb4] md:border-0 md:w-20 md:flex-auto md:px-2"
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          min={0}
          max={1000000000}
          className="p-2 border border-x-0 border-t-0 border-b-[#a5abb4] md:border-0 md:w-20 md:flex-auto md:px-2"
        />
        <button className="flex justify-center items-center px-4 text-3xl p-2 text-[#f0ebd8] bg-[#1d2d44] flex-1 md:max-w-20">
          <BsSearch />
        </button>
      </form>
    </div>
  );
}
