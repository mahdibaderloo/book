import { useNavigate } from "react-router-dom";
import type { Book } from "../../types/types";

export default function ProductItem({ book }: { book: Book }) {
  const navigate = useNavigate();

  function handleClickOnImage() {
    navigate(`/book/${book.id}`);
  }

  return (
    <li className="flex flex-col p-2 rounded-lg overflow-hidden shadow-md bg-white hover:scale-[1.02] transition-all">
      <div className="w-36 h-36 bg-gray-50 shadow rounded-lg overflow-hidden cursor-pointer">
        <img
          src={book.imageUrl}
          alt="تصویر محصول"
          onClick={handleClickOnImage}
        />
      </div>
      <p className="text-[0.8rem] font-medium mt-2">{book.title}</p>
      <span className="text-[0.8rem] font-medium mt-2">
        {book.price.toLocaleString()}
      </span>
      <button className="bg-orange-300 hover:bg-orange-400 transition-all duration-400 shadow rounded-[0.3rem] text-[0.7rem] font-medium py-1 cursor-pointer mt-2">
        افزودن به سبد خرید
      </button>
    </li>
  );
}
