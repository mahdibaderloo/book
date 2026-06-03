import CartItem from "./CartItem";

export default function CartItems() {
  return (
    <ul className="flex flex-col gap-2 mt-8 p-8 divide-y-2 divide-gray-300 flex-1 overflow-y-auto">
      <CartItem />
      <CartItem />
      <CartItem />
    </ul>
  );
}
