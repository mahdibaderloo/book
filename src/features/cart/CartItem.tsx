import { FaTrashCan } from "react-icons/fa6";
import { TiMinus, TiPlus } from "react-icons/ti";

export default function CartItem() {
  return (
    <li className="w-[80%] mx-auto flex justify-between items-center pt-2 pb-4">
      <div className="flex gap-2">
        <img src="" alt="محصول" className="w-24 h-24 bg-amber-200 rounded-xl" />
        <div className="flex flex-col justify-between py-4">
          <p className="font-medium text-sm">کتاب</p>
          <span className="text-[0.9rem]">160,000</span>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="w-6 h-6 bg-orange-400 hover:bg-orange-500 transition-all duration-300 shadow text-md rounded-lg flex justify-center items-center cursor-pointer">
          <TiPlus />
        </button>
        <span className="font-semibold">1</span>
        <button className="w-6 h-6 bg-orange-300 hover:bg-orange-500 transition-all duration-300 shadow text-md rounded-lg flex justify-center items-center cursor-pointer">
          <TiMinus />
        </button>
      </div>
      <span className="font-medium">160,000</span>
      <FaTrashCan />
    </li>
  );
}
