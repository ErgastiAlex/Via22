export default function HeaderBanner({ lang, setLang }) {
  const content = {
    it: {
      quote: "“Via 22 non è una scorciatoia. È un momento di riflessione.”",
      route: "Parma → Colorno · Torrente Parma",
      small: "Associazione di Promozione Sociale · Parma",
      title1: "Un fiume",
      title2: "non si ferma",
      title3: "mai.",
      desc:
        "22 chilometri lungo il Torrente Parma. Dal cuore della città alla Reggia di Colorno. Natura, storia, comunità.",
      km: "Chilometri",
      loc: "Località",
      oasi: "Oasi Naturali",
    },
    en: {
      quote: "“Via 22 is not a shortcut. It is a moment of reflection.”",
      route: "Parma → Colorno · Parma Stream",
      small: "Social Promotion Association · Parma",
      title1: "A river",
      title2: "never",
      title3: "stops.",
      desc:
        "22 kilometers along the Parma Stream. From the heart of the city to the Reggia di Colorno. Nature, history, community.",
      km: "Kilometers",
      loc: "Locations",
      oasi: "Nature Oases",
    },
  };

  const t = content[lang];

  return (
    <section className="relative min-h-screen bg-[#476B4A] text-[#EDEBE6] flex flex-col">
  {/* Background waves */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
    <svg
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="wavePattern"
          x="0"
          y="0"
          width="200"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 30 Q 25 10 50 30 T 100 30 T 150 30 T 200 30"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#wavePattern)" />
    </svg>
</div>
      {/* Top Bar */}
      <div className="flex items-center justify-between px-8 md:px-16 pt-8">
        
        {/* Logo (solo desktop) */}
        <div className="hidden md:block">
          <img src={`${process.env.PUBLIC_URL}/logo-via22.png`}   
            alt="Via22"
            className="h-10 w-auto opacity-90"
          />
        </div>


      </div>

      {/* Hero content */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 max-w-5xl">

        <div className="text-xs tracking-[0.4em] uppercase opacity-70 mb-6">
          {t.small}
        </div>

        <h1 className="text-5xl md:text-[110px] leading-[0.95] font-serif font-light">
          {t.title1}
        </h1>
        <h1 className="text-5xl md:text-[110px] leading-[0.95] italic font-serif font-light opacity-80">
          {t.title2}
        </h1>
        <h1 className="text-5xl md:text-[110px] leading-[0.95] font-serif font-light">
          {t.title3}
        </h1>

        <p className="mt-10 text-lg md:text-xl max-w-2xl opacity-80 leading-relaxed">
          {t.desc}
        </p>
      </div>

      {/* Metriche centrali in basso */}
      <div className="pb-12 flex justify-center">
        <div className="flex gap-12 md:gap-24 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-serif">22</div>
            <div className="text-xs tracking-[0.3em] uppercase opacity-70 mt-2">
              {t.km}
            </div>
          </div>

          <div>
            <div className="text-4xl md:text-5xl font-serif">9</div>
            <div className="text-xs tracking-[0.3em] uppercase opacity-70 mt-2">
              {t.loc}
            </div>
          </div>

          <div>
            <div className="text-4xl md:text-5xl font-serif">2</div>
            <div className="text-xs tracking-[0.3em] uppercase opacity-70 mt-2">
              {t.oasi}
            </div>
          </div>
        </div>
      </div>
            {/* Fascia citazione */}
      <div className="bg-[#9C7A1F] text-[#F4EDE2] py-4 px-8 md:px-16 flex justify-between items-center text-sm md:text-base tracking-wide">
        <div className="italic">{t.quote}</div>
        <div className="hidden md:block opacity-80">{t.route}</div>
      </div>

    </section>
  );
}