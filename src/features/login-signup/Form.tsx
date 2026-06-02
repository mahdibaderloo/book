import { useState } from "react";
import { Link } from "react-router-dom";

import { HiOutlineMail } from "react-icons/hi";
import { TbLockPassword } from "react-icons/tb";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import booksImg from "../../assets/books.png";

export default function Form({ title }) {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPasswordToggle() {
    setShowPassword((s) => !s);
  }

  return (
    <form className="absolute top-30 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg flex flex-col justify-center items-center p-4 w-90">
      <Link to="/" className="w-full flex justify-end">
        <IoIosArrowBack className="text-gray-200 hover:text-gray-400 text-2xl cursor-pointer transition-all duration-400" />
      </Link>
      <img src={booksImg} alt="لوگو" className="w-24" />
      <p className="text-white font-bold text-3xl">{title}</p>
      <div className="flex gap-1 bg-gray-300 rounded-xl p-2 items-center mt-8 w-[90%]">
        <input
          type="email"
          placeholder="Email"
          dir="ltr"
          className="border-none outline-none py-1 w-full font-medium"
        />
        <HiOutlineMail className="text-2xl text-gray-700" />
      </div>
      <div className="flex gap-1 bg-gray-300 rounded-xl p-2 items-center mt-4 w-[90%]">
        {showPassword ? (
          <FaRegEye
            className="text-xl text-gray-700 cursor-pointer"
            onClick={handleShowPasswordToggle}
          />
        ) : (
          <FaRegEyeSlash
            className="text-xl text-gray-700 cursor-pointer"
            onClick={handleShowPasswordToggle}
          />
        )}
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          dir="ltr"
          className="border-none outline-none py-1 w-full font-medium"
        />
        <TbLockPassword className="text-2xl text-gray-700" />
      </div>
      <p className="mt-2 text-sm">
        <span className="text-gray-400">حساب کاربری نداری؟</span>
        <Link
          to="/signup"
          className="mr-2 text-gray-400 hover:text-gray-50 transition-all duration-400"
        >
          ثبت نام
        </Link>
      </p>
      <button className="flex items-center justify-center bg-gray-950 hover:bg-gray-900 hover:shadow transition-all duration-400 text-gray-50 rounded-xl p-2 pb-3 w-[90%] mt-10 cursor-pointer font-medium text-lg">
        <span>ورود</span>
      </button>
    </form>
  );
}
