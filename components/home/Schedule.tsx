export default function Schedule() {
  return (
    <section
      id="cronograma"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Cronograma
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Programa del Evento
          </h2>

          <p className="mt-5 text-gray-400">
            Horarios sujetos a confirmación por la organización.
          </p>
        </div>

        <div className="mt-16 space-y-6">

          <div className="flex justify-between rounded-xl bg-slate-800 p-5">
            <span>Entrega de kits</span>
            <strong>Sábado (Horario a confirmar)</strong>
          </div>

          <div className="flex justify-between rounded-xl bg-slate-800 p-5">
            <span>Apertura del Parque Cerrado</span>
            <strong>Domingo (Horario a confirmar)</strong>
          </div>

          <div className="flex justify-between rounded-xl bg-slate-800 p-5">
            <span>Largada</span>
            <strong>07/02/2027</strong>
          </div>

          <div className="flex justify-between rounded-xl bg-slate-800 p-5">
            <span>Premiación</span>
            <strong>Al finalizar la competencia</strong>
          </div>

        </div>

      </div>
    </section>
  );
}