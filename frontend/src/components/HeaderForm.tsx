export default function HeaderForm() {
  return (
    <form className="flex items-center justify-center h-8 border-2 border-gray-300 focus-within:border-gray-400/60 transition-all duration-400 rounded-2xl overflow-hidden mx-6 shadow focus-within:shadow-lg">
      <input
        type="text"
        placeholder="دنبال چه کتابی میگردی؟"
        className="w-64 outline-none px-1.5 h-full text-sm font-medium"
      />
      <button
        type="button"
        className="bg-orange-300 hover:bg-orange-400 transition-all duration-400 h-full w-18 pb-1 text-sm font-medium cursor-pointer"
      >
        جستجو
      </button>
    </form>
  );
}
