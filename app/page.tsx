import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";

export default function Home() {
  return (
<main className="bg-slate-950 text-white">
  <Navbar />
  <Hero />
  <About />
</main>
  );
}