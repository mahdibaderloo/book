import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function HeaderForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") || "");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();

    const trimmed = query.trim();

    if (trimmed) {
      setSearchParams({ search: trimmed }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  }

  useEffect(() => {
    if (query.trim() === "") {
      setSearchParams({}, { replace: true });
    }
  }, [query, setSearchParams]);

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-center h-8 border-2 border-gray-300 focus-within:border-gray-400/60 transition-all duration-400 rounded-2xl overflow-hidden mx-6 shadow focus-within:shadow-lg"
    >
      <input
        type="text"
        placeholder="دنبال چه کتابی میگردی؟"
        className="w-64 outline-none px-1.5 h-full text-sm font-medium"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-orange-300 hover:bg-orange-400 transition-all duration-400 h-full w-18 pb-1 text-sm font-medium cursor-pointer"
      >
        جستجو
      </button>
    </form>
  );
}
