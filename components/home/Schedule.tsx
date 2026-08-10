const schedule = [
  {
    date: "Sábado 06 FEB",
    events: [
      {
        time: "Horario a confirmar",
        title: "Entrega de kits",
        description:
          "Entrega de kits y acreditación de los participantes.",
      },
    ],
  },
  {
    date: "Domingo 07 FEB",
    events: [
      {
        time: "Horario a confirmar",
        title: "Apertura del parque cerrado",
        description:
          "Ingreso de los atletas y preparación para la competencia.",
      },
      {
        time: "Horario a confirmar",
        title: "Largada",
        description:
          "Inicio oficial del TRIA DE LA COSTA.",
      },
      {
        time: "Al finalizar",
        title: "Premiación",
        description:
          "Entrega de premios y reconocimientos a los atletas.",
      },
    ],
  },
];

export default function Schedule() {
  return (
    <section
      id="cronograma"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl px-6">

        {/* Encabezado */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Cronograma
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Programa del evento
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Todos los horarios son tentativos y estarán sujetos a
            confirmación por parte de la organización.
          </p>
        </div>

        {/* Cronograma */}
        <div className="mt-16 space-y-12">

          {schedule.map((day) => (
            <div key={day.date}>

              <div className="mb-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />

                <h3 className="rounded-full bg-cyan-500/10 px-5 py-2 text-sm font-bold uppercase tracking-wider text-cyan-400">
                  {day.date}
                </h3>

                <div className="h-px flex-1 bg-white/10" />
              </div>

              <div className="space-y-4">

                {day.events.map((event) => (
                  <div
                    key={`${day.date}-${event.title}`}
                    className="group rounded-2xl border border-white/10 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-center">

                      <div className="shrink-0 md:w-44">
                        <p className="text-sm font-bold text-cyan-400">
                          {event.time}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold">
                          {event.title}
                        </h4>

                        <p className="mt-1 text-sm leading-6 text-gray-400">
                          {event.description}
                        </p>
                      </div>

                    </div>
                  </div>
                ))}

              </div>
            </div>
          ))}

        </div>

        {/* Aviso */}
        <div className="mt-12 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 text-center">
          <p className="text-sm text-gray-300">
            ⚠️ Los horarios definitivos serán comunicados por la
            organización antes del evento.
          </p>
        </div>

      </div>
    </section>
  );
}