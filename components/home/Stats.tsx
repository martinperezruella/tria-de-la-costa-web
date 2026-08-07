export default function Stats() {
  return (
    <section className="bg-slate-900 py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-4">

        <div className="rounded-2xl bg-slate-800 p-8 text-center">
          <div className="text-4xl font-bold text-cyan-400">07</div>
          <p className="mt-2 text-gray-300">Febrero 2027</p>
        </div>

        <div className="rounded-2xl bg-slate-800 p-8 text-center">
          <div className="text-4xl font-bold text-cyan-400">2</div>
          <p className="mt-2 text-gray-300">Distancias</p>
        </div>

        <div className="rounded-2xl bg-slate-800 p-8 text-center">
          <div className="text-4xl font-bold text-cyan-400">100</div>
          <p className="mt-2 text-gray-300">Km Recorrido Principal</p>
        </div>

        <div className="rounded-2xl bg-slate-800 p-8 text-center">
          <div className="text-4xl font-bold text-cyan-400">Viedma</div>
          <p className="mt-2 text-gray-300">→ El Cóndor</p>
        </div>

      </div>
    </section>
  );
}