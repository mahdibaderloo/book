import { Link } from "react-router-dom";

export default function FooterLinksSection() {
  return (
    <section className="border-b-2 border-gray-900/10 py-8 flex justify-center items-center gap-16">
      <ul className="flex flex-col gap-2">
        <p className="text-sm font-medium mb-4">دسترسی سریع</p>
        <li className="w-fit text-[0.85rem] text-gray-600 hover:text-orange-400 transition-all duration-400 font-medium">
          <Link to="/">خانه</Link>
        </li>
        <li className="w-fit text-[0.85rem] text-gray-600 hover:text-orange-400 transition-all duration-400 font-medium">
          <Link to="/shopping-cart">سبد خرید</Link>
        </li>
        <li className="w-fit text-[0.85rem] text-gray-600 hover:text-orange-400 transition-all duration-400 font-medium">
          <Link to="/dashboard">داشبورد</Link>
        </li>
      </ul>
      <ul className="flex flex-col gap-2">
        <p className="text-sm font-medium mb-4">ما را دنبال کنید</p>
        <li className="w-fit text-[0.85rem] text-gray-600 hover:text-pink-400 transition-all duration-400 font-medium">
          <a href="/">اینستاگرام</a>
        </li>
        <li className="w-fit text-[0.85rem] text-gray-600 hover:text-blue-600 transition-all duration-400 font-medium">
          <a href="/shopping-cart">تلگرام</a>
        </li>
        <li className="w-fit text-[0.85rem] text-gray-600 hover:text-black transition-all duration-400 font-medium">
          <a href="/dashboard">توییتر</a>
        </li>
      </ul>
    </section>
  );
}
