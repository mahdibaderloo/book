import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { TbLockPassword } from "react-icons/tb";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import backgroundImg from "../assets/background.png";
import Form from "../features/login-signup/Form";

import { useLogin } from "../hooks/useLogin";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import type { LoginUser } from "../types/types";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const { mutate, isPending } = useLogin();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginUser>();

  function onSubmit(data: LoginUser) {
    mutate(data, {
      onSuccess: (user) => {
        dispatch(setUser(user));
        reset();
        navigate("/");
      },
      onError: (error) => {
        alert(error.message);
      },
    });
  }

  function handleShowPasswordToggle() {
    setShowPassword((s) => !s);
  }

  return (
    <div
      className="h-screen fixed top-0 left-0 w-full z-0 overflow-y-scroll"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="bg-black h-screen opacity-80 fixed top-0 left-0 w-full z-0" />

      <Form
        title="خوش برگشتی"
        linkText="حساب کاربری نداری؟"
        linkTitle="ثبت نام"
        url="/signup"
        buttonTitle={isPending ? "در حال ورود..." : "ورود"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-1 bg-gray-300 rounded-xl p-2 items-center mt-8 w-[90%]">
          <input
            type="text"
            placeholder="Email"
            dir="ltr"
            className="border-none outline-none py-1 w-full font-medium bg-transparent"
            {...register("email", {
              required: "ایمیل الزامی است",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "فرمت ایمیل صحیح نیست",
              },
            })}
          />

          <HiOutlineMail className="text-2xl text-gray-700" />
        </div>

        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}

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
            className="border-none outline-none py-1 w-full font-medium bg-transparent"
            {...register("password", {
              required: "رمز عبور الزامی است",
              minLength: {
                value: 8,
                message: "حداقل 8 کاراکتر",
              },
            })}
          />

          <TbLockPassword className="text-2xl text-gray-700" />
        </div>

        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </Form>
    </div>
  );
}
