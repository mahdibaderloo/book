type ButtonProp = { title: string };

export default function Button({ title }: ButtonProp) {
  return (
    <button className="flex items-center justify-center bg-gray-950 hover:bg-gray-900 hover:shadow transition-all duration-400 text-gray-50 rounded-xl p-2 pb-3 w-[90%] mt-10 cursor-pointer font-medium text-lg">
      <span>{title}</span>
    </button>
  );
}
