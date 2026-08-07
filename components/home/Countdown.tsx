"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2027-02-07T08:00:00");

  const calculateTime = () => {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [mounted, setMounted] = useState(false);
const [time, setTime] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

useEffect(() => {
  setMounted(true);
  setTime(calculateTime());

  const timer = setInterval(() => {
    setTime(calculateTime());
  }, 1000);

  return () => clearInterval(timer);
}, []);

  return (
    <section className="bg-cyan-600 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6 text-center">

        <h2 className="text-4xl font-bold">
          Faltan...
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">

          <TimeBox value={time.days} label="Días" />
          <TimeBox value={time.hours} label="Horas" />
          <TimeBox value={time.minutes} label="Minutos" />
          <TimeBox value={time.seconds} label="Segundos" />

        </div>

      </div>
    </section>
  );
}

function TimeBox({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
      <div className="text-5xl font-extrabold">
        {value}
      </div>

      <div className="mt-2 uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}