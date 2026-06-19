"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-lg">

      <Search
        className="absolute left-3 top-3 text-slate-400"
        size={18}
      />

      <input
        type="text"
        placeholder="Buscar cursos, documentos, videos..."
        className="w-full border rounded-xl pl-10 pr-4 py-3"
      />

    </div>
  );
}