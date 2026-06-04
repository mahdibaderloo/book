import Button from "../components/Button";

export default function Product() {
  return (
    <div className="flex max-w-4xl min-h-[calc(100vh-529px-120px)] mx-auto p-8">
      <section className="flex-1 p-2">
        <img
          src=""
          alt="تصویر محصول"
          className="w-90 h-90 rounded-2xl shadow"
        />
      </section>
      <section className="flex-1 p-4">
        <div className="flex flex-col gap-4 pb-4 border-b-2 border-gray-300">
          <h3 className="font-semibold">کتاب</h3>
          <p className="text-sm">ناشر</p>
          <p className="text-sm">توضیحات</p>
        </div>
        <div className="pt-4">
          <p className="font-medium">160,000</p>
          <Button title="افزودن به سبد خرید" mt="8" width="60" />
        </div>
      </section>
    </div>
  );
}
