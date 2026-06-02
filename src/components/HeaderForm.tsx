export default function HeaderForm() {
  return (
    <form className="flex items-center justify-center h-8 border-2 border-gray-400 rounded-2xl overflow-hidden mx-6 shadow">
      <input
        type="text"
        placeholder="دنبال چه کتابی میگردی؟"
        className="w-64 outline-none px-1.5 h-full text-sm"
      />
      <button
        type="button"
        className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-400 h-full w-18 pb-1 text-sm cursor-pointer"
      >
        جستجو
      </button>
    </form>
  );
}
