import { useNavigate } from "react-router-dom";
import type { Book } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cartSlice";
import { addToCartApi, removeFromCartApi } from "../../services/cart";
import type { RootState } from "../../store/store";

export default function ProductItem({ book }: { book: Book }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isItemInCart = cartItems.some((item) => item.id === book.id);

  const token = localStorage.getItem("token");

  function handleClickOnImage() {
    navigate(`/book/${book.id}`);
  }

  async function handleAddToCart() {
    if (user && token) {
      dispatch(addToCart(book));

      await addToCartApi(book.id, token);
    } else {
      alert("ابتدا وارد شوید");
    }
  }

  async function handleRemoveFromCart() {
    if (user && token) {
      dispatch(removeFromCart(book.id));

      await removeFromCartApi(book.id, token);
    } else {
      alert("ابتدا وارد شوید");
    }
  }

  return (
    <li className="flex flex-col p-2 rounded-lg overflow-hidden shadow-md bg-white hover:scale-[1.02] transition-all">
      <div className="w-36 h-36 bg-gray-50 shadow rounded-lg overflow-hidden cursor-pointer">
        <img
          src={book.imageUrl}
          alt="تصویر محصول"
          onClick={handleClickOnImage}
        />
      </div>
      <p className="text-[0.8rem] font-medium mt-2">{book.title}</p>
      <span className="text-[0.8rem] font-medium mt-2">
        {book.price.toLocaleString()}
      </span>
      <button
        onClick={isItemInCart ? handleRemoveFromCart : handleAddToCart}
        className={`${isItemInCart ? "bg-red-400 hover:bg-red-600" : "bg-orange-300 hover:bg-orange-400"} transition-all duration-400 shadow rounded-[0.3rem] text-[0.7rem] font-medium py-1 cursor-pointer mt-2`}
      >
        {isItemInCart ? "حذف از سبد خرید" : "افزودن به سبد خرید"}
      </button>
    </li>
  );
}
