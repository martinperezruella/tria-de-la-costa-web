export default function EventoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/30 via-slate-950 to-slate-950" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            TRIA DE LA COSTA
          </p>

          <h1 className="mt-5 text-5xl font-black md:text-7xl">
            El evento
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
            Una experiencia deportiva que conecta Viedma con el Balneario El Cóndor a través de un recorrido único,
            desde el Río Negro hasta el mar.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
          <InfoCard title="Fecha" value="07 FEBRERO 2027" />
          <InfoCard title="Largada" value="Viedma" />
          <InfoCard title="Llegada" value="El Cóndor" />
        </div>
      </section>

      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
              El desafío
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Del río al mar
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              TRIA DE LA COSTA propone un recorrido que atraviesa algunos de los paisajes más representativos de la
              costa rionegrina.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <SportCard
              emoji="🏊"
              title="Natación"
              text="La competencia comienza sobre las aguas del Río Negro."
            />

            <SportCard
              emoji="🚴"
              title="Ciclismo"
              text="El recorrido continúa por la Ruta Provincial Nº 1 hacia El Cóndor."
            />

            <SportCard
              emoji="🏃"
              title="Pedestrismo"
              text="El último tramo se desarrolla en el entorno costero."
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Mucho más que una competencia
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Una experiencia para recordar
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            El TRIA DE LA COSTA busca reunir a atletas, familias, acompañantes y comunidad en torno a una experiencia
            deportiva única en Río Negro.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/inscripciones"
              className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-slate-950 transition hover:bg-cyan-400"
            >
              Ver inscripciones
            </a>

            <a
              href="/reglamento"
              className="rounded-xl border border-white/20 px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-950"
            >
              Ver reglamento
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

type InfoCardProps = {
  title: string;
  value: string;
};

function InfoCard({ title, value }: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
        {title}
      </p>

      <p className="mt-3 text-2xl font-bold">
        {value}
      </p>
    </div>
  );
}

type SportCardProps = {
  emoji: string;
  title: string;
  text: string;
};

function SportCard({ emoji, title, text }: SportCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950 p-8 text-center">
      <div className="text-5xl">
        {emoji}
      </div>

      <h3 className="mt-5 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-400">
        {text}
      </p>
    </div>
  );
}