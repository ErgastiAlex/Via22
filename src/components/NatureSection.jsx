export default function SectionNatura({ lang }) {
  const content = {
    it: {
      label: "Il corridoio ecologico",
      title: "Quello che rimane, è prezioso.",
      text:
        "La Pianura Padana è una delle regioni più trasformate d'Europa. I corridoi lungo i corsi d'acqua minori sono diventati rifugio per specie altrove scomparse. Il tratto che Via 22 percorre è uno di questi.",
      items: [
        {
          title: "Airone cenerino",
          desc: "Presenza stabile. Indicatore primario della qualità dell'acqua.",
          icon: "🪶",
        },
        {
          title: "Martin pescatore",
          desc: "Specie protetta. Nidifica nelle sponde argillose.",
          icon: "🟥",
        },
        {
          title: "Rospo smeraldino",
          desc: "Anfibio protetto che dipende dagli ambienti umidi non bonificati.",
          icon: "🐸",
        },
        {
          title: "Lepidotteri rari",
          desc: "Comunità di farfalle quasi scomparse dal resto della pianura.",
          icon: "🦋",
        },
      ],
    },
    en: {
      label: "The ecological corridor",
      title: "What remains is precious.",
      text:
        "The Po Valley is one of the most transformed regions in Europe. Corridors along minor waterways have become refuges for species that have disappeared elsewhere. The stretch that Via 22 follows is one of them.",
      items: [
        {
          title: "Grey heron",
          desc: "Stable presence. Primary indicator of water quality.",
          icon: "🪶",
        },
        {
          title: "Kingfisher",
          desc: "Protected species. Nests in clay riverbanks.",
          icon: "🟥",
        },
        {
          title: "European green toad",
          desc: "Protected amphibian dependent on un-reclaimed wetlands.",
          icon: "🐸",
        },
        {
          title: "Rare butterflies",
          desc: "Butterfly communities almost disappeared from the rest of the plain.",
          icon: "🦋",
        },
      ],
    },
  };

  const t = content[lang];

  return (
    <section id="natura" className="bg-[#EDEAE4] text-[#3E352B] py-28 px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

        {/* Colonna sinistra */}
        <div>
          <div className="flex items-center gap-6 mb-10">
            <span className="text-xs tracking-[0.4em] uppercase text-[#9C7A1F]">
              {t.label}
            </span>
            <div className="h-px bg-[#9C7A1F] w-16"></div>
          </div>

          <h2 className="text-5xl md:text-[72px] leading-tight font-serif font-light mb-10">
            {t.title}
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-[#5A5044] max-w-xl">
            {t.text}
          </p>
        </div>

        {/* Colonna destra */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-[#D8D2C8] sm:border-t-0 sm:border-l border-[#D8D2C8]">

          {t.items.map((item, index) => (
            <div
              key={index}
              className="p-10 border-b border-[#D8D2C8] sm:border-b-0 sm:border-r border-[#D8D2C8] even:sm:border-r-0"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-serif text-xl italic mb-3">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#5A5044]">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}