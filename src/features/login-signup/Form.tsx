import { Link } from "react-router-dom";
import type { FormProps } from "../../types/types";

import { IoIosArrowBack } from "react-icons/io";
import booksImg from "../../assets/books.png";
import Button from "./Button";

export default function Form({
  title,
  children,
  linkText,
  linkTitle,
  url,
  buttonTitle,
}: FormProps) {
  return (
    <form className="absolute top-30 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg flex flex-col justify-center items-center p-4 w-90">
      <Link to="/" className="w-full flex justify-end">
        <IoIosArrowBack className="text-gray-200 hover:text-gray-400 text-2xl cursor-pointer transition-all duration-400" />
      </Link>
      <img src={booksImg} alt="لوگو" className="w-24" />
      <p className="text-white font-bold text-3xl">{title}</p>
      {children}
      <p className="mt-2 text-sm">
        <span className="text-gray-400">{linkText}</span>
        <Link
          to={url}
          className="mr-2 text-gray-400 hover:text-gray-50 transition-all duration-400"
        >
          {linkTitle}
        </Link>
      </p>
      <Button title={buttonTitle} />
    </form>
  );
}
