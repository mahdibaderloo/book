import { FaTrashCan } from "react-icons/fa6";
import { TiMinus, TiPlus } from "react-icons/ti";
import type { Book } from "../../types/types";

interface Item extends Book {
  quantity: number;
}

export default function CartItem({ item }: { item: Item }) {
  return (
    <li className="w-[80%] mx-auto flex justify-between items-center pt-2 pb-4">
      <div className="flex gap-4">
        <img
          src={item.imageUrl}
          alt="محصول"
          className="w-24 h-24 bg-amber-200 rounded-xl shadow"
        />
        <div className="flex flex-col justify-between py-4 w-50">
          <p className="font-medium text-md">{item.title}</p>
          <span className="text-[0.9rem] font-medium">
            {item.price.toLocaleString()}
          </span>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="w-6 h-6 bg-orange-400 hover:bg-orange-500 transition-all duration-300 shadow text-md rounded-lg flex justify-center items-center cursor-pointer">
          <TiPlus />
        </button>
        <span className="font-semibold">{item.quantity}</span>
        <button className="w-6 h-6 bg-orange-300 hover:bg-orange-500 transition-all duration-300 shadow text-md rounded-lg flex justify-center items-center cursor-pointer">
          <TiMinus />
        </button>
      </div>
      <span className="font-medium">
        {(item.quantity * item.price).toLocaleString()}
      </span>
      <FaTrashCan className="text-orange-400 cursor-pointer" />
    </li>
  );
}
