import { HiOutlineMail } from "react-icons/hi";
import backgroundImg from "../assets/background.png";
import booksImg from "../assets/books.png";
import { TbLockPassword } from "react-icons/tb";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function Login() {
  return (
    <div
      className="h-screen relative overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="bg-black h-screen opacity-80" />
      <form className="absolute top-50 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg flex flex-col justify-center items-center p-4 w-90">
        <img src={booksImg} alt="لوگو" className="w-24" />
        <p className="text-white font-bold text-3xl">صفحه ورود</p>
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
          <FaRegEye className="text-xl text-gray-700 cursor-pointer" />
          {/* <FaRegEyeSlash className="text-xl text-gray-700 cursor-pointer" /> */}
          <input
            type="password"
            placeholder="Password"
            dir="ltr"
            className="border-none outline-none py-1 w-full font-medium"
          />
          <TbLockPassword className="text-2xl text-gray-700" />
        </div>
        <button className="flex items-center justify-center bg-gray-950 hover:bg-gray-900 hover:shadow transition-all duration-400 text-gray-50 rounded-xl p-2 pb-3 w-[90%] mt-10 cursor-pointer font-medium text-lg">
          <span>ورود</span>
        </button>
      </form>
    </div>
  );
}
