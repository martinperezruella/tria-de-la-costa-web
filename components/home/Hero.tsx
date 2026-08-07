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

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Degradado */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <p className="mb-4 text-lg font-semibold uppercase tracking-[0.3em] text-cyan-400">
          07 FEBRERO 2027
        </p>

        <h1 className="text-5xl font-extrabold md:text-8xl">
          TRIA DE LA COSTA
        </h1>

        <p className="mt-6 text-2xl text-gray-200 md:text-3xl">
          Viedma → El Cóndor
        </p>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
          Un desafío único que conecta el Río Negro con el mar,
          atravesando algunos de los paisajes más emblemáticos de la
          costa rionegrina.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

          <a
            href="/inscripciones"
className="rounded-xl bg-cyan-500 px-8 py-4 text-lg font-semibold shadow-lg shadow-cyan-500/30 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400"          >
            Inscribite
          </a>

          <a
            href="#recorrido"
            className="rounded-xl border border-white px-8 py-4 text-lg font-semibold transition hover:bg-white hover:text-slate-900"
          >
            Ver recorrido
          </a>

        </div>

      </div>
      {/* Separador en forma de ola */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
  <svg
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
    className="relative block h-16 w-full"
  >
    <path
      d="M0,0V46.29c47.79,22,103.59,29,158,17.39C230.5,49.5,284.5,7.5,339,2.69c54.5-4.8,108.5,27.2,163,43.2s108.5,16,163-2.7c54.5-18.7,108.5-56.7,163-56.7s108.5,38,163,54.7c54.5,16.7,108.5,12.7,163-6.7V0Z"
      className="fill-slate-900"
    />
  </svg>
</div>
    </section>
  );
}