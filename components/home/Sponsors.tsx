export default function Sponsors() {
  return (
    <section id="sponsors" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-cyan-600 font-semibold">
            Sponsors
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Empresas que acompañan el evento
          </h2>

          <p className="mt-4 text-slate-600">
            Gracias a quienes hacen posible el TRIA DE LA COSTA.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">

          <div className="flex h-40 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300">
            Sponsor 1
          </div>

          <div className="flex h-40 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300">
            Sponsor 2
          </div>

          <div className="flex h-40 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300">
            Sponsor 3
          </div>

          <div className="flex h-40 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300">
            Sponsor 4
          </div>

        </div>

      </div>
    </section>
  );
}