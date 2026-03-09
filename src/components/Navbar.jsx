import { useState } from "react";

export default function Navbar({ lang, setLang }) {
  const links = {
    it: ["Il percorso", "Natura", "Eventi", "Comunità"],
    en: ["The Route", "Nature", "Events", "Community"],
  };

  const hrefs = ["#percorso", "#natura", "#eventi", "#comunita"];

  return (
    <nav className="fixed top-0 left-0 w-full h-16 z-50 bg-[#476B4A]/95 backdrop-blur-md border-b border-white/10 text-[#EDEBE6]">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src={`${process.env.PUBLIC_URL}/logo-via22.png`}
            alt="Via22"
            className="h-8 w-auto opacity-90"
          />
          <span className="hidden sm:block font-bold tracking-wide">
            Via22
          </span>
        </a>

        {/* Menu (desktop) */}
        <ul className="hidden md:flex gap-10 tracking-widest text-sm uppercase">
          {links[lang].map((name, i) => (
            <li key={name}>
              <a href={hrefs[i]} className="hover:opacity-70 transition">
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Lingua */}
        <div className="flex items-center gap-3 text-sm tracking-widest uppercase">
          <button
            onClick={() => setLang("it")}
            className={`transition ${
              lang === "it" ? "opacity-100" : "opacity-50 hover:opacity-80"
            }`}
          >
            IT
          </button>
          <span className="opacity-40">|</span>
          <button
            onClick={() => setLang("en")}
            className={`transition ${
              lang === "en" ? "opacity-100" : "opacity-50 hover:opacity-80"
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
}