import { Calendar, Flag, MapPin, Trophy } from "lucide-react";

export default function Stats() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-4">

        <StatCard
          icon={<Calendar size={32} />}
          value="07"
          label="Febrero 2027"
        />

        <StatCard
          icon={<Flag size={32} />}
          value="2"
          label="Distancias"
        />

        <StatCard
          icon={<Trophy size={32} />}
          value="100"
          label="Km de recorrido"
        />

        <StatCard
          icon={<MapPin size={32} />}
          value="Viedma"
          label="→ El Cóndor"
        />

      </div>
    </section>
  );
}

type StatCardProps = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10">

      <div className="mb-4 flex justify-center text-cyan-400 transition duration-300 group-hover:scale-110">
        {icon}
      </div>

      <div className="text-4xl font-black text-white">
        {value}
      </div>

      <p className="mt-2 text-sm uppercase tracking-wider text-gray-400">
        {label}
      </p>

    </div>
  );
}