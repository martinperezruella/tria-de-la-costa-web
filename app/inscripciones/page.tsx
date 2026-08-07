export default function Inscripciones() {
  return (
    <main className="min-h-screen bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Inscripciones
          </h1>

          <p className="mt-4 text-gray-400">
            Elegí la distancia en la que querés participar.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {/* T100 */}

          <div className="rounded-3xl border border-cyan-500 bg-slate-900 p-10">

            <h2 className="text-3xl font-bold text-cyan-400">
              T100
            </h2>

            <p className="mt-6">
              🏊 2 km Natación
            </p>

            <p>
              🚴 80 km Ciclismo
            </p>

            <p>
              🏃 18 km Pedestrismo
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeRWjLR4t9nB7o5r24p1YLiOjftZnVO1gYzBLJdRa51maqt7w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-xl bg-cyan-500 px-8 py-4 font-semibold hover:bg-cyan-400"
            >
              Inscribirme
            </a>

          </div>

          {/* SHORT */}

          <div className="rounded-3xl border border-white/10 bg-slate-900 p-10">

            <h2 className="text-3xl font-bold">
              SHORT
            </h2>

            <p className="mt-6">
              🏊 1 km Natación
            </p>

            <p>
              🚴 30 km Ciclismo
            </p>

            <p>
              🏃 5 km Pedestrismo
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSepRfNGEfjyqenrFol1oZNxnNI_jowWqQLAXxhMuy08ILul8w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 hover:bg-gray-200"
            >
              Inscribirme
            </a>

          </div>

        </div>

      </div>
    </main>
  );
}