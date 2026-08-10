const sponsors = [
  {
    name: "Sponsor 1",
    category: "Sponsor principal",
  },
  {
    name: "Sponsor 2",
    category: "Sponsor oficial",
  },
  {
    name: "Sponsor 3",
    category: "Sponsor oficial",
  },
  {
    name: "Sponsor 4",
    category: "Sponsor oficial",
  },
];

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="bg-white py-24 text-slate-900"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Encabezado */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Sponsors
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Empresas que acompañan el evento
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Gracias a las empresas, instituciones y organizaciones que
            hacen posible el TRIA DE LA COSTA.
          </p>
        </div>

        {/* Sponsors */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="group flex min-h-44 flex-col items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-xl"
            >
              {/* Espacio para logo */}
              <div className="flex h-20 w-full items-center justify-center rounded-xl border-2 border-dashed border-slate-300 transition group-hover:border-cyan-300">
                <span className="text-lg font-bold text-slate-400">
                  {sponsor.name}
                </span>
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-cyan-600">
                {sponsor.category}
              </p>
            </div>
          ))}

        </div>

        {/* Invitación */}
        <div className="mt-16 rounded-3xl bg-slate-950 p-10 text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            ¿Querés acompañarnos?
          </p>

          <h3 className="mt-4 text-2xl font-bold md:text-3xl">
            Sé parte del TRIA DE LA COSTA
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Estamos construyendo una experiencia deportiva que conecta
            atletas, comunidad y empresas de toda la región.
          </p>

          <a
            href="mailto:contacto@triadelacosta.com"
            className="mt-8 inline-block rounded-xl bg-cyan-500 px-8 py-4 font-bold text-slate-950 transition hover:bg-cyan-400"
          >
            Contactar organización
          </a>
        </div>

      </div>
    </section>
  );
}