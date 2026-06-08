import { useDispatch, useSelector } from "react-redux";
import CartItems from "../features/cart/CartItems";
import EmptyCart from "../features/cart/EmptyCart";
import Total from "../features/cart/Total";
import type { RootState } from "../store/store";
import { useCart } from "../hooks/useCart";
import { useEffect } from "react";
import { setCart } from "../store/slices/cartSlice";
import type { CartItemResponse } from "../types/types";
import Loading from "../components/Loading";

export default function ShoppingCart() {
  const token = localStorage.getItem("token");
  const { data: cart, isLoading } = useCart(token);
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    if (!cart) return;

    if (token) {
      dispatch(
        setCart(
          cart.items.map((item: CartItemResponse) => ({
            id: item.productId,
            title: item.productTitle,
            price: item.price,
            imageUrl: item.imageUrl,
            quantity: item.quantity,
          })),
        ),
      );
    }
  }, [cart, dispatch, token]);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-6xl mx-auto p-4 flex flex-col min-h-[calc(100vh-529px-120px)]">
      <h3 className="font-bold text-2xl border-r-4 border-orange-300 pr-2 mt-8">
        سبد خرید
      </h3>
      {items.length > 0 ? <CartItems items={items} /> : <EmptyCart />}
      <Total total={total} />
    </div>
  );
}
