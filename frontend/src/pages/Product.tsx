import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { useBook } from "../hooks/useBook";
import Loading from "../components/Loading";
import BackButton from "../components/BackButton";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { addToCart, removeFromCart } from "../store/slices/cartSlice";
import { addToCartApi, removeFromCartApi } from "../services/cart";
import toast from "react-hot-toast";

export default function Product() {
  const { id } = useParams();
  const { data: book, isLoading } = useBook(Number(id));

  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isItemInCart = cartItems.some((item) => item.id === Number(id));

  const token = localStorage.getItem("token");

  async function handleAddToCart() {
    if (user && token) {
      toast.success(`${book.title} به سبد خرید اضافه شد`);
      dispatch(addToCart(book));

      await addToCartApi(book.id, token);
    } else {
      alert("ابتدا وارد شوید");
    }
  }

  async function handleRemoveFromCart() {
    if (user && token) {
      toast.success(`${book.title} از سبد خرید حذف شد`);
      dispatch(removeFromCart(book.id));

      await removeFromCartApi(book.id, token);
    } else {
      alert("ابتدا وارد شوید");
    }
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex max-w-4xl min-h-[calc(100vh-529px-120px)] mx-auto p-8">
      <section className="flex-1 p-2">
        <img
          src={book.imageUrl}
          alt="تصویر محصول"
          className="w-90 h-90 rounded-2xl shadow"
        />
      </section>
      <section className="flex-1 p-4">
        <BackButton />
        <div className="flex flex-col gap-4 pb-8 border-b-2 border-gray-300">
          <h3 className="font-semibold">{book.title}</h3>
          <p className="text-sm">{book.publisher}</p>
          <p className="text-sm">{book.description}</p>
        </div>
        <div className="pt-6">
          <p className="font-medium">{book.price.toLocaleString()}</p>
          <Button
            title={isItemInCart ? "حذف از سبد خرید" : "افزودن به سبد خرید"}
            mt="8"
            width="60"
            onClick={isItemInCart ? handleRemoveFromCart : handleAddToCart}
          />
        </div>
      </section>
    </div>
  );
}
