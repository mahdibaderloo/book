import { useState } from "react";
import Form from "../features/login-signup/Form";
import FormInput from "../features/login-signup/FormInput";
import { HiOutlineMail } from "react-icons/hi";
import { TbLockPassword } from "react-icons/tb";
import { FaRegEye, FaRegEyeSlash, FaRegUser } from "react-icons/fa";
import backgroundImg from "../assets/background.png";
import { useSignup } from "../hooks/useSignup";
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
    type: "text",
    placeholder: "Username",
    icon: <FaRegUser className="text-xl text-gray-700" />,
    mt: 4,
  },
  {
    id: 3,
    type: "password",
    placeholder: "Password",
    icon: <TbLockPassword className="text-2xl text-gray-700" />,
    mt: 4,
  },
];

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { mutate } = useSignup();
  const dispatch = useDispatch();

  function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    mutate(
      {
        email,
        username,
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
        title="خوش اومدی"
        linkText="حساب کاربری داری؟"
        linkTitle="ورود"
        url="/login"
        buttonTitle="ثبت نام"
        onSubmit={handleSignup}
      >
        {inputs.map((input) => {
          return input.id === 3 ? (
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
              value={input.id === 1 ? email : username}
              onChange={
                input.id === 1
                  ? (e) => setEmail(e.target.value)
                  : (e) => setUsername(e.target.value)
              }
            />
          );
        })}
      </Form>
    </div>
  );
}
