import Image from "next/image";

const images = [
  {
    src: "/images/gallery/viedma.jpg",
    alt: "Viedma y el Río Negro",
  },
  {
    src: "/images/gallery/puente.jpg",
    alt: "Puente sobre el Río Negro",
  },
  {
    src: "/images/gallery/faro.jpg",
    alt: "Faro de Río Negro",
  },
  {
    src: "/images/gallery/carrera.jpg",
    alt: "Competencia deportiva",
  },
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Encabezado */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Galería
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Viví la experiencia
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Conocé algunos de los paisajes que forman parte del desafío
            TRIA DE LA COSTA.
          </p>
        </div>

        {/* Galería */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">

          {images.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-3xl ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative w-full ${
                  index === 0 ? "h-full min-h-[500px]" : "h-64"
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
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Degradado */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-90" />

                {/* Texto */}
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-lg font-bold text-white">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}