export default function HeaderBanner() {
  return (
    <div className="header-banner relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fdfaf3] via-[#f7f3e9] to-[#efe8d8]" />

      {/* Decorative shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-green-400/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        <div className="flex justify-center mb-12">
          <img src={`${process.env.PUBLIC_URL}/logo-via22.png`}   
            className="h-28 md:h-36 w-auto object-contain drop-shadow-xl"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-black italic text-blue-900">
          Via 22 APS
        </h1>

        <p className="mt-4 uppercase tracking-[0.4em] text-sm text-blue-900/60">
          Associazione di Promozione Sociale
        </p>
                {/* PARTITA IVA */}
        <p className="mt-3 text-sm text-blue-900/50 tracking-wide">
          C.F. 03133020341
        </p>

        <div className="w-24 h-[2px] bg-blue-900/20 mx-auto my-10" />

        <p className="text-lg md:text-xl leading-relaxed text-blue-900/90 font-light">
          Via 22 APS è un'Associazione nata a Rivarolo di Torrile,
          nel cuore della Bassa Parmense. Il nostro progetto è semplice
          nella forma, ambizioso nella sostanza: creare un corridoio verde
          di 22 km lungo il Torrente Parma che unisca borghi, oasi naturali,
          chiese medievali e sapori autentici della Food Valley.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-blue-900/90 font-light mt-6">
          Siamo volontari, guide, appassionati di natura e storia locale.
          Crediamo che il territorio sia il miglior racconto di sé stesso:
          basta avere un percorso per scoprirlo.
        </p>

        <div className="mt-16 backdrop-blur-md bg-white/60 border border-white/40 rounded-3xl px-10 py-8 shadow-xl inline-block">
          <p className="uppercase tracking-widest text-sm text-blue-900/70">
            Sostieni i nostri progetti
          </p>

          <p className="mt-4 text-2xl md:text-3xl font-mono font-bold text-blue-900">
            IT12X1234567890123456789012
          </p>

          <p className="mt-4 text-sm italic text-blue-900/60">
            Grazie per il tuo prezioso supporto ❤️
          </p>
        </div>

      </div>
    </div>
  );
}