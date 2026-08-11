import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import { event } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden">

      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/hero.jpg')",
        }}
      />

      {/* Oscurecimiento principal */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Degradado vertical */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-slate-950/20 to-slate-950" />

      {/* Degradado lateral */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-slate-950/30" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 text-center md:py-32">

        {/* Badge */}
        <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-black/30 px-5 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
          TRIATLÓN · RÍO NEGRO
        </div>

        {/* Fecha */}
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-400 md:text-lg">
          {event.fecha}
        </p>

        {/* Título */}
        <h1 className="mt-5 text-5xl font-black uppercase leading-[0.95] tracking-tight text-white drop-shadow-2xl sm:text-6xl md:text-8xl lg:text-9xl">
          {event.nombre}
        </h1>

        {/* Ubicación */}
        <div className="mt-7 flex items-center justify-center gap-3 text-xl font-light text-white/90 md:text-3xl">

          <MapPin
            size={24}
            className="text-cyan-400 md:h-7 md:w-7"
          />

          <span>{event.ciudad}</span>

          <span className="text-cyan-400">
            →
          </span>

          <span>{event.llegada}</span>

        </div>

        {/* Descripción */}
        <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-gray-200 md:text-xl md:leading-8">
          Un desafío único que conecta el Río Negro con el mar,
          atravesando algunos de los paisajes más emblemáticos de
          la costa rionegrina.
        </p>

        {/* Botones */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <a
            href="/inscripciones"
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 text-lg font-bold text-slate-950 shadow-xl shadow-cyan-500/25 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400 sm:w-auto"
          >
            Inscribite

            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <a
            href="#distancias"
            className="w-full rounded-xl border border-white/40 bg-black/20 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-slate-950 sm:w-auto"
          >
            Ver distancias
          </a>

        </div>

        {/* Datos rápidos */}
        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-black/25 backdrop-blur-md md:grid-cols-4">

          <div className="border-b border-white/10 p-4 md:border-b-0 md:border-r">
            <p className="text-2xl font-black text-white">
              T100
            </p>
            <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
              Distancia
            </p>
          </div>

          <div className="border-b border-white/10 p-4 md:border-b-0 md:border-r">
            <p className="text-2xl font-black text-white">
              2 KM
            </p>
            <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
              Natación
            </p>
          </div>

          <div className="p-4 md:border-r md:border-white/10">
            <p className="text-2xl font-black text-white">
              80 KM
            </p>
            <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
              Ciclismo
            </p>
          </div>

          <div className="p-4">
            <p className="text-2xl font-black text-white">
              18 KM
            </p>
            <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
              Pedestrismo
            </p>
          </div>

        </div>

      </div>

      {/* Indicador de scroll */}
      <a
        href="#evento"
        className="absolute bottom-20 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/60 transition hover:text-cyan-400 md:flex"
        aria-label="Continuar al contenido"
      >
        <span>
          Descubrí el desafío
        </span>

        <ArrowDown
          size={20}
          className="animate-bounce"
        />
      </a>

      {/* Ola inferior */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-16 w-full"
          aria-hidden="true"
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