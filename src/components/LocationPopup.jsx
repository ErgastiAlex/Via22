import {
  MapPin,
  Utensils,
  BedDouble,
  Info,
  Landmark,
} from "lucide-react";

export default function LocationPopup({ location }) {
  return (
    <div className="relative bg-white/95 backdrop-blur-xl rounded-[40px] shadow-2xl p-10 max-w-lg w-full border border-gray-100 transition-all duration-500 hover:shadow-3xl">

      {/* KM badge */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-500 text-white px-6 py-2 rounded-full text-sm font-bold tracking-widest shadow-lg">
        {location.km} KM
      </div>

      {/* Title */}
      <div className="text-center mt-4">
        <h2 className="text-4xl md:text-5xl font-black italic text-blue-900 leading-tight">
          {location.name}
        </h2>
      </div>

      {/* Description */}
      <p className="mt-6 text-gray-700 leading-relaxed text-center text-lg">
        {location.description}
      </p>

      {/* Divider */}
      <div className="w-16 h-[2px] bg-gray-200 mx-auto my-8" />

      {/* Highlights */}
      <div>
        <h4 className="flex items-center justify-center gap-2 font-semibold text-blue-900 mb-4">
          <Landmark size={18} />
          Punti di interesse
        </h4>

        <ul className="space-y-2 text-gray-600 text-center">
          {location.highlights.map((item, i) => (
            <li key={i} className="flex items-center justify-center gap-2">
              <MapPin size={14} className="text-red-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex flex-col gap-4">

        <button className="flex items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-blue-900 text-white font-medium transition-all duration-300 hover:scale-105 hover:bg-blue-800 shadow-md">
          <Info size={18} />
          Scopri di più
        </button>

        <button className="flex items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-green-600 text-white font-medium transition-all duration-300 hover:scale-105 hover:bg-green-500 shadow-md">
          <Utensils size={18} />
          Ristoranti
        </button>

        <button className="flex items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-yellow-400 text-blue-900 font-medium transition-all duration-300 hover:scale-105 hover:bg-yellow-300 shadow-md">
          <BedDouble size={18} />
          Dove dormire
        </button>

      </div>
    </div>
  );
}