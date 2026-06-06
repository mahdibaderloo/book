import Button from "../../components/Button";

export default function Total({ total }: { total: number }) {
  return (
    <div className="p-4 border-t-2 border-gray-300 w-full flex flex-col justify-center items-center">
      <div className="flex justify-between items-center px-2 w-84 font-bold">
        <p>جمع خرید</p>
        <p>{total.toLocaleString()}</p>
      </div>
      <Button title="پرداخت" width="90" mt="4" />
    </div>
  );
}
