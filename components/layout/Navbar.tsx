"use client";

import { Instagram, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white backdrop-blur-md">
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

          {/* Instagram */}
          <a
            href="https://www.instagram.com/triadelacosta?igsh=bnl6cGpkZGNyZHZ4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram oficial de TRIA DE LA COSTA"
            className="flex items-center justify-center rounded-lg p-2 text-white transition hover:bg-white/10 hover:text-cyan-400"
          >
            <Instagram size={22} />
          </a>

          {/* Inscripciones */}
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

            {/* Instagram móvil */}
            <a
              href="https://www.instagram.com/triadelacosta?igsh=bnl6cGpkZGNyZHZ4"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-semibold transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              <Instagram size={22} />
              <span>Instagram oficial</span>
            </a>

            {/* Inscripciones */}
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