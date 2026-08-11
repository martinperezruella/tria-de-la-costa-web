export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Marca */}
          <div className="lg:col-span-2">
            <a
              href="/"
              className="text-2xl font-black text-cyan-400"
            >
              TRIA DE LA COSTA
            </a>

            <p className="mt-4 max-w-lg leading-7 text-gray-400">
              Un desafío único que conecta Viedma con el Balneario
              El Cóndor, atravesando algunos de los paisajes más
              emblemáticos de la costa rionegrina.
            </p>

            <p className="mt-5 font-semibold text-gray-300">
              Viedma → El Cóndor
            </p>

            <p className="mt-2 text-sm text-gray-500">
              07 de febrero de 2027 · Río Negro · Argentina
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-bold text-white">
              Navegación
            </h3>

            <div className="mt-5 space-y-3 text-gray-400">

              <a
                href="/"
                className="block transition hover:text-cyan-400"
              >
                Inicio
              </a>

              <a
                href="/evento"
                className="block transition hover:text-cyan-400"
              >
                El evento
              </a>

              <a
                href="/categorias"
                className="block transition hover:text-cyan-400"
              >
                Categorías
              </a>

              <a
                href="/recorrido"
                className="block transition hover:text-cyan-400"
              >
                Recorrido
              </a>

              <a
                href="/reglamento"
                className="block transition hover:text-cyan-400"
              >
                Reglamento
              </a>

            </div>
          </div>

          {/* Información */}
          <div>
            <h3 className="font-bold text-white">
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
                href="/#galeria"
                className="block transition hover:text-cyan-400"
              >
                Galería
              </a>

              <a
                href="/#cronograma"
                className="block transition hover:text-cyan-400"
              >
                Cronograma
              </a>

              <a
                href="/#sponsors"
                className="block transition hover:text-cyan-400"
              >
                Sponsors
              </a>

            </div>
          </div>

        </div>

        {/* Separador */}
        <div className="mt-14 border-t border-white/10 pt-8">

          <div className="flex flex-col gap-4 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

            <p>
              © 2027 TRIA DE LA COSTA. Todos los derechos reservados.
            </p>

            <p>
              Viedma · Río Negro · Argentina
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}