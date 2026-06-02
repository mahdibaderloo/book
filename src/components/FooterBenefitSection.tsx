import { CiDeliveryTruck, CiTimer } from "react-icons/ci";

export default function FooterBenefitSection() {
  return (
    <section className="flex justify-center gap-8 border-b-2 border-gray-900/10 pb-8">
      <div className="flex items-center">
        <CiDeliveryTruck size={120} />
        <p className="text-lg font-bold pr-2">ارسال رایگان</p>
      </div>
      <div className="border-r-4 border-gray-900/20 flex items-center pr-6">
        <CiTimer size={100} />
        <p className="text-lg font-bold pr-2">پشتیبانی ۲۴ ساعته</p>
      </div>
    </section>
  );
}
