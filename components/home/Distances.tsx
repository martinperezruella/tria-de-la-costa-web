import { Bike, Footprints, Waves, ArrowRight, Star } from "lucide-react";

export default function Distances() {
  return (
    <section
      id="distancias"
      className="relative overflow-hidden bg-slate-950 py-24 md:py-32"
    >
      {/* Decoración de fondo */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Encabezado */}
        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Distancias
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl lg:text-6xl">
            Elegí tu desafío
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            Dos modalidades para distintos niveles de preparación.
            Encontrá la distancia que mejor se adapte a vos.
          </p>

        </div>

        {/* Tarjetas */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* T100 */}
          <div className="group relative overflow-hidden rounded-3xl border border-cyan-400/40 bg-gradient-to-b from-cyan-950/40 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/70 md:p-10">

            {/* Brillo */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-cyan-400/20" />

            {/* Distancia principal */}
            <div className="relative flex items-center justify-between gap-4">

              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-950">
                <Star size={14} fill="currentColor" />
                Distancia principal
              </div>

              <span className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                T100
              </span>

            </div>

            {/* Título */}
            <div className="relative mt-8">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                T100
              </p>

              <h3 className="mt-2 text-5xl font-black text-white md:text-6xl">
                100 km
              </h3>

              <p className="mt-4 max-w-md text-gray-400">
                El desafío para atletas que buscan llevar sus límites
                un paso más allá.
              </p>

            </div>

            {/* Disciplinas */}
            <div className="relative mt-10 space-y-4">

              <DistanceItem
                icon={<Waves size={25} />}
                distance="2 km"
                discipline="Natación"
              />

              <DistanceItem
                icon={<Bike size={25} />}
                distance="80 km"
                discipline="Ciclismo"
              />

              <DistanceItem
                icon={<Footprints size={25} />}
                distance="18 km"
                discipline="Pedestrismo"
              />

            </div>

            {/* Botón */}
            <a
              href="/inscripciones"
              className="group/button relative mt-10 flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 text-center font-bold text-slate-950 transition duration-300 hover:bg-cyan-400"
            >
              Inscribirme en T100

              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover/button:translate-x-1"
              />
            </a>

          </div>

          {/* SHORT */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl transition duration-500 hover:-translate-y-2 hover:border-white/30 md:p-10">

            {/* Encabezado */}
            <div className="relative flex items-center justify-between">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
                Modalidad
              </p>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                SHORT
              </span>

            </div>

            {/* Título */}
            <div className="relative mt-8">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                SHORT
              </p>

              <h3 className="mt-2 text-5xl font-black text-white md:text-6xl">
                36 km
              </h3>

              <p className="mt-4 max-w-md text-gray-400">
                Una distancia ideal para quienes quieren vivir la
                experiencia del triatlón.
              </p>

            </div>

            {/* Disciplinas */}
            <div className="relative mt-10 space-y-4">

              <DistanceItem
                icon={<Waves size={25} />}
                distance="1 km"
                discipline="Natación"
                muted
              />

              <DistanceItem
                icon={<Bike size={25} />}
                distance="30 km"
                discipline="Ciclismo"
                muted
              />

              <DistanceItem
                icon={<Footprints size={25} />}
                distance="5 km"
                discipline="Pedestrismo"
                muted
              />

            </div>

            {/* Botón */}
            <a
              href="/inscripciones"
              className="group/button relative mt-10 flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white px-8 py-4 text-center font-bold text-slate-950 transition duration-300 hover:bg-gray-200"
            >
              Inscribirme en SHORT

              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover/button:translate-x-1"
              />
            </a>

          </div>

        </div>

        {/* Texto inferior */}
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-6 text-gray-500">
          Ambas modalidades combinan natación, ciclismo y pedestrismo.
          Elegí el desafío que mejor se adapte a tu preparación.
        </p>

      </div>
    </section>
  );
}

type DistanceItemProps = {
  icon: React.ReactNode;
  distance: string;
  discipline: string;
  muted?: boolean;
};

function DistanceItem({
  icon,
  distance,
  discipline,
  muted = false,
}: DistanceItemProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-black/20 p-4 transition duration-300 hover:border-white/10 hover:bg-black/30">

      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
          muted
            ? "bg-white/5 text-gray-400"
            : "bg-cyan-500/10 text-cyan-400"
        }`}
      >
        {icon}
      </div>

      <div>
        <p className="text-xl font-bold text-white">
          {distance}
        </p>

        <p className="text-sm text-gray-400">
          {discipline}
        </p>
      </div>

    </div>
  );
}