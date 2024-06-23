import { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosSearch, IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export default function NavbarTop() {
  const [searchKeyWord, setSearchKeyWord] = useState("");

  return (
    <header className="fixed left-0 right-0 top-0 flex justify-between border-b border-b-slate-400 bg-white px-4 py-2 sm:hidden">
      <Link to="/home" className="font-gwendolyn text-2xl font-bold">
        Instagyou
      </Link>
      <div className="flex items-center gap-x-2">
        <form className="relative flex flex-1 items-center rounded-md bg-slate-100">
          <IoIosSearch className="relative left-2 mr-2 h-5 w-5 cursor-pointer" />
          <input
            type="text"
            id="search"
            className="bg-slate-100 px-2 py-1 text-sm outline-none"
            placeholder="Search"
            value={searchKeyWord}
            onChange={(e) => setSearchKeyWord(e.target.value)}
          />
          {searchKeyWord.length > 0 && (
            <IoMdCloseCircle
              className="absolute right-2 h-5 w-5 cursor-pointer"
              onClick={() => setSearchKeyWord("")}
            />
          )}
        </form>
        <Link to="/notifications">
          <FaRegHeart className="h-6 w-6 scale-[0.9] cursor-pointer duration-300 hover:scale-[1]" />
        </Link>
      </div>
    </header>
  );
}
