export default function Distances() {
  return (
    <section
      id="distancias"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Distancias
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Elegí tu desafío
          </h2>

          <p className="mt-5 text-gray-400">
            Dos modalidades para distintos niveles de preparación.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {/* T100 */}

          <div className="rounded-3xl border border-cyan-500/30 bg-slate-900 p-10 shadow-xl">

            <span className="rounded-full bg-cyan-500 px-4 py-1 text-sm font-semibold text-white">
              ⭐ Distancia Principal
            </span>

            <h3 className="mt-6 text-3xl font-bold text-cyan-400">
              T100
            </h3>

            <p className="mt-2 text-gray-400">
              Ideal para atletas experimentados.
            </p>

            <div className="mt-8 space-y-5 text-lg">
              <p>
                🏊 <strong>2 km</strong> Natación
              </p>

              <p>
                🚴 <strong>80 km</strong> Ciclismo
              </p>

              <p>
                🏃 <strong>18 km</strong> Pedestrismo
              </p>
            </div>

            <a
              href="/inscripciones"
              className="mt-10 inline-block rounded-xl bg-cyan-500 px-8 py-4 font-semibold transition hover:bg-cyan-400"
            >
              Inscribirme
            </a>

          </div>

          {/* SHORT */}

          <div className="rounded-3xl border border-white/10 bg-slate-900 p-10 shadow-xl">

            <h3 className="text-3xl font-bold">
              SHORT
            </h3>

            <p className="mt-2 text-gray-400">
              Ideal para quienes se inician en el triatlón.
            </p>

            <div className="mt-8 space-y-5 text-lg">
              <p>
                🏊 <strong>1 km</strong> Natación
              </p>

              <p>
                🚴 <strong>30 km</strong> Ciclismo
              </p>

              <p>
                🏃 <strong>5 km</strong> Pedestrismo
              </p>
            </div>

            <a
              href="/inscripciones"
              className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-gray-200"
            >
              Inscribirme
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}