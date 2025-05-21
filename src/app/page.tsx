import Hero from "@/app/components/hero";
import About from "@/app/components/about";
import Proyects from "./components/proyects";
import Testimonials from "@/app/components/testimonials";
import Experience from "@/app/components/experience";
import Contact from "@/app/components/contact";
import DogFacts from "@/app/components/dog-facts";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Proyects />
      <Testimonials />
      <Experience />
      <DogFacts />
      <Contact />
    </main>
  );
}
