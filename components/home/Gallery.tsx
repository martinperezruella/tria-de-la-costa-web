import Image from "next/image";

const images = [
  {
    src: "/images/gallery/viedma.jpg",
    title: "Viedma",
    subtitle: "Largada · Río Negro",
    alt: "Viedma y el Río Negro",
  },
  {
    src: "/images/gallery/puente.jpg",
    title: "Puente sobre el Río Negro",
    subtitle: "Conexión Viedma · El Cóndor",
    alt: "Puente sobre el Río Negro",
  },
  {
    src: "/images/gallery/faro.jpg",
    title: "Faro de Río Negro",
    subtitle: "El entorno costero",
    alt: "Faro de Río Negro",
  },
  {
    src: "/images/gallery/carrera.jpg",
    title: "TRIA DE LA COSTA",
    subtitle: "El desafío comienza",
    alt: "Competencia deportiva",
  },
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="relative overflow-hidden bg-slate-950 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Encabezado */}
        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Galería
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Viví la experiencia
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            Conocé algunos de los paisajes y lugares que forman parte
            del desafío TRIA DE LA COSTA.
          </p>

        </div>

        {/* Galería */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">

          {images.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >

              {/* Imagen */}
              <div
                className={`relative w-full ${
                  index === 0
                    ? "h-[420px] md:h-full md:min-h-[650px]"
                    : "h-72"
                }`}
              >

                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 100vw, 50vw"
                  }
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                {/* Degradado */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />

                {/* Brillo */}
                <div className="absolute inset-0 bg-cyan-400/0 transition duration-500 group-hover:bg-cyan-400/5" />

                {/* Contenido */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">

                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                    {image.subtitle}
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-white md:text-3xl">
                    {image.title}
                  </h3>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Texto inferior */}
        <div className="mt-12 text-center">

          <p className="mx-auto max-w-2xl text-gray-400">
            Un recorrido que comienza en Viedma, atraviesa el Río Negro
            y la Ruta Provincial Nº 1, y termina junto al mar en El Cóndor.
          </p>

        </div>

      </div>
    </section>
  );
}