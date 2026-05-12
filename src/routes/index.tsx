import { createFileRoute } from "@tanstack/react-router";
import { MeshBackground } from "@/components/portfolio/MeshBackground";
import { CursorDot } from "@/components/portfolio/CursorDot";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your Name — Full Stack Developer & Freelancer" },
      {
        name: "description",
        content:
          "BCA graduate and full stack developer crafting beautiful, fast, and scalable web experiences. Available for freelance projects.",
      },
      { property: "og:title", content: "Your Name — Full Stack Developer & Freelancer" },
      {
        property: "og:description",
        content: "Premium portfolio websites, landing pages, and frontend development.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <MeshBackground />
      <CursorDot />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
