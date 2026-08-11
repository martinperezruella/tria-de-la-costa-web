import { Bike, Footprints, Waves, MapPin, ArrowDown } from "lucide-react";

export default function Route() {
  return (
    <section
      id="recorrido"
      className="relative overflow-hidden bg-slate-950 py-24 md:py-32"
    >
      {/* Decoración de fondo */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Encabezado */}
        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Recorrido
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl lg:text-6xl">
            Del río al mar
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">
            Un circuito único que conecta Viedma con el Balneario El Cóndor,
            atravesando algunos de los paisajes más representativos de la
            costa rionegrina.
          </p>

        </div>

        {/* Punto de partida */}
        <div className="mt-16 flex justify-center">

          <div className="flex items-center gap-4 rounded-2xl border border-cyan-400/20 bg-cyan-950/20 px-6 py-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
              <MapPin size={24} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Largada
              </p>

              <p className="mt-1 text-xl font-bold">
                Viedma
              </p>
            </div>

          </div>

        </div>

        {/* Línea del recorrido */}
        <div className="relative mt-14">

          {/* Línea vertical */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/60 via-cyan-400/20 to-transparent md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-16">

            {/* Natación */}
            <RouteStep
              icon={<Waves size={27} />}
              number="01"
              title="Natación"
              location="Río Negro"
              distance="2 km · T100"
              description="La competencia comienza sobre las aguas del Río Negro, con la largada en Viedma."
              side="left"
            />

            {/* Ciclismo */}
            <RouteStep
              icon={<Bike size={27} />}
              number="02"
              title="Ciclismo"
              location="Ruta Provincial Nº 1"
              distance="80 km · T100"
              description="Desde Viedma comienza el recorrido hacia el Balneario El Cóndor por la Ruta Provincial Nº 1."
              side="right"
            />

            {/* Pedestrismo */}
            <RouteStep
              icon={<Footprints size={27} />}
              number="03"
              title="Pedestrismo"
              location="El Cóndor"
              distance="18 km · T100"
              description="El último tramo se desarrolla en el entorno costero, con llegada en el Balneario El Cóndor."
              side="left"
            />

          </div>

        </div>

        {/* Llegada */}
        <div className="mt-14 flex justify-center md:mt-20">

          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900 px-6 py-4 shadow-xl">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-white">
              <MapPin size={24} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Llegada
              </p>

              <p className="mt-1 text-xl font-bold">
                Balneario El Cóndor
              </p>
            </div>

          </div>

        </div>

        {/* Separador visual */}
        <div className="mt-16 flex justify-center text-cyan-400/40">
          <ArrowDown size={24} />
        </div>

        {/* Información adicional */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              T100
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              El desafío completo
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              2 km de natación, 80 km de ciclismo y 18 km de
              pedestrismo para completar los 100 km del recorrido.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
              SHORT
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Una alternativa para disfrutar
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              1 km de natación, 30 km de ciclismo y 5 km de
              pedestrismo para vivir la experiencia del TRIA DE LA COSTA.
            </p>

          </div>

        </div>

        {/* Próximamente mapa */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-950/20 to-slate-900 p-10 text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
            <MapPin size={28} />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Próximamente
          </p>

          <h3 className="mt-3 text-2xl font-bold">
            Mapa oficial del recorrido
          </h3>

          <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-400">
            En una próxima etapa incorporaremos el mapa oficial con
            largada, recorrido, transiciones y llegada.
          </p>

        </div>

      </div>
    </section>
  );
}

type RouteStepProps = {
  icon: React.ReactNode;
  number: string;
  title: string;
  location: string;
  distance: string;
  description: string;
  side: "left" | "right";
};

function RouteStep({
  icon,
  number,
  title,
  location,
  distance,
  description,
  side,
}: RouteStepProps) {
  return (
    <div className="relative grid gap-6 md:grid-cols-2 md:gap-16">

      {/* Contenido */}
      <div
        className={
          side === "right"
            ? "md:order-2 md:text-left"
            : "md:order-1 md:text-right"
        }
      >

        <div
          className={`flex items-center gap-4 ${
            side === "right" ? "md:justify-start" : "md:justify-end"
          }`}
        >

          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 ${
              side === "right" ? "md:order-1" : "md:order-2"
            }`}
          >
            {icon}
          </div>

          <span
            className={`text-sm font-bold tracking-[0.25em] text-cyan-400 ${
              side === "right" ? "md:order-2" : "md:order-1"
            }`}
          >
            {number}
          </span>

        </div>

        <h3 className="mt-5 text-3xl font-black">
          {title}
        </h3>

        <p className="mt-2 font-semibold text-cyan-400">
          {location}
        </p>

        <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
          {distance}
        </p>

        <p className="mt-4 leading-7 text-gray-400">
          {description}
        </p>

      </div>

      {/* Espacio opuesto */}
      <div
        className={
          side === "right"
            ? "hidden md:order-1 md:block"
            : "hidden md:order-2 md:block"
        }
      />

    </div>
  );
}