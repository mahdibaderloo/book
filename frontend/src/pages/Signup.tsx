import { useState } from "react";
import Form from "../features/login-signup/Form";
import { HiOutlineMail } from "react-icons/hi";
import { TbLockPassword } from "react-icons/tb";
import { FaRegEye, FaRegEyeSlash, FaRegUser } from "react-icons/fa";
import backgroundImg from "../assets/background.png";
import { useSignup } from "../hooks/useSignup";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { mutate } = useSignup();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    mutate(
      { email, username, password },
      {
        onSuccess: (user) => {
          dispatch(setUser(user));
          alert("ثبت نام با موفقیت انجام شد");
          navigate("/");
        },

        onError: () => {
          alert("خطا هنگام ثبت نام!");
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
        title="خوش اومدی"
        linkText="حساب کاربری داری؟"
        linkTitle="ورود"
        url="/login"
        buttonTitle="ثبت نام"
        onSubmit={handleSignup}
      >
        <div className="flex gap-1 bg-gray-300 rounded-xl p-2 items-center mt-8 w-[90%]">
          <input
            type="text"
            placeholder="Username"
            dir="ltr"
            className="border-none outline-none py-1 w-full font-medium"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaRegUser className="text-xl text-gray-700" />
        </div>

        <div className="flex gap-1 bg-gray-300 rounded-xl p-2 items-center mt-4 w-[90%]">
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
