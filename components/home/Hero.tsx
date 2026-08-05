export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
        <p className="mb-4 text-lg uppercase tracking-[0.3em] text-cyan-400">
          07 FEBRERO 2027
        </p>

        <h1 className="mb-6 text-6xl font-black md:text-8xl">
          TRIA DE LA COSTA
        </h1>

        <h2 className="mb-8 text-2xl font-light md:text-4xl">
          Viedma → El Cóndor
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-200">
          Un desafío que une río, ruta y mar.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold hover:bg-cyan-400 transition">
            Inscribite
          </button>

          <button className="rounded-xl border border-white px-8 py-4 hover:bg-white hover:text-black transition">
            Conocé el recorrido
          </button>
        </div>
      </div>
    </section>
  );
}