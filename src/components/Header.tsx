import { BsCart3, BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex items-center justify-center w-full p-4 font-noto">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="logo" className="w-12" />
      </Link>
      <form className="flex items-center justify-center h-8 border-2 border-gray-400 rounded-2xl overflow-hidden mx-6 shadow">
        <input
          type="text"
          placeholder="دنبال چه کتابی میگردی؟"
          className="w-64 outline-none px-1.5 h-full text-sm"
        />
        <button
          type="button"
          className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-400 h-full w-18 pb-1 text-sm cursor-pointer"
        >
          جستجو
        </button>
      </form>
      <Link
        to="/shopping-cart"
        className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-400 p-1.5 w-8 h-8 flex justify-center items-center rounded-full shadow"
      >
        <BsCart3 className="text-lg" />
      </Link>
      <Link
        to="/dashboard"
        className="mr-4 bg-yellow-500 hover:bg-yellow-400 transition-all duration-400 p-1.5 w-8 h-8 flex justify-center items-center rounded-full shadow"
      >
        <BsPerson className="text-2xl" />
      </Link>
      <Link to="/dashboard">
        <span className="mr-2 text-sm">نام کاربری</span>
      </Link>
    </header>
  );
}
