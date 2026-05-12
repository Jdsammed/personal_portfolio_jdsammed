import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map((l) => document.getElementById(l.id));
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.offsetTop <= y) {
          setActive(links[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
            scrolled ? "glass-strong shadow-elegant" : "glass"
          }`}
        >
          <button onClick={() => go("home")} className="flex items-center gap-2">
            <span className="font-display text-xl font-bold tracking-tight">
              <span className="text-gradient">YN</span>
              <span className="text-foreground">.</span>
            </span>
          </button>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className={`relative px-4 py-2 text-sm transition-colors ${
                    active === l.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {active === l.id && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-gradient-primary" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <button
              onClick={() => go("contact")}
              className="rounded-xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Hire Me
            </button>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 animate-in fade-in slide-in-from-top-2">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm ${
                      active === l.id ? "bg-primary/10 text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => go("contact")}
                  className="mt-2 w-full rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
