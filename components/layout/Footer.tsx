export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 text-white">
      <div className="mx-auto max-w-6xl px-6">

        <div className="grid gap-10 md:grid-cols-3">

          <div>
            <h3 className="text-2xl font-bold text-cyan-400">
              TRIA DE LA COSTA
            </h3>

            <p className="mt-4 text-gray-400">
              Un desafío que une el río, la ruta y el mar.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">
              Información
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>📅 07 de febrero de 2027</li>
              <li>📍 Viedma - El Cóndor</li>
              <li>🏊🚴🏃 Triatlón</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">
              Seguinos
            </h4>

            <a
              href="https://instagram.com/triadelacosta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300"
            >
              @triadelacosta
            </a>
          </div>

        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-gray-500">
          © 2027 TRIA DE LA COSTA · Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}