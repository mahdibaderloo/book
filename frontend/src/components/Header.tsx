import { BsCart3, BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import HeaderForm from "./HeaderForm";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function Header() {
  const user = useSelector((state: RootState) => state.user.user);

  const isLogin = Boolean(user);

  return (
    <header className="flex items-center justify-center w-full p-4 font-noto bg-gray-50 fixed shadow z-50">
      <Link to="/" className="flex items-center" title="خانه">
        <img src={logo} alt="logo" className="w-12" />
      </Link>

      <HeaderForm />

      <Link
        to="/shopping-cart"
        className="bg-orange-300 hover:bg-orange-400 transition-all duration-400 p-1.5 w-8 h-8 flex justify-center items-center rounded-full shadow"
      >
        <BsCart3 className="text-lg" />
      </Link>

      <Link
        to="/dashboard"
        className="mr-4 bg-orange-300 hover:bg-orange-400 transition-all duration-400 p-1.5 w-8 h-8 flex justify-center items-center rounded-full shadow"
      >
        <BsPerson className="text-2xl" />
      </Link>

      <Link to={isLogin ? "/dashboard" : "/login"}>
        <span className="mr-2 text-sm">
          {isLogin ? user?.username : "ورود"}
        </span>
      </Link>
    </header>
  );
}
