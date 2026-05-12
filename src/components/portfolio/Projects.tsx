import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Cat = "All" | "Frontend" | "Full Stack" | "Freelance";

const projects: {
  title: string;
  desc: string;
  tags: string[];
  cat: Exclude<Cat, "All">[];
  gradient: string;
  emoji: string;
}[] = [
  {
    title: "Personal Portfolio Website",
    desc: "Animated, responsive portfolio with custom design system.",
    tags: ["HTML", "CSS", "JS"],
    cat: ["Frontend"],
    gradient: "from-cyan-500/30 to-purple-500/30",
    emoji: "💼",
  },
  {
    title: "Startup Landing Page",
    desc: "High-converting responsive landing for a SaaS startup.",
    tags: ["HTML", "CSS"],
    cat: ["Frontend", "Freelance"],
    gradient: "from-purple-500/30 to-pink-500/30",
    emoji: "🚀",
  },
  {
    title: "Python To-Do App",
    desc: "Task manager with web UI, persistence, and clean API.",
    tags: ["Python", "Flask", "JS"],
    cat: ["Full Stack"],
    gradient: "from-emerald-500/30 to-cyan-500/30",
    emoji: "✅",
  },
  {
    title: "Business Portfolio",
    desc: "Custom freelance build for a service business client.",
    tags: ["React", "Tailwind"],
    cat: ["Freelance", "Frontend"],
    gradient: "from-orange-500/30 to-purple-500/30",
    emoji: "🏢",
  },
  {
    title: "AWS Static Deployment",
    desc: "S3 + CloudFront pipeline for blazing-fast static sites.",
    tags: ["AWS", "S3", "CloudFront"],
    cat: ["Full Stack"],
    gradient: "from-yellow-500/30 to-cyan-500/30",
    emoji: "☁️",
  },
  {
    title: "E-commerce Concept",
    desc: "Modern shop UI with cart, filters, and animations.",
    tags: ["React", "Tailwind"],
    cat: ["Frontend"],
    gradient: "from-pink-500/30 to-purple-500/30",
    emoji: "🛍️",
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
                      <a href="#" className="glass-strong px-4 py-2 rounded-xl text-sm flex items-center gap-2 hover:text-primary">
                        <ExternalLink size={14} /> Live Demo
                      </a>
                      <a href="#" className="glass-strong px-4 py-2 rounded-xl text-sm flex items-center gap-2 hover:text-primary">
                        <Github size={14} /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-1.5">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md glass text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
