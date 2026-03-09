import React, { useRef, useState } from "react";
import HeaderBanner from "./components/HeaderBanner";
import MapContainer from "./components/MapContainer";
import NatureContainer from "./components/NatureSection";
import './styles.css'
import Navbar from "./components/Navbar";

export default function App() {
  const scrollContainerRef = useRef(null);
  const [lang, setLang] = useState("it"); // "it" o "en"

  return (
    
    <div
      ref={scrollContainerRef}
      className="h-screen w-full overflow-y-auto no-scrollbar bg-[#fdfaf3] relative"
    >
      <Navbar lang={lang} setLang={setLang} />
      <div className="pt-16">
        <HeaderBanner lang={lang} setLang={setLang} />
        {/* 2. MAP CONTAINER - Diventa visibile solo dopo l'header */}
        <MapContainer lang={lang} scrollContainerRef={scrollContainerRef} />

        <NatureContainer lang={lang} />

        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { scrollbar-width: none; }
        `}</style>
      </div>
    </div>
  );
}
