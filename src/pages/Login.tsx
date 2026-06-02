import backgroundImg from "../assets/background.png";
import Form from "../features/login-signup/Form";

export default function Login() {
  return (
    <div
      className="h-screen relative overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="bg-black h-screen opacity-80" />
      <Form title="خوش برگشتی" />
    </div>
  );
}
