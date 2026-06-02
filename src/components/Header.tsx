import { BsCart3, BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import HeaderForm from "./HeaderForm";

export default function Header() {
  return (
    <header className="flex items-center justify-center w-full p-4 font-noto">
      <Link to="/" className="flex items-center" title="خانه">
        <img src={logo} alt="logo" className="w-12" />
      </Link>
      <HeaderForm />
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
