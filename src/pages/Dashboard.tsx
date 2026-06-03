import { Link } from "react-router-dom";
import backgroundImg from "../assets/background.png";
import { IoIosArrowBack } from "react-icons/io";
import Button from "../components/Button";

export default function Dashboard() {
  return (
    <div
      className="h-screen relative"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="bg-black h-screen opacity-80" />
      <div className="absolute top-30 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-4 w-3xl flex flex-col justify-center items-center">
        <Link to="/" className="w-full flex justify-end">
          <IoIosArrowBack className="text-gray-200 hover:text-gray-400 text-2xl cursor-pointer transition-all duration-400" />
        </Link>
        <img
          src=""
          alt="پروفایل"
          className="w-40 h-40 rounded-full bg-orange-300 mt-8"
        />
        <h3 className="mt-4 text-2xl font-medium text-orange-50">Username</h3>
        <p className="text-orange-50/70 text-lg mt-2">Email@text.com</p>
        <Button title="خروج از حساب" width="60" mt="8" />
      </div>
    </div>
  );
}
