export default function CategoriasPage() {
  const categorias = [
    "16-19 años",
    "20-24 años",
    "25-29 años",
    "30-34 años",
    "35-39 años",
    "40-44 años",
    "45-49 años",
    "50-54 años",
    "55-59 años",
    "60-64 años",
    "65 años en adelante",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-24">

        <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
          Categorías
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Categorías por Edad
        </h1>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {categorias.map((categoria) => (
            <div
              key={categoria}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
              {categoria}
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}