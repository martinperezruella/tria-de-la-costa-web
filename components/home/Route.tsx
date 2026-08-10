export default function Route() {
  return (
    <section
      id="recorrido"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Recorrido
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Del río al mar
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-gray-300">
            Un circuito único que conecta Viedma con el Balneario El Cóndor,
            combinando natación, ciclismo y pedestrismo en un entorno natural
            incomparable.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl bg-slate-800 p-8 text-center">
            <div className="mb-4 text-5xl">🏊</div>

            <h3 className="text-2xl font-bold">
              Natación
            </h3>

            <p className="mt-4 text-gray-300">
              Largada en Viedma sobre el Río Negro.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-800 p-8 text-center">
            <div className="mb-4 text-5xl">🚴</div>

            <h3 className="text-2xl font-bold">
              Ciclismo
            </h3>

            <p className="mt-4 text-gray-300">
              Recorrido por la Ruta Provincial Nº 1 hasta El Cóndor.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-800 p-8 text-center">
            <div className="mb-4 text-5xl">🏃</div>

            <h3 className="text-2xl font-bold">
              Pedestrismo
            </h3>

            <p className="mt-4 text-gray-300">
              Circuito costero con llegada cerca del Faro de Río Negro.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}