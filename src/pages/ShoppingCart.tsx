import { FaTrashCan } from "react-icons/fa6";
import { TiMinus, TiPlus } from "react-icons/ti";

export default function ShoppingCart() {
  return (
    <div className="max-w-6xl mx-auto p-4 flex flex-col min-h-[calc(100vh-529px-120px)]">
      <h3 className="font-bold text-2xl border-r-4 border-orange-300 pr-2 mt-8">
        سبد خرید
      </h3>
      <ul className="flex flex-col gap-2 mt-8 p-8 divide-y-2 divide-gray-300 flex-1 overflow-y-auto">
        <li className="w-[80%] mx-auto flex justify-between items-center pt-2 pb-4">
          <div className="flex gap-2">
            <img
              src=""
              alt="محصول"
              className="w-24 h-24 bg-amber-200 rounded-xl"
            />
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
      </ul>
    </div>
  );
}
