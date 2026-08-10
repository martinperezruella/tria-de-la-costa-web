export default function About() {
  return (
    <section
      id="evento"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            El desafío
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Un triatlón diferente
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            TRIA DE LA COSTA une dos lugares emblemáticos de Río Negro.
            La competencia comienza en Viedma, continúa por la Ruta
            Provincial Nº 1 hasta el Balneario El Cóndor y finaliza junto
            al mar, ofreciendo una experiencia única para atletas y
            acompañantes.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl bg-slate-800 p-8">
            <div className="text-5xl">🏊</div>

            <h3 className="mt-4 text-2xl font-bold">
              Natación
            </h3>

            <p className="mt-3 text-gray-300">
              En las aguas del Río Negro.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-800 p-8">
            <div className="text-5xl">🚴</div>

            <h3 className="mt-4 text-2xl font-bold">
              Ciclismo
            </h3>

            <p className="mt-3 text-gray-300">
              Desde Viedma hasta El Cóndor por la Ruta Provincial Nº 1.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-800 p-8">
            <div className="text-5xl">🏃</div>

            <h3 className="mt-4 text-2xl font-bold">
              Pedestrismo
            </h3>

            <p className="mt-3 text-gray-300">
              Un circuito costero con llegada cerca del Faro de Río Negro.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}