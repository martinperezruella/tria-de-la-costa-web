export default function EventInfo() {
  const items = [
    {
      icon: "📅",
      title: "Fecha",
      value: "07 Febrero 2027",
    },
    {
      icon: "📍",
      title: "Lugar",
      value: "Viedma → El Cóndor",
    },
    {
      icon: "🏊",
      title: "Distancias",
      value: "T100 y Short",
    },
    {
      icon: "📝",
      title: "Inscripción",
      value: "Online",
    },
  ];

  return (
    <section className="bg-cyan-500 text-slate-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="text-center">
            <div className="text-4xl">{item.icon}</div>

            <h3 className="mt-3 font-bold uppercase">
              {item.title}
            </h3>

            <p className="mt-2 font-medium">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}