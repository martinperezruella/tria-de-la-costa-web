export default function CategoriasPage() {
  const categorias = [
    "18-24 años",
    "25-29 años",
    "30-34 años",
    "35-39 años",
    "40-44 años",
    "45-49 años",
    "50-54 años",
    "55-59 años",
    "60-64 años",
    "65-69 años",
    "70-74 años",
    "75 + años",
  ];

  const categoriasEspeciales = [
    "Paratriatletas",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Encabezado */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/30 via-slate-950 to-slate-950" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Categorías
          </p>

          <h1 className="mt-5 text-5xl font-black md:text-7xl">
            Categorías por Edad
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            El TRIA DE LA COSTA cuenta con diferentes categorías
            para los participantes de acuerdo con su edad y modalidad.
          </p>
        </div>
      </section>

      {/* Modalidades */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Modalidades
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Elegí tu desafío
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              Dos alternativas para que puedas elegir la distancia
              que mejor se adapte a tu preparación.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">

            {/* T100 */}
            <div className="rounded-3xl border border-cyan-500/30 bg-slate-900 p-8 shadow-xl md:p-10">

              <div className="flex items-center justify-between gap-4">
                <h3 className="text-3xl font-black text-cyan-400">
                  T100
                </h3>

                <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
                  Principal
                </span>
              </div>

              <p className="mt-3 text-gray-400">
                La distancia principal del TRIA DE LA COSTA.
              </p>

              <div className="mt-8 space-y-4">

                <div className="rounded-xl bg-slate-950 p-4">
                  <span className="text-2xl">🏊</span>
                  <span className="ml-3 font-semibold">
                    2 km de natación
                  </span>
                </div>

                <div className="rounded-xl bg-slate-950 p-4">
                  <span className="text-2xl">🚴</span>
                  <span className="ml-3 font-semibold">
                    80 km de ciclismo
                  </span>
                </div>

                <div className="rounded-xl bg-slate-950 p-4">
                  <span className="text-2xl">🏃</span>
                  <span className="ml-3 font-semibold">
                    18 km de pedestrismo
                  </span>
                </div>

              </div>

              <a
                href="/inscripciones"
                className="mt-8 inline-block rounded-xl bg-cyan-500 px-7 py-3 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-400"
              >
                Inscribirme en T100
              </a>

            </div>

            {/* SHORT */}
            <div className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-xl md:p-10">

              <h3 className="text-3xl font-black">
                SHORT
              </h3>

              <p className="mt-3 text-gray-400">
                Una alternativa para quienes buscan una distancia
                más accesible.
              </p>

              <div className="mt-8 space-y-4">

                <div className="rounded-xl bg-slate-950 p-4">
                  <span className="text-2xl">🏊</span>
                  <span className="ml-3 font-semibold">
                    1 km de natación
                  </span>
                </div>

                <div className="rounded-xl bg-slate-950 p-4">
                  <span className="text-2xl">🚴</span>
                  <span className="ml-3 font-semibold">
                    30 km de ciclismo
                  </span>
                </div>

                <div className="rounded-xl bg-slate-950 p-4">
                  <span className="text-2xl">🏃</span>
                  <span className="ml-3 font-semibold">
                    5 km de pedestrismo
                  </span>
                </div>

              </div>

              <a
                href="/inscripciones"
                className="mt-8 inline-block rounded-xl bg-white px-7 py-3 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-gray-200"
              >
                Inscribirme en SHORT
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* Categorías por edad */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-5xl px-6">

          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Clasificación
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Categorías por edad
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              Los participantes serán agrupados de acuerdo con
              los siguientes rangos de edad.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {categorias.map((categoria, index) => (
              <div
                key={categoria}
                className="group rounded-2xl border border-white/10 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/30"
              >
                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-sm font-bold text-cyan-400">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="font-semibold transition group-hover:text-cyan-400">
                    {categoria}
                  </p>

                </div>
              </div>
            ))}

          </div>

          {/* Categoría especial */}
          <div className="mt-10">

            <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-6 md:p-8">

              <div className="flex flex-col gap-4 md:flex-row md:items-center">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-2xl">
                  ♿
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    Categoría especial
                  </p>

                  <h3 className="mt-1 text-2xl font-bold">
                    {categoriasEspeciales[0]}
                  </h3>

                  <p className="mt-2 text-gray-400">
                    Categoría destinada a participantes de paratriatlón.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Información importante */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">

          <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-8 md:p-10">

            <div className="flex gap-5">

              <div className="text-4xl">
                ℹ️
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Información importante
                </h2>

                <p className="mt-4 leading-8 text-gray-400">
                  Las categorías y condiciones de clasificación
                  deberán ser consideradas junto con el reglamento
                  oficial de la competencia.
                </p>

                <p className="mt-4 leading-8 text-gray-400">
                  La organización podrá comunicar modificaciones o
                  precisiones antes de la realización del evento.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            TRIA DE LA COSTA 2027
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            ¿Ya elegiste tu modalidad?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Completá tu inscripción y preparate para vivir el desafío
            del río al mar.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="/reglamento"
              className="rounded-xl border border-white/20 px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-950"
            >
              Ver reglamento
            </a>

            <a
              href="/inscripciones"
              className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-400"
            >
              Inscribite
            </a>

          </div>

        </div>
      </section>
    </main>
  );
}