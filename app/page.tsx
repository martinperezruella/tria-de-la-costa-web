import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Distances from "@/components/home/Distances";
import Route from "@/components/home/Route";
import Gallery from "@/components/home/Gallery";
import Countdown from "@/components/home/Countdown";
import EventInfo from "@/components/home/EventInfo";
import Sponsors from "@/components/home/Sponsors";
import Footer from "@/components/layout/Footer";
import Schedule from "@/components/home/Schedule";
import Stats from "@/components/home/Stats";

export default function Home() {
  return (
<main className="bg-slate-950 text-white">
  <Navbar />
  <Hero />
  <Stats />
  <Countdown />
  <About />
  <Distances />
  <Route />
  <Gallery />
  <Schedule />
  <Sponsors />
  <Footer />
</main>
  );
}