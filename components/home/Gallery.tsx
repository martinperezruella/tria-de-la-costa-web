import Image from "next/image";

export default function Gallery() {
  const images = [
    "/images/gallery/viedma.jpg",
    "/images/gallery/puente.jpg",
    "/images/gallery/faro.jpg",
    "/images/gallery/carrera.jpg",
  ];

  return (
    <section
      id="galeria"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            Galería
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Viví la experiencia
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {images.map((image) => (
            <div
              key={image}
              className="overflow-hidden rounded-2xl"
            >
              <Image
                src={image}
                alt="TRIA DE LA COSTA"
                width={500}
                height={500}
                className="h-72 w-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}