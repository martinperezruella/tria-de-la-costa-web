export default function RecorridoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Encabezado */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/30 via-slate-950 to-slate-950" />

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Recorrido
          </p>

          <h1 className="mt-5 text-5xl font-black md:text-7xl">
            Viedma → El Cóndor
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Un recorrido único que conecta el Río Negro con el mar,
            atravesando algunos de los paisajes más emblemáticos de
            la costa rionegrina.
          </p>
        </div>
      </section>

      {/* Las tres disciplinas */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl border border-cyan-500/20 bg-slate-950 p-8">
              <div className="text-5xl">🏊</div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Etapa 01
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Natación
              </h2>

              <p className="mt-5 leading-7 text-gray-400">
                La competencia comienza en Viedma, sobre las aguas
                del Río Negro.
              </p>

              <div className="mt-6 text-2xl font-bold text-white">
                T100: 2 km
              </div>

              <div className="mt-1 text-gray-500">
                SHORT: 1 km
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-500/20 bg-slate-950 p-8">
              <div className="text-5xl">🚴</div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Etapa 02
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Ciclismo
              </h2>

              <p className="mt-5 leading-7 text-gray-400">
                Desde Viedma, el recorrido continúa por la Ruta
                Provincial N° 1 rumbo al Balneario El Cóndor.
              </p>

              <div className="mt-6 text-2xl font-bold text-white">
                T100: 80 km
              </div>

              <div className="mt-1 text-gray-500">
                SHORT: 30 km
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-500/20 bg-slate-950 p-8">
              <div className="text-5xl">🏃</div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Etapa 03
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Pedestrismo
              </h2>

              <p className="mt-5 leading-7 text-gray-400">
                El último tramo se desarrolla en el entorno costero
                del Balneario El Cóndor.
              </p>

              <div className="mt-6 text-2xl font-bold text-white">
                T100: 18 km
              </div>

              <div className="mt-1 text-gray-500">
                SHORT: 5 km
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sentido del recorrido */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">

            <div>
              <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Del río al mar
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Un recorrido que cuenta una historia
              </h2>

              <p className="mt-6 leading-8 text-gray-400">
                TRIA DE LA COSTA une dos lugares emblemáticos de Río
                Negro. La largada se produce en Viedma y el recorrido
                avanza hacia el Balneario El Cóndor, atravesando
                diferentes paisajes y escenarios naturales.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                El cambio de escenario acompaña cada etapa de la
                competencia: primero el río, luego la ruta y finalmente
                el mar.
              </p>
            </div>

            {/* Espacio reservado para el mapa */}
            <div className="flex min-h-[360px] items-center justify-center rounded-3xl border border-dashed border-cyan-500/30 bg-slate-900">
              <div className="px-8 text-center">
                <div className="text-6xl">🗺️</div>

                <h3 className="mt-5 text-2xl font-bold">
                  Mapa del recorrido
                </h3>

                <p className="mt-3 text-gray-500">
                  Próximamente incorporaremos el mapa oficial del
                  circuito.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Comparación de distancias */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-5xl px-6">

          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Distancias
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Dos formas de vivir el recorrido
            </h2>
          </div>

          <div className="mt-14 overflow-hidden rounded-3xl border border-white/10">

            <div className="grid grid-cols-3 bg-slate-800 p-5 font-semibold">
              <span>Disciplina</span>

              <span className="text-center text-cyan-400">
                T100
              </span>

              <span className="text-center">
                SHORT
              </span>
            </div>

            <div className="grid grid-cols-3 border-t border-white/10 p-5">
              <span>🏊 Natación</span>
              <span className="text-center">2 km</span>
              <span className="text-center">1 km</span>
            </div>

            <div className="grid grid-cols-3 border-t border-white/10 p-5">
              <span>🚴 Ciclismo</span>
              <span className="text-center">80 km</span>
              <span className="text-center">30 km</span>
            </div>

            <div className="grid grid-cols-3 border-t border-white/10 p-5">
              <span>🏃 Pedestrismo</span>
              <span className="text-center">18 km</span>
              <span className="text-center">5 km</span>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            ¿Estás listo?
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Elegí tu desafío
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Elegí entre T100 y SHORT y preparate para vivir una
            experiencia deportiva única.
          </p>

          <div className="mt-10">
            <a
              href="/inscripciones"
              className="inline-block rounded-xl bg-cyan-500 px-8 py-4 text-lg font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-400"
            >
              Inscribite
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}