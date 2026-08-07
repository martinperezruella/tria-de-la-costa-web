export default function RecorridoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">

        <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
          Recorrido
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Viedma → El Cóndor
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
          El circuito del TRIA DE LA COSTA combina tres escenarios únicos:
          el Río Negro para la natación, la Ruta Provincial N° 1 para el
          ciclismo y la costa del Balneario El Cóndor para el pedestrismo.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-bold text-cyan-400">
              🏊 Natación
            </h2>

            <p className="mt-4 text-gray-300">
              Inicio en aguas del Río Negro con un circuito seguro y
              señalizado.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-bold text-cyan-400">
              🚴 Ciclismo
            </h2>

            <p className="mt-4 text-gray-300">
              Recorrido por la Ruta Provincial N° 1 rumbo al Balneario
              El Cóndor.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-bold text-cyan-400">
              🏃 Pedestrismo
            </h2>

            <p className="mt-4 text-gray-300">
              Tramo final con vistas al mar y llegada frente a la costa.
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}