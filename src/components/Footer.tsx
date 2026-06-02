import { Link } from "react-router-dom";
import FooterBenefitSection from "./FooterBenefitSection";

export default function Footer() {
  return (
    <footer className="p-4">
      <FooterBenefitSection />
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
            <Link to="/">اینستاگرام</Link>
          </li>
          <li className="w-fit text-[0.85rem] text-gray-600 hover:text-blue-600 transition-all duration-400 font-medium">
            <Link to="/shopping-cart">تلگرام</Link>
          </li>
          <li className="w-fit text-[0.85rem] text-gray-600 hover:text-black transition-all duration-400 font-medium">
            <Link to="/dashboard">توییتر</Link>
          </li>
        </ul>
      </section>
      <section className="mt-4 flex justify-end">
        <span className="justify-self-end text-[0.5rem] font-medium text-gray-600">
          BookStore2026©
        </span>
      </section>
    </footer>
  );
}
