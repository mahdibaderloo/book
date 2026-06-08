import Button from "../components/Button";
import BackButton from "../components/BackButton";
import backgroundImg from "../assets/background.png";
import type { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

import userIcon from "../assets/avatar.webp";
import { logout } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../store/slices/cartSlice";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export default function Dashboard() {
  const user = useSelector((state: RootState) => state.user.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  function handleLogout() {
    toast.success("از حساب کابری خارج شدید");
    dispatch(clearCart());
    dispatch(logout());

    queryClient.removeQueries({ queryKey: ["cart"] });

    navigate("/");
  }

  return (
    <div
      className="h-screen relative"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="bg-black h-screen opacity-80" />
      <div className="absolute top-30 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-4 w-3xl flex flex-col justify-center items-center">
        <BackButton />
        <img
          src={user?.avatar ? user?.avatar : userIcon}
          alt="پروفایل"
          className="w-40 h-40 rounded-full bg-orange-300 mt-8"
        />
        <h3 className="mt-4 text-2xl font-medium text-orange-50">
          {user?.username}
        </h3>
        <p className="text-orange-50/70 text-lg mt-2">{user?.email}</p>
        <Button title="خروج از حساب" width="60" mt="8" onClick={handleLogout} />
      </div>
    </div>
  );
}
