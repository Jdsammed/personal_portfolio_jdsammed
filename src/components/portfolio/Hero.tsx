import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Mail, Sparkles } from "lucide-react";

const ROLES = ["Full Stack Developer", "Frontend Specialist", "Freelancer", "UI/UX Enthusiast"];

function useTypewriter() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[idx];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIdx((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return text;
}

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export function Hero() {
  const text = useTypewriter();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-7"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs">
            <Sparkles size={14} className="text-primary" />
            <span className="text-muted-foreground">Available for new freelance projects</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="text-gradient">Sammed Duradundi</span>
          </h1>

          <div className="text-2xl sm:text-3xl font-display font-medium h-10">
            <span className="text-muted-foreground">I'm a </span>
            <span className="text-foreground">{text}</span>
            <span className="cursor-blink text-primary">|</span>
          </div>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            BCA Graduate · Building beautiful, fast, and scalable web experiences
            for founders, freelancers, and growing brands.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => go("projects")}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              View My Work
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => go("contact")}
              className="rounded-xl border border-glass-border glass px-6 py-3.5 font-semibold text-foreground hover:bg-primary/10 hover:border-primary/40 transition-all"
            >
              Hire Me
            </button>
          </div>

          <div className="flex items-center gap-4 pt-4">
            {[
              { Icon: Github, href: "https://github.com", label: "GitHub" },
              { Icon: Mail, href: "mailto:jdthefreelancer1816@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="glass h-11 w-11 grid place-items-center rounded-xl text-muted-foreground hover:text-primary hover:border-primary/40 transition-all hover:-translate-y-0.5"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative animate-float-soft"
        >
          <div className="glass-strong rounded-2xl shadow-elegant overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-glass-border">
              <span className="h-3 w-3 rounded-full bg-destructive/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-xs text-muted-foreground font-mono">~/portfolio.tsx</span>
            </div>
            <pre className="p-6 text-sm font-mono leading-relaxed overflow-x-auto">
{`const developer = {
  name: "Sammed Duradundi",
  role: "Full Stack Dev",
  stack: ["React", "Python", "AWS"],
  passion: "Pixel-perfect UIs ✨",
  available: true,
  build: () => "digital magic"
};

export default developer;`
                .split("\n")
                .map((line, i) => (
                  <div key={i} className="flex">
                    <span className="select-none w-8 text-muted-foreground/40">{i + 1}</span>
                    <code className="text-foreground/90">{colorize(line)}</code>
                  </div>
                ))}
            </pre>
          </div>
          <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl -z-10 rounded-3xl" />
        </motion.div>
      </div>
    </section>
  );
}

function colorize(line: string) {
  // very lightweight syntax highlight
  const tokens = line.split(/(".*?"|\b(?:const|export|default|true|false)\b|=>)/g);
  return tokens.map((t, i) => {
    if (/^".*"$/.test(t)) return <span key={i} className="text-primary">{t}</span>;
    if (/^(const|export|default)$/.test(t)) return <span key={i} className="text-secondary">{t}</span>;
    if (/^(true|false)$/.test(t)) return <span key={i} className="text-secondary">{t}</span>;
    if (t === "=>") return <span key={i} className="text-primary">{t}</span>;
    return <span key={i}>{t}</span>;
  });
}
