import type { CartItems } from "../../types/types";
import CartItem from "./CartItem";

export default function CartItems({ items }: { items: CartItems[] }) {
  return (
    <ul className="flex flex-col gap-2 mt-8 p-8 divide-y-2 divide-gray-300 flex-1 overflow-y-auto">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
