export default function FormInput({ children, type, placeholder, icon, mt }) {
  return (
    <div
      className={`flex gap-1 bg-gray-300 rounded-xl p-2 items-center mt-${mt} w-[90%]`}
    >
      {children}
      <input
        type={type}
        placeholder={placeholder}
        dir="ltr"
        className="border-none outline-none py-1 w-full font-medium"
      />
      {icon}
    </div>
  );
}
