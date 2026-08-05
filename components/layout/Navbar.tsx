export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo temporal */}
        <div>
          <h1 className="text-2xl font-extrabold tracking-wide text-white">
            TRIA DE LA COSTA
          </h1>
        </div>

        {/* Menú */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          <a href="#evento" className="hover:text-cyan-400 transition">
            Evento
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
        </nav>

        {/* Botón */}
        <a
          href="#inscripciones"
          className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-white transition hover:bg-cyan-400"
        >
          Inscribite
        </a>
      </div>
    </header>
  );
}