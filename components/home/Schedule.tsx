const schedule = [
  {
    date: "Sábado 06 FEB",
    label: "Acreditación",
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
    label: "Día de competencia",
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
        highlight: true,
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
      className="relative overflow-hidden bg-slate-950 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-6">

        {/* Encabezado */}
        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Cronograma
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Programa del evento
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            Organizá tu participación y conocé las principales
            actividades previstas para el fin de semana.
          </p>

        </div>

        {/* Cronograma */}
        <div className="mt-16 space-y-14">

          {schedule.map((day) => (
            <div key={day.date}>

              {/* Día */}
              <div className="mb-7 flex items-center gap-4">

                <div className="h-px flex-1 bg-white/10" />

                <div className="text-center">

                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    {day.label}
                  </p>

                  <h3 className="mt-1 rounded-full bg-cyan-500/10 px-5 py-2 text-sm font-black uppercase tracking-wider text-cyan-400">
                    {day.date}
                  </h3>

                </div>

                <div className="h-px flex-1 bg-white/10" />

              </div>

              {/* Actividades */}
              <div className="space-y-4">

                {day.events.map((event) => (
                  <div
                    key={`${day.date}-${event.title}`}
                    className={`group rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 ${
                      event.highlight
                        ? "border-cyan-400/40 bg-cyan-400/5 shadow-lg shadow-cyan-500/5"
                        : "border-white/10 bg-slate-900 hover:border-cyan-400/30"
                    }`}
                  >

                    <div className="flex flex-col gap-5 md:flex-row md:items-center">

                      {/* Horario */}
                      <div className="shrink-0 md:w-48">

                        <p
                          className={`text-sm font-bold ${
                            event.highlight
                              ? "text-cyan-400"
                              : "text-gray-400"
                          }`}
                        >
                          {event.time}
                        </p>

                      </div>

                      {/* Separador */}
                      <div className="hidden h-10 w-px bg-white/10 md:block" />

                      {/* Información */}
                      <div className="flex-1">

                        <div className="flex flex-wrap items-center gap-3">

                          <h4 className="text-xl font-bold">
                            {event.title}
                          </h4>

                          {event.highlight && (
                            <span className="rounded-full bg-cyan-500 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-slate-950">
                              Momento principal
                            </span>
                          )}

                        </div>

                        <p className="mt-2 text-sm leading-6 text-gray-400">
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
        <div className="mt-14 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 text-center">

          <p className="text-sm leading-6 text-gray-300">
            ⚠️ Los horarios publicados son tentativos y estarán
            sujetos a confirmación por parte de la organización.
          </p>

        </div>

      </div>
    </section>
  );
}