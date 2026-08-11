const registrations = [
  {
    name: "T100",
    subtitle: "Distancia principal",
    description:
      "El desafío para atletas que buscan llevar sus límites un paso más allá.",
    distances: [
      "2 km de natación",
      "80 km de ciclismo",
      "18 km de pedestrismo",
    ],
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeRWjLR4t9nB7o5r24p1YLiOjftZnVO1gYzBLJdRa51maqt7w/viewform",
    featured: true,
  },
  {
    name: "SHORT",
    subtitle: "Distancia promocional",
    description:
      "Una distancia ideal para quienes quieren vivir la experiencia del triatlón.",
    distances: [
      "1 km de natación",
      "30 km de ciclismo",
      "5 km de pedestrismo",
    ],
    href: "https://docs.google.com/forms/d/e/1FAIpQLSepRfNGEfjyqenrFol1oZNxnNI_jowWqQLAXxhMuy08ILul8w/viewform",
    featured: false,
  },
];

export default function InscripcionesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Encabezado */}
      <section className="relative overflow-hidden py-24">

        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/30 via-slate-950 to-slate-950" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            TRIA DE LA COSTA
          </p>

          <h1 className="mt-5 text-5xl font-black md:text-7xl">
            Inscripciones
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Elegí tu distancia y completá el formulario oficial de
            inscripción para participar del evento.
          </p>

        </div>
      </section>

      {/* Distancias */}
      <section className="pb-24">

        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">

          {registrations.map((registration) => (
            <div
              key={registration.name}
              className={`relative overflow-hidden rounded-3xl border p-8 shadow-2xl md:p-10 ${
                registration.featured
                  ? "border-cyan-400/40 bg-slate-900"
                  : "border-white/10 bg-slate-900"
              }`}
            >

              {registration.featured && (
                <div className="absolute right-6 top-6 rounded-full bg-cyan-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-slate-950">
                  Principal
                </div>
              )}

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                {registration.subtitle}
              </p>

              <h2 className="mt-4 text-4xl font-black">
                {registration.name}
              </h2>

              <p className="mt-4 leading-7 text-gray-400">
                {registration.description}
              </p>

              <div className="mt-8 space-y-4">
                {registration.distances.map((distance) => (
                  <div
                    key={distance}
                    className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3"
                  >
                    <span className="text-cyan-400">✓</span>

                    <span className="text-gray-200">
                      {distance}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={registration.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-10 block rounded-xl px-8 py-4 text-center font-bold transition ${
                  registration.featured
                    ? "bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                    : "bg-white text-slate-950 hover:bg-gray-200"
                }`}
              >
                Inscribirme en {registration.name}
              </a>

            </div>
          ))}

        </div>

      </section>

      {/* Información */}
      <section className="border-t border-white/10 bg-slate-900 py-20">

        <div className="mx-auto max-w-3xl px-6 text-center">

          <h2 className="text-3xl font-bold">
            ¿Tenés dudas antes de inscribirte?
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            Consultá el reglamento del evento o revisá las preguntas
            frecuentes antes de completar tu inscripción.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="/reglamento"
              className="rounded-xl border border-white/20 px-7 py-3 font-semibold transition hover:bg-white hover:text-slate-950"
            >
              Ver reglamento
            </a>

            <a
              href="/#faq"
              className="rounded-xl border border-white/20 px-7 py-3 font-semibold transition hover:bg-white hover:text-slate-950"
            >
              Preguntas frecuentes
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}