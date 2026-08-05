"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2027-02-07T08:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (distance / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (distance / 1000) % 60
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
          Próxima edición
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          07 Febrero 2027
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">

          <div className="rounded-2xl bg-slate-800 p-6">
            <span className="text-4xl font-bold">
              {timeLeft.days}
            </span>
            <p className="text-gray-400">Días</p>
          </div>

          <div className="rounded-2xl bg-slate-800 p-6">
            <span className="text-4xl font-bold">
              {timeLeft.hours}
            </span>
            <p className="text-gray-400">Horas</p>
          </div>

          <div className="rounded-2xl bg-slate-800 p-6">
            <span className="text-4xl font-bold">
              {timeLeft.minutes}
            </span>
            <p className="text-gray-400">Minutos</p>
          </div>

          <div className="rounded-2xl bg-slate-800 p-6">
            <span className="text-4xl font-bold">
              {timeLeft.seconds}
            </span>
            <p className="text-gray-400">Segundos</p>
          </div>

        </div>

      </div>
    </section>
  );
}