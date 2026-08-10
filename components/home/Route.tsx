import { Bike, Footprints, Waves } from "lucide-react";

export default function Route() {
  return (
    <section
      id="recorrido"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Encabezado */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Recorrido
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Del río al mar
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-gray-300">
            Un circuito único que conecta Viedma con el Balneario El Cóndor,
            combinando natación, ciclismo y pedestrismo en un entorno natural
            incomparable.
          </p>
        </div>

        {/* Línea del recorrido */}
        <div className="relative mt-20">

          {/* Línea central */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-cyan-400/30 md:left-1/2 md:block" />

          <div className="space-y-12">

            {/* Natación */}
            <RouteStep
              icon={<Waves size={26} />}
              number="01"
              title="Natación"
              description="La competencia comienza en Viedma, sobre las aguas del Río Negro."
              side="left"
            />

            {/* Ciclismo */}
            <RouteStep
              icon={<Bike size={26} />}
              number="02"
              title="Ciclismo"
              description="Desde Viedma comienza el recorrido por la Ruta Provincial Nº 1 hacia el Balneario El Cóndor."
              side="right"
            />

            {/* Pedestrismo */}
            <RouteStep
              icon={<Footprints size={26} />}
              number="03"
              title="Pedestrismo"
              description="El último tramo se desarrolla en el entorno costero, con llegada cerca del Faro de Río Negro."
              side="left"
            />

          </div>
        </div>

        {/* Próximamente mapa */}
        <div className="mt-20 rounded-3xl border border-dashed border-cyan-400/30 bg-slate-950/50 p-10 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Próximamente
          </p>

          <h3 className="mt-4 text-2xl font-bold">
            Mapa interactivo del recorrido
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            En la próxima etapa incorporaremos el mapa oficial con
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
  description: string;
  side: "left" | "right";
};

function RouteStep({
  icon,
  number,
  title,
  description,
  side,
}: RouteStepProps) {
  return (
    <div
      className={`relative grid gap-6 md:grid-cols-2 md:gap-16 ${
        side === "right" ? "md:text-right" : ""
      }`}
    >

      <div className={side === "right" ? "md:order-2" : ""}>
        <div
          className={`flex items-center gap-4 ${
            side === "right" ? "md:justify-end" : ""
          }`}
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
            {icon}
          </div>

          <span className="text-sm font-bold tracking-[0.25em] text-cyan-400">
            {number}
          </span>
        </div>

        <h3 className="mt-5 text-3xl font-bold">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-gray-400">
          {description}
        </p>
      </div>

      <div
        className={`hidden md:block ${
          side === "right" ? "md:order-1" : ""
        }`}
      />

    </div>
  );
}