import { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export default function Card({
  title,
  children,
  className = "",
}: CardProps) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-slate-800 p-8 shadow-lg ${className}`}>
      <h3 className="mb-6 text-2xl font-bold">{title}</h3>
      {children}
    </div>
  );
}