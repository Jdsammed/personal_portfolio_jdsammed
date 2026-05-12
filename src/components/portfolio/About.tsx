import { GraduationCap, Code2, Globe } from "lucide-react";
import profile from "@/assets/profile.jpeg";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const cards = [
  { Icon: GraduationCap, title: "BCA Graduate", desc: "Computer Applications" },
  { Icon: Code2, title: "Full Stack Dev", desc: "Frontend + Backend" },
  { Icon: Globe, title: "Open to Freelance", desc: "Worldwide remote" },
];

export function About() {
  return (
    <section id="about" className="py-28">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow="About me" title="Code, design & a love for the web" />

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-3 bg-gradient-primary rounded-3xl blur-2xl opacity-50" />
              <div className="relative rounded-3xl overflow-hidden border border-glass-border shadow-elegant">
                <img
                  src={profile}
                  alt="Portrait"
                  width={768}
                  height={896}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a passionate <span className="text-foreground font-medium">BCA graduate</span> who
                loves crafting pixel-perfect UIs and building full-stack web applications.
                I specialize in creating high-converting landing pages, portfolios, and web apps
                for businesses and freelancers.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I believe great design + clean code ={" "}
                <span className="text-gradient font-semibold">digital magic</span>.
              </p>
            </Reveal>

            <Stagger className="grid sm:grid-cols-3 gap-4 pt-4">
              {cards.map(({ Icon, title, desc }) => (
                <StaggerItem key={title}>
                  <div className="glass rounded-2xl p-5 h-full hover:border-primary/40 hover:-translate-y-1 transition-all">
                    <div className="h-10 w-10 rounded-xl bg-gradient-primary/20 grid place-items-center mb-3">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div className="font-semibold">{title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{desc}</div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
