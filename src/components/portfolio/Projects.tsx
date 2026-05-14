import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Cat = "All" | "Frontend" | "Full Stack" | "Freelance";

const projects: {
  title: string;
  desc: string;
  cat: Exclude<Cat, "All">[];
  gradient: string;
  emoji: string;
  github?: string;
  demo?: string;
}[] = [
  {
    title: "Personal Portfolio Website",
    desc: "Animated, responsive portfolio with custom design system.",
    cat: ["Frontend"],
    gradient: "from-cyan-500/30 to-purple-500/30",
    emoji: "💼",
    github: "https://github.com/Jdsammed/personal_portfolio_jdsammed.git",
    demo: "https://personal-portfolio-jdsammed.jdsammed108.workers.dev/",
  },
  {
    title: "Startup Landing Page",
    desc: "High-converting responsive landing for a SaaS startup.",
    cat: ["Frontend", "Freelance"],
    gradient: "from-purple-500/30 to-pink-500/30",
    emoji: "🚀",
    github: "https://github.com/Jdsammed/ai-luxe-pulse.git",
    demo: "https://ai-luxe-pulse-landing-page.jdsammed108.workers.dev/",
  },
  {
    title: "Restaurant Website",
    desc: "Modern restaurant website with menu, animations, and clean UI.",
    cat: ["Frontend"],
    gradient: "from-pink-500/30 to-purple-500/30",
    emoji: "🍽️",
    github: "https://github.com/Jdsammed/resturant-website.git",
    demo: "https://resturant-website.jdsammed108.workers.dev/",
  },
];

const tabs: Cat[] = ["All", "Frontend", "Full Stack", "Freelance"];

export function Projects() {
  const [tab, setTab] = useState<Cat>("All");
  const filtered = tab === "All" ? projects : projects.filter((p) => p.cat.includes(tab as Exclude<Cat, "All">));

  return (
    <section id="projects" className="py-28">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Projects"
          title="Things I've Built"
          subtitle="A selection of recent personal and client work."
        />

        <div className="flex justify-center mb-10">
          <div className="glass rounded-full p-1.5 inline-flex flex-wrap gap-1">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  tab === t ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab === t && (
                  <motion.span
                    layoutId="tab-bg"
                    className="absolute inset-0 bg-gradient-primary rounded-full shadow-glow"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{t}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35 }}
                className="group glass rounded-2xl overflow-hidden hover:border-primary/40 transition-all"
              >
                <div className={`relative h-44 bg-gradient-to-br ${p.gradient} grid place-items-center text-6xl overflow-hidden`}>
                  <div className="absolute inset-0 bg-mesh opacity-50" />
                  <span className="relative drop-shadow-[0_0_20px_rgba(0,212,255,0.4)]">{p.emoji}</span>
                  <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center gap-3">
                    <div className="flex gap-3">
                      <a href={p.demo ?? "#"} target="_blank" rel="noreferrer" className="glass-strong px-4 py-2 rounded-xl text-sm flex items-center gap-2 hover:text-primary">
                        <ExternalLink size={14} /> Live Demo
                      </a>
                      <a href={p.github ?? "#"} target="_blank" rel="noreferrer" className="glass-strong px-4 py-2 rounded-xl text-sm flex items-center gap-2 hover:text-primary">
                        <Github size={14} /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-1.5">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
