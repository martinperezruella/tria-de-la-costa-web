import { Bike, Footprints, Waves } from "lucide-react";

export default function Distances() {
  return (
    <section
      id="distancias"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Encabezado */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Distancias
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Elegí tu desafío
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Dos modalidades para distintos niveles de preparación.
            Encontrá la distancia que mejor se adapte a vos.
          </p>
        </div>

        {/* Distancias */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {/* T100 */}
          <div className="group relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-slate-900 p-8 shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/60 md:p-10">

            {/* Destacado */}
            <div className="absolute right-6 top-6 rounded-full bg-cyan-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-slate-950">
              Distancia principal
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              T100
            </p>

            <h3 className="mt-4 text-4xl font-black">
              100 km
            </h3>

            <p className="mt-3 max-w-md text-gray-400">
              El desafío para atletas que buscan llevar sus límites
              un paso más allá.
            </p>

            <div className="mt-10 space-y-5">

              <DistanceItem
                icon={<Waves size={24} />}
                distance="2 km"
                discipline="Natación"
              />

              <DistanceItem
                icon={<Bike size={24} />}
                distance="80 km"
                discipline="Ciclismo"
              />

              <DistanceItem
                icon={<Footprints size={24} />}
                distance="18 km"
                discipline="Pedestrismo"
              />

            </div>

            <a
              href="/inscripciones"
              className="mt-10 block rounded-xl bg-cyan-500 px-8 py-4 text-center font-bold text-slate-950 transition duration-300 hover:bg-cyan-400"
            >
              Inscribirme en T100
            </a>

          </div>

          {/* SHORT */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-white/30 md:p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
              SHORT
            </p>

            <h3 className="mt-4 text-4xl font-black">
              36 km
            </h3>

            <p className="mt-3 max-w-md text-gray-400">
              Una distancia ideal para quienes quieren vivir la
              experiencia del triatlón.
            </p>

            <div className="mt-10 space-y-5">

              <DistanceItem
                icon={<Waves size={24} />}
                distance="1 km"
                discipline="Natación"
              />

              <DistanceItem
                icon={<Bike size={24} />}
                distance="30 km"
                discipline="Ciclismo"
              />

              <DistanceItem
                icon={<Footprints size={24} />}
                distance="5 km"
                discipline="Pedestrismo"
              />

            </div>

            <a
              href="/inscripciones"
              className="mt-10 block rounded-xl border border-white/20 bg-white px-8 py-4 text-center font-bold text-slate-950 transition duration-300 hover:bg-gray-200"
            >
              Inscribirme en SHORT
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

type DistanceItemProps = {
  icon: React.ReactNode;
  distance: string;
  discipline: string;
};

function DistanceItem({
  icon,
  distance,
  discipline,
}: DistanceItemProps) {
  return (
    <div className="flex items-center gap-4 border-b border-white/10 pb-4 last:border-0">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
        {icon}
      </div>

      <div>
        <p className="text-xl font-bold">
          {distance}
        </p>

        <p className="text-sm text-gray-400">
          {discipline}
        </p>
      </div>

    </div>
  );
}