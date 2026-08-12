export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative overflow-hidden bg-slate-950 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Encabezado */}
        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Sponsors
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Empresas que acompañan el evento
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            El TRIA DE LA COSTA busca sumar empresas, instituciones
            y organizaciones que quieran ser parte de esta experiencia
            deportiva.
          </p>

        </div>

        {/* Espacios para sponsors */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {[1, 2, 3, 4].map((slot) => (
            <div
              key={slot}
              className="group flex min-h-44 items-center justify-center rounded-3xl border border-dashed border-white/15 bg-slate-900/60 p-8 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900"
            >
              <div>

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5">

                  <span className="text-2xl font-black text-white/20">
                    +
                  </span>

                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Próximamente
                </p>

              </div>
            </div>
          ))}

        </div>

        {/* Invitación */}
        <div className="relative mt-16 overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-slate-950 p-10 text-center md:p-14">

          {/* Brillo decorativo */}
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              ¿Querés acompañarnos?
            </p>

            <h3 className="mt-4 text-3xl font-black md:text-4xl">
              Sé parte del TRIA DE LA COSTA
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              Estamos construyendo una experiencia deportiva que
              conecta atletas, comunidad y empresas de toda la región.
            </p>

            <a
              href="mailto:contacto@triadelacosta.com"
              className="mt-8 inline-block rounded-xl bg-cyan-500 px-8 py-4 font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400"
            >
              Contactar organización
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}