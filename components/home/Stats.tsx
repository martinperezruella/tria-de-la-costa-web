import { Calendar, Flag, MapPin, Trophy } from "lucide-react";

export default function Stats() {
  return (
    <section className="bg-slate-900 py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-4">

        <Card
          icon={<Calendar size={36} />}
          value="07"
          label="Febrero 2027"
        />

        <Card
          icon={<Flag size={36} />}
          value="2"
          label="Distancias"
        />

        <Card
          icon={<Trophy size={36} />}
          value="100"
          label="Km Recorrido Principal"
        />

        <Card
          icon={<MapPin size={36} />}
          value="Viedma"
          label="→ El Cóndor"
        />

      </div>
    </section>
  );
}

type CardProps = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

function Card({ icon, value, label }: CardProps) {
  return (
    <div className="rounded-2xl bg-slate-800 p-8 text-center">
      <div className="mb-4 flex justify-center text-cyan-400">
        {icon}
      </div>

      <div className="text-4xl font-bold text-cyan-400">
        {value}
      </div>

      <p className="mt-2 text-gray-300">
        {label}
      </p>
    </div>
  );
}