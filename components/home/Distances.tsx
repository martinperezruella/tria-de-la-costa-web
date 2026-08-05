export default function Distances() {
  return (
    <section
      id="distancias"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
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

          <div className="rounded-3xl bg-slate-900 p-10 border border-cyan-500/30">

            <h3 className="text-3xl font-bold text-cyan-400">
              T100
            </h3>

            <div className="mt-8 space-y-5 text-lg">

              <p>🏊 <strong>2 km</strong> Natación</p>

              <p>🚴 <strong>80 km</strong> Ciclismo</p>

              <p>🏃 <strong>18 km</strong> Pedestrismo</p>

            </div>

          </div>

          {/* SHORT */}

          <div className="rounded-3xl bg-slate-900 p-10 border border-white/10">

            <h3 className="text-3xl font-bold">
              SHORT
            </h3>

            <div className="mt-8 space-y-5 text-lg">

              <p>🏊 <strong>1 km</strong> Natación</p>

              <p>🚴 <strong>30 km</strong> Ciclismo</p>

              <p>🏃 <strong>5 km</strong> Pedestrismo</p>

            </div>

          </div>

        </div>

        <div className="mt-16 text-center">

          <a
            href="#inscripciones"
            className="inline-block rounded-xl bg-cyan-500 px-10 py-4 text-lg font-semibold transition hover:bg-cyan-400"
          >
            Quiero inscribirme
          </a>

        </div>

      </div>
    </section>
  );
}