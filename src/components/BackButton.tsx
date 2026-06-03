import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export default function BackButton() {
  return (
    <Link to="/" className="w-full flex justify-end">
      <IoIosArrowBack className="text-gray-200 hover:text-gray-400 text-2xl cursor-pointer transition-all duration-400" />
    </Link>
  );
}
