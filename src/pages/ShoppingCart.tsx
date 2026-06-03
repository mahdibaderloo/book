import CartItems from "../features/cart/CartItems";
// import EmptyCart from "../features/cart/EmptyCart";
import Total from "../features/cart/Total";

export default function ShoppingCart() {
  return (
    <div className="max-w-6xl mx-auto p-4 flex flex-col min-h-[calc(100vh-529px-120px)]">
      <h3 className="font-bold text-2xl border-r-4 border-orange-300 pr-2 mt-8">
        سبد خرید
      </h3>
      <CartItems />
      {/* <EmptyCart /> */}
      <Total />
    </div>
  );
}
