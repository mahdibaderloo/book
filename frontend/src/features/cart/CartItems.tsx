import type { Book } from "../../types/types";
import CartItem from "./CartItem";

interface Items extends Book {
  quantity: number;
}

export default function CartItems({ items }: { items: Items[] }) {
  return (
    <ul className="flex flex-col gap-2 mt-8 p-8 divide-y-2 divide-gray-300 flex-1 overflow-y-auto">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
