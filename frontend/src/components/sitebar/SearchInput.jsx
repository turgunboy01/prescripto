import React from "react";
import { IoIosSearch } from "react-icons/io";
const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
      />
      <button className="btn btn-circle bg-sky-500 text-white" type="submit">
        <IoIosSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
