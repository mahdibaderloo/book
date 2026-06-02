export default function ProductItem() {
  return (
    <li className="flex flex-col p-2 rounded-lg overflow-hidden shadow bg-white">
      <div className="w-36 h-36 bg-gray-50 shadow rounded-lg overflow-hidden cursor-pointer">
        <img src="" alt="" />
      </div>
      <p className="text-[0.8rem] font-medium mt-2">کتاب</p>
      <span className="text-[0.8rem] font-medium mt-1">160,000</span>
      <button className="bg-orange-300 hover:bg-orange-400 transition-all duration-400 shadow rounded-[0.3rem] text-[0.7rem] font-medium py-1 cursor-pointer mt-2">
        افزودن به سبد خرید
      </button>
    </li>
  );
}
