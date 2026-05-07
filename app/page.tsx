import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Background from "@/components/Background";
import CursorTracker from "@/components/CursorTracker";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <CursorTracker />
      <Background />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}