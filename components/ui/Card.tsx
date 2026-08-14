import type { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function Card(props: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-slate-800 p-8 shadow-lg ${props.className ?? ""}`}
    >
      <h3 className="mb-6 text-2xl font-bold">{props.title}</h3>
      {props.children}
    </div>
  );
}