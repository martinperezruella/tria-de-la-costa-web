import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Distances from "@/components/home/Distances";
import Route from "@/components/home/Route";
import Gallery from "@/components/home/Gallery";
import Countdown from "@/components/home/Countdown";

export default function Home() {
  return (
<main className="bg-slate-950 text-white">
  <Navbar />
  <Hero />
  <Countdown />
  <About />
  <Distances />
  <Route />
  <Gallery />
</main>
  );
}