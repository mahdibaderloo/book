import Button from "../../components/Button";

export default function EmptyCart() {
  return (
    <div className="flex flex-col w-full justify-center items-center mt-24">
      <p className="text-2xl font-semibold text-orange-600">
        سبد خرید شما خالیه!
      </p>
      <Button title="مشاهده محصولات" width="90" mt="4" />
    </div>
  );
}
