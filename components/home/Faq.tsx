const faqs = [
  {
    question: "¿Cuándo se realiza el TRIA DE LA COSTA?",
    answer:
      "La competencia se realizará el domingo 7 de febrero de 2027. El cronograma definitivo será comunicado por la organización.",
  },
  {
    question: "¿Qué distancias puedo elegir?",
    answer:
      "El evento cuenta con dos modalidades: T100, con 2 km de natación, 80 km de ciclismo y 18 km de pedestrismo; y SHORT, con 1 km de natación, 30 km de ciclismo y 5 km de pedestrismo.",
  },
  {
    question: "¿Dónde comienza la competencia?",
    answer:
      "El recorrido comienza en Viedma, sobre el Río Negro, y continúa hacia el Balneario El Cóndor.",
  },
  {
    question: "¿Cómo puedo inscribirme?",
    answer:
      "Podés ingresar a la sección Inscripciones y elegir la modalidad correspondiente. Allí encontrarás el formulario oficial de inscripción.",
  },
  {
    question: "¿Dónde puedo consultar el reglamento?",
    answer:
      "El reglamento estará disponible en la sección Reglamento del sitio web.",
  },
  {
    question: "¿Los horarios del cronograma son definitivos?",
    answer:
      "No. Los horarios publicados actualmente son orientativos y estarán sujetos a confirmación por parte de la organización.",
  },
];

export default function Faq() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-slate-950 py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl px-6">

        {/* Encabezado */}
        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Preguntas frecuentes
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Todo lo que necesitás saber
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            Algunas respuestas para ayudarte a prepararte para el
            TRIA DE LA COSTA.
          </p>

        </div>

        {/* Preguntas */}
        <div className="mt-14 space-y-4">

          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900 transition duration-300 hover:border-cyan-400/30"
            >
              <summary className="cursor-pointer list-none px-6 py-6 md:px-7">
                <div className="flex items-center justify-between gap-6">

                  <span className="text-base font-bold md:text-lg">
                    {faq.question}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 text-xl font-light text-cyan-400 transition duration-300 group-open:rotate-45 group-open:bg-cyan-400/10">
                    +
                  </span>

                </div>
              </summary>

              <div className="border-t border-white/10 px-6 py-6 md:px-7">

                <p className="max-w-3xl leading-7 text-gray-400">
                  {faq.answer}
                </p>

              </div>
            </details>
          ))}

        </div>

        {/* Cierre */}
        <div className="mt-12 text-center">

          <p className="text-sm text-gray-500">
            ¿No encontrás la información que buscás?
          </p>

          <a
            href="/reglamento"
            className="mt-2 inline-block font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            Consultá el reglamento →
          </a>

        </div>

      </div>
    </section>
  );
}