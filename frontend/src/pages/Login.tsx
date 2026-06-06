import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import backgroundImg from "../assets/background.png";
import Form from "../features/login-signup/Form";
import { TbLockPassword } from "react-icons/tb";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useLogin } from "../hooks/useLogin";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { mutate } = useLogin();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    mutate(
      { email, password },
      {
        onSuccess: (user) => {
          dispatch(setUser(user));
          alert("با موفقیت وارد شدی");
          navigate("/");
        },

        onError: () => {
          alert("خطا هنگام ورود!");
        },
      },
    );
  }

  function handleShowPasswordToggle() {
    setShowPassword((s) => !s);
  }

  return (
    <div
      className="h-screen relative overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="bg-black h-screen opacity-80" />
      <Form
        title="خوش برگشتی"
        linkText="حساب کاربری نداری؟"
        linkTitle="ثبت نام"
        url="/signup"
        buttonTitle="ورود"
        onSubmit={handleLogin}
      >
        <div className="flex gap-1 bg-gray-300 rounded-xl p-2 items-center mt-8 w-[90%]">
          <input
            type="text"
            placeholder="Email"
            dir="ltr"
            className="border-none outline-none py-1 w-full font-medium"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <HiOutlineMail className="text-2xl text-gray-700" />
        </div>

        <div className="flex gap-1 bg-gray-300 rounded-xl p-2 items-center mt-4 w-[90%]">
          {showPassword ? (
            <FaRegEye
              className="text-xl text-gray-700 cursor-pointer"
              onClick={handleShowPasswordToggle}
            />
          ) : (
            <FaRegEyeSlash
              className="text-xl text-gray-700 cursor-pointer"
              onClick={handleShowPasswordToggle}
            />
          )}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            dir="ltr"
            className="border-none outline-none py-1 w-full font-medium"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TbLockPassword className="text-2xl text-gray-700" />
        </div>
      </Form>
    </div>
  );
}
