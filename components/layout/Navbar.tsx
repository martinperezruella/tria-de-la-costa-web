"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="/"
          className="text-xl font-extrabold tracking-tight text-cyan-400 md:text-2xl"
          onClick={closeMenu}
        >
          TRIA DE LA COSTA
        </a>

        {/* Menú escritorio */}
        <nav className="hidden items-center gap-6 lg:flex">

          <a
            href="/evento"
            className="transition hover:text-cyan-400"
          >
            El evento
          </a>

          <a
            href="/#distancias"
            className="transition hover:text-cyan-400"
          >
            Distancias
          </a>

          <a
            href="/recorrido"
            className="transition hover:text-cyan-400"
          >
            Recorrido
          </a>

          <a
            href="/#galeria"
            className="transition hover:text-cyan-400"
          >
            Galería
          </a>

          <a
            href="/#cronograma"
            className="transition hover:text-cyan-400"
          >
            Cronograma
          </a>

          <a
            href="/categorias"
            className="transition hover:text-cyan-400"
          >
            Categorías
          </a>

          <a
            href="/reglamento"
            className="transition hover:text-cyan-400"
          >
            Reglamento
          </a>

          <a
            href="/#sponsors"
            className="transition hover:text-cyan-400"
          >
            Sponsors
          </a>

          <a
            href="/inscripciones"
            className="rounded-lg bg-cyan-500 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Inscribite
          </a>

        </nav>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-white transition hover:bg-white/10 lg:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <nav className="border-t border-white/10 bg-slate-950 px-6 py-6 lg:hidden">

          <div className="flex flex-col gap-5">

            <a
              href="/evento"
              onClick={closeMenu}
              className="transition hover:text-cyan-400"
            >
              El evento
            </a>

            <a
              href="/#distancias"
              onClick={closeMenu}
              className="transition hover:text-cyan-400"
            >
              Distancias
            </a>

            <a
              href="/recorrido"
              onClick={closeMenu}
              className="transition hover:text-cyan-400"
            >
              Recorrido
            </a>

            <a
              href="/#galeria"
              onClick={closeMenu}
              className="transition hover:text-cyan-400"
            >
              Galería
            </a>

            <a
              href="/#cronograma"
              onClick={closeMenu}
              className="transition hover:text-cyan-400"
            >
              Cronograma
            </a>

            <a
              href="/categorias"
              onClick={closeMenu}
              className="transition hover:text-cyan-400"
            >
              Categorías
            </a>

            <a
              href="/reglamento"
              onClick={closeMenu}
              className="transition hover:text-cyan-400"
            >
              Reglamento
            </a>

            <a
              href="/#sponsors"
              onClick={closeMenu}
              className="transition hover:text-cyan-400"
            >
              Sponsors
            </a>

            <a
              href="/inscripciones"
              onClick={closeMenu}
              className="rounded-lg bg-cyan-500 px-5 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Inscribite
            </a>

          </div>

        </nav>
      )}
    </header>
  );
}