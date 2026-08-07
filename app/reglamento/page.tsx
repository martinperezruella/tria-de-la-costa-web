export default function ReglamentoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-24">

        <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
          Reglamento
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Reglamento Oficial
        </h1>

        <p className="mt-8 text-lg text-gray-300">
          Próximamente estará disponible el reglamento oficial del
          TRIA DE LA COSTA 2027.
        </p>

        <div className="mt-10 rounded-2xl border border-cyan-500/30 bg-slate-900 p-8">
          <p className="text-gray-400">
            Aquí podrás descargar el reglamento en formato PDF, conocer
            las categorías, horarios, elementos obligatorios y toda la
            información necesaria para participar del evento.
          </p>
        </div>

      </section>
    </main>
  );
}