import { HiOutlineMail } from "react-icons/hi";
import backgroundImg from "../assets/background.png";
import Form from "../features/login-signup/Form";
import FormInput from "../features/login-signup/FormInput";
import { TbLockPassword } from "react-icons/tb";

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
      >
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            type={input.type}
            mt={input.mt}
            placeholder={input.placeholder}
            icon={input.icon}
          />
        ))}
      </Form>
    </div>
  );
}
