const faqs = [
  {
    pregunta: "¿Dónde se retiran los kits?",
    respuesta:
      "La entrega de kits se realizará el día previo al evento en un lugar que será informado por la organización.",
  },
  {
    pregunta: "¿Qué incluye la inscripción?",
    respuesta:
      "Número de competidor, kit del atleta, hidratación, seguro del evento y medalla finisher.",
  },
  {
    pregunta: "¿Habrá premiación?",
    respuesta:
      "Sí. Se premiará la clasificación general y las categorías por edad.",
  },
  {
    pregunta: "¿Qué pasa si llueve?",
    respuesta:
      "La organización evaluará las condiciones climáticas para garantizar la seguridad de todos los participantes.",
  },
];

export default function Faq() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            Preguntas Frecuentes
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            ¿Tenés dudas?
          </h2>
        </div>

        <div className="mt-16 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.pregunta}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
            >
              <h3 className="text-xl font-semibold text-cyan-400">
                {faq.pregunta}
              </h3>

              <p className="mt-3 text-gray-300">
                {faq.respuesta}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}