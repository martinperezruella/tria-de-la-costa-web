export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">

      <div className="mx-auto max-w-6xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Marca */}
          <div>
            <a
              href="/"
              className="text-2xl font-black text-cyan-400"
            >
              TRIA DE LA COSTA
            </a>

            <p className="mt-4 max-w-sm leading-7 text-gray-400">
              Un desafío único que conecta Viedma con el Balneario
              El Cóndor, atravesando algunos de los paisajes más
              emblemáticos de la costa rionegrina.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-bold">
              Navegación
            </h3>

            <div className="mt-5 space-y-3 text-gray-400">
              <a
                href="#evento"
                className="block transition hover:text-cyan-400"
              >
                El desafío
              </a>

              <a
                href="#distancias"
                className="block transition hover:text-cyan-400"
              >
                Distancias
              </a>

              <a
                href="#recorrido"
                className="block transition hover:text-cyan-400"
              >
                Recorrido
              </a>

              <a
                href="#galeria"
                className="block transition hover:text-cyan-400"
              >
                Galería
              </a>
            </div>
          </div>

          {/* Información */}
          <div>
            <h3 className="font-bold">
              Información
            </h3>

            <div className="mt-5 space-y-3 text-gray-400">
              <a
                href="/inscripciones"
                className="block transition hover:text-cyan-400"
              >
                Inscripciones
              </a>

              <a
                href="/reglamento"
                className="block transition hover:text-cyan-400"
              >
                Reglamento
              </a>

              <a
                href="/evento"
                className="block transition hover:text-cyan-400"
              >
                Información del evento
              </a>
            </div>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

          <p>
            © 2027 TRIA DE LA COSTA. Todos los derechos reservados.
          </p>

          <p>
            Viedma · Río Negro · Argentina
          </p>

        </div>

      </div>
    </footer>
  );
}