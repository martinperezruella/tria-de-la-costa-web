import { ArrowRight } from "lucide-react";
import { event } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/hero.jpg')",
        }}
      />

      {/* Oscurecimiento */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Degradado inferior */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-slate-950" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 text-center">

        {/* Fecha */}
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-cyan-400 md:text-lg">
          {event.fecha}
        </p>

        {/* Título */}
        <h1 className="text-5xl font-black uppercase tracking-tight text-white drop-shadow-2xl sm:text-6xl md:text-8xl">
          {event.nombre}
        </h1>

        {/* Ubicación */}
        <p className="mt-6 text-2xl font-light text-white/90 md:text-4xl">
          {event.ciudad}{" "}
          <span className="text-cyan-400">→</span>{" "}
          {event.llegada}
        </p>

        {/* Descripción */}
        <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-gray-200 md:text-xl md:leading-8">
          Un desafío único que conecta el Río Negro con el mar,
          atravesando algunos de los paisajes más emblemáticos de la
          costa rionegrina.
        </p>

        {/* Botones */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <a
            href="/inscripciones"
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 text-lg font-bold text-slate-950 shadow-lg shadow-cyan-500/30 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400 sm:w-auto"
          >
            Inscribite
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <a
            href="#recorrido"
            className="w-full rounded-xl border border-white/70 bg-black/20 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-slate-950 sm:w-auto"
          >
            Ver recorrido
          </a>

        </div>

      </div>

      {/* Ola inferior */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-16 w-full"
        >
          <path
            d="M0,0V46.29c47.79,22,103.59,29,158,17.39C230.5,49.5,284.5,7.5,339,2.69c54.5-4.8,108.5,27.2,163,43.2s108.5,16,163-2.7c54.5-18.7,108.5-56.7,163-56.7s108.5,38,163,54.7c54.5,16.7,108.5,12.7,163-6.7V0Z"
            className="fill-slate-950"
          />
        </svg>
      </div>

    </section>
  );
}