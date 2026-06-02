import { FaRegArrowAltCircleDown } from "react-icons/fa";
import bannerImg from "../../assets/books.png";

export default function Banner() {
  return (
    <section className="w-full bg-orange-300 h-60 flex justify-between items-center max-w-6xl mx-auto">
      <img src={bannerImg} alt="books" className="w-60 mr-14" />
      <div className="ml-20 text-2xl font-bold">
        <p className="text-orange-50">کـتـابـی کــــه دنبالــش بودی</p>
        <p className="text-orange-50">یه قدم باهاش فاصله داری</p>
        <button className="bg-orange-100 hover:bg-orange-50 transition-all duration-400 hover:shadow flex justify-center items-center gap-1 mt-4 text-[0.75rem] font-medium px-2 py-1 justify-self-end rounded-2xl cursor-pointer">
          <span>مشاهده محصولات</span>
          <FaRegArrowAltCircleDown />
        </button>
      </div>
    </section>
  );
}
