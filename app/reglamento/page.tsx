export default function ReglamentoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Encabezado */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/30 via-slate-950 to-slate-950" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            TRIA DE LA COSTA 2027
          </p>

          <h1 className="mt-5 text-5xl font-black md:text-7xl">
            Reglamento
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Reglamento deportivo y disposiciones generales para los
            participantes del TRIA DE LA COSTA.
          </p>
        </div>
      </section>

      {/* Información general */}
      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-8 md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Evento
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  TRIA DE LA COSTA 2027
                </h2>
              </div>

              <div className="md:text-right">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Fecha
                </p>

                <p className="mt-2 text-2xl font-bold">
                  07 FEBRERO 2027
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Reglamento deportivo */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-5xl px-6">

          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Reglamento Deportivo
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Normas de competencia
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              Todos los participantes deberán conocer y respetar las
              siguientes disposiciones durante el desarrollo de la
              competencia.
            </p>
          </div>

          <div className="mt-14 space-y-5">

            {/* Norma 01 */}
            <RegulationItem
              number="01"
              title="Uso obligatorio del casco"
              text="El uso del casco rígido homologado es obligatorio durante todo el segmento de ciclismo."
            />

            {/* Norma 02 */}
            <RegulationItem
              number="02"
              title="Casco correctamente abrochado"
              text="El casco deberá permanecer correctamente abrochado desde el momento en que el participante toma la bicicleta hasta que la deja en la zona de transición."
            />

            {/* Norma 03 */}
            <RegulationItem
              number="03"
              title="Modalidad sin drafting"
              text="La competencia se desarrolla bajo modalidad SIN DRAFTING."
              highlight
            />

            {/* Norma 04 */}
            <RegulationItem
              number="04"
              title="Prohibición de circular a rueda"
              text="Está prohibido circular a rueda de otro competidor."
            />

            {/* Norma 05 */}
            <RegulationItem
              number="05"
              title="Distancia mínima entre bicicletas"
              text="Se deberá mantener una distancia mínima de 20 metros entre bicicletas."
              highlight
            />

            {/* Norma 06 */}
            <RegulationItem
              number="06"
              title="Indicaciones de la organización"
              text="Todo competidor deberá respetar las indicaciones de jueces, fiscales y organización."
            />

            {/* Norma 07 */}
            <RegulationItem
              number="07"
              title="Modificaciones y suspensión"
              text="La organización podrá modificar recorridos, horarios o suspender la prueba por razones climáticas o de seguridad."
            />

          </div>
        </div>
      </section>

      {/* Consideraciones */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">

          <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-8 md:p-10">

            <div className="flex gap-5">

              <div className="text-4xl">
                ⚠️
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Importante
                </h2>

                <p className="mt-4 leading-8 text-gray-400">
                  La participación en el TRIA DE LA COSTA implica el
                  conocimiento y aceptación de las normas establecidas
                  por la organización.
                </p>

                <p className="mt-4 leading-8 text-gray-400">
                  Las disposiciones podrán ser complementadas o
                  actualizadas por la organización antes de la realización
                  del evento.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Próximamente más información */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Información del evento
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Reglamento completo
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            A medida que la organización confirme nuevas disposiciones,
            esta sección será actualizada con toda la información oficial
            correspondiente al evento.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="/recorrido"
              className="rounded-xl border border-white/20 px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-950"
            >
              Ver recorrido
            </a>

            <a
              href="/inscripciones"
              className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-400"
            >
              Inscribite
            </a>

          </div>

        </div>
      </section>
    </main>
  );
}

type RegulationItemProps = {
  number: string;
  title: string;
  text: string;
  highlight?: boolean;
};

function RegulationItem({
  number,
  title,
  text,
  highlight = false,
}: RegulationItemProps) {
  return (
    <article
      className={`rounded-2xl border p-6 transition duration-300 md:p-7 ${
        highlight
          ? "border-cyan-500/30 bg-cyan-500/5"
          : "border-white/10 bg-slate-950 hover:border-cyan-500/20"
      }`}
    >
      <div className="flex gap-5">

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-sm font-bold text-cyan-400">
          {number}
        </div>

        <div>
          <h3 className="text-xl font-bold">
            {title}
          </h3>

          <p className="mt-3 leading-7 text-gray-400">
            {text}
          </p>
        </div>

      </div>
    </article>
  );
}