import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import backgroundImg from "../assets/background.png";
import Form from "../features/login-signup/Form";
import FormInput from "../features/login-signup/FormInput";
import { TbLockPassword } from "react-icons/tb";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useLogin } from "../hooks/useLogin";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";

const inputs = [
  {
    id: 1,
    type: "text",
    placeholder: "Email",
    icon: <HiOutlineMail className="text-2xl text-gray-700" />,
    mt: 8,
  },
  {
    id: 2,
    type: "password",
    placeholder: "Password",
    icon: <TbLockPassword className="text-2xl text-gray-700" />,
    mt: 4,
  },
];

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { mutate } = useLogin();
  const dispatch = useDispatch();

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    mutate(
      {
        email,
        password,
      },
      {
        onSuccess: (user) => {
          console.log(user);

          dispatch(setUser(user));
        },

        onError: (error) => {
          console.log(error);
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
        {inputs.map((input) => {
          return input.id === 2 ? (
            <FormInput
              key={input.id}
              type={showPassword ? "text" : "password"}
              mt={input.mt}
              placeholder={input.placeholder}
              icon={input.icon}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            >
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
            </FormInput>
          ) : (
            <FormInput
              key={input.id}
              type={input.type}
              mt={input.mt}
              placeholder={input.placeholder}
              icon={input.icon}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          );
        })}
      </Form>
    </div>
  );
}
