import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavbarWhenNotLoggedIn() {
  const [searchKeyWord, setSearchKeyWord] = useState("");

  return (
    <header className="fixed left-0 right-0 top-0 flex justify-between border-b border-b-slate-400 bg-white px-4 py-2">
      <Link to="/home" className="font-gwendolyn text-2xl font-bold">
        Instagyou
      </Link>
      <div className="flex items-center justify-center">
        <Link
          to="/auth/login"
          className="mx-1 rounded bg-sky-400 px-3 py-1 text-sm font-bold text-white duration-300 hover:bg-sky-500"
        >
          Log in
        </Link>
        <Link
          to="/auth/register"
          className="mx-1 rounded bg-slate-100 px-3 py-1 text-sm font-bold text-slate-500 duration-300 hover:text-slate-900"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
}
