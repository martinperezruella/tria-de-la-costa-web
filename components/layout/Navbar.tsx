export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <a
          href="/"
          className="text-2xl font-extrabold text-cyan-400"
        >
          TRIA DE LA COSTA
        </a>

        <nav className="hidden gap-8 md:flex">

          <a href="#evento" className="hover:text-cyan-400 transition">
            El desafío
          </a>

          <a href="#distancias" className="hover:text-cyan-400 transition">
            Distancias
          </a>

          <a href="#recorrido" className="hover:text-cyan-400 transition">
            Recorrido
          </a>

          <a href="#galeria" className="hover:text-cyan-400 transition">
            Galería
          </a>

          <a href="#cronograma" className="hover:text-cyan-400 transition">
            Cronograma
          </a>

          <a href="#sponsors" className="hover:text-cyan-400 transition">
            Sponsors
          </a>

          <a
            href="/inscripciones"
            className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold hover:bg-cyan-400 transition"
          >
            Inscribite
          </a>

        </nav>

      </div>
    </header>
  );
}