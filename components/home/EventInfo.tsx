export default function EventInfo() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            Información
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Todo lo que necesitás saber
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl bg-slate-900 p-8 border border-slate-800">
            <h3 className="text-2xl font-bold text-cyan-400">
              📍 Lugar
            </h3>

            <p className="mt-4 text-gray-300">
              Largada en Viedma y llegada en el Balneario El Cóndor,
              recorriendo uno de los paisajes más emblemáticos de Río Negro.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-8 border border-slate-800">
            <h3 className="text-2xl font-bold text-cyan-400">
              🗓 Fecha
            </h3>

            <p className="mt-4 text-gray-300">
              Domingo 7 de febrero de 2027.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-8 border border-slate-800">
            <h3 className="text-2xl font-bold text-cyan-400">
              🏆 Modalidades
            </h3>

            <p className="mt-4 text-gray-300">
              Distancia T100 y Short, con categorías por edades y premiación.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}