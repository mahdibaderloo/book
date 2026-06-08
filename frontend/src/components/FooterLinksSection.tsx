import { Link } from "react-router-dom";

const links = [
  { id: 1, path: "/", title: "خانه" },
  { id: 2, path: "/shopping-cart", title: "سبد خرید" },
  { id: 3, path: "/dashboard", title: "داشبورد" },
];

export default function FooterLinksSection() {
  return (
    <section className="border-b-2 border-gray-900/10 py-8 flex justify-center items-center gap-16">
      <ul className="flex flex-col gap-2">
        <p className="text-sm font-medium mb-4">دسترسی سریع</p>
        {links.map((link) => (
          <li
            key={link.id}
            className="w-fit text-[0.75rem] text-gray-600 hover:text-orange-400 transition-all duration-400 font-medium"
          >
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col gap-2">
        <p className="text-sm font-medium mb-4">ما را دنبال کنید</p>
        <li className="w-fit text-[0.75rem] text-gray-600 hover:text-pink-400 transition-all duration-400 font-medium">
          <a href="/">اینستاگرام</a>
        </li>
        <li className="w-fit text-[0.75rem] text-gray-600 hover:text-blue-600 transition-all duration-400 font-medium">
          <a href="/">تلگرام</a>
        </li>
        <li className="w-fit text-[0.75rem] text-gray-600 hover:text-black transition-all duration-400 font-medium">
          <a href="/">توییتر</a>
        </li>
      </ul>
    </section>
  );
}
