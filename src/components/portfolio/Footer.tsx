import { Github, Mail, Heart } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-glass-border mt-10">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-6 items-center">
        <div className="font-display text-xl font-bold">
          <span className="text-gradient">JD</span>
          <span className="text-foreground">.</span>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.id}>
              <button onClick={() => go(l.id)} className="hover:text-primary transition-colors">
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex md:justify-end justify-center gap-3">
          {[
            { Icon: Github, href: "https://github.com" },
            { Icon: Mail, href: "mailto:jdthefreelancer1816@gmail.com" },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="glass h-10 w-10 grid place-items-center rounded-xl text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-glass-border">
        <div className="container mx-auto px-6 py-5 flex flex-wrap justify-between gap-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            Designed & Built with <Heart size={12} className="fill-secondary text-secondary" /> by Sammed Duradundi
          </span>
          <span>© 2025 Sammed Duradundi. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
