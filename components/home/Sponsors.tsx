export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="bg-white py-24 text-slate-900"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Sponsors
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Empresas que acompañan el evento
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Gracias a quienes hacen posible el TRIA DE LA COSTA.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">

          <div className="flex h-40 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50">
            <span className="font-semibold text-slate-400">
              Sponsor 1
            </span>
          </div>

          <div className="flex h-40 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50">
            <span className="font-semibold text-slate-400">
              Sponsor 2
            </span>
          </div>

          <div className="flex h-40 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50">
            <span className="font-semibold text-slate-400">
              Sponsor 3
            </span>
          </div>

          <div className="flex h-40 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50">
            <span className="font-semibold text-slate-400">
              Sponsor 4
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}