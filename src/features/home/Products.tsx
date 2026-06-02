export default function Products() {
  return (
    <div className="mt-4 p-4">
      <p className="border-r-4 border-orange-300 pb-1 pr-1 text-sm font-semibold">
        محصولات
      </p>
      <ul className="flex justify-center items-center flex-wrap mt-8">
        <li className="flex flex-col p-2 rounded-lg overflow-hidden shadow bg-white">
          <div className="w-34 h-34 bg-gray-50 shadow rounded-lg overflow-hidden cursor-pointer">
            <img src="" alt="" />
          </div>
          <p className="text-[0.8rem] font-medium mt-2">کتاب</p>
          <span className="text-[0.8rem] font-medium mt-1">160,000</span>
          <button className="bg-orange-300 hover:bg-orange-400 transition-all duration-400 shadow rounded-[0.3rem] text-[0.7rem] font-medium py-1 cursor-pointer mt-2">
            افزودن به سبد خرید
          </button>
        </li>
      </ul>
    </div>
  );
}
