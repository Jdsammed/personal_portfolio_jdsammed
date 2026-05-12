import { Monitor, Rocket, Palette, Wrench, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Stagger, StaggerItem } from "./Reveal";

const services = [
  { Icon: Monitor, title: "Portfolio Websites", desc: "Personal branding sites that make you stand out." },
  { Icon: Rocket, title: "Landing Pages", desc: "High-converting pages designed to grow your business." },
  { Icon: Palette, title: "Frontend Development", desc: "Pixel-perfect UI from Figma designs or scratch." },
  { Icon: Wrench, title: "Website Maintenance", desc: "Keep your site fast, updated, and bug-free." },
];

export function Services() {
  return (
    <section id="services" className="py-28">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Services"
          title="How I Can Help You"
          subtitle="Premium freelance services tailored for growing brands and creators."
        />

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ Icon, title, desc }) => (
            <StaggerItem key={title}>
              <div className="group relative glass rounded-2xl p-7 h-full overflow-hidden hover:border-primary/40 hover:-translate-y-1 transition-all">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="relative">
                  <div className="h-12 w-12 rounded-2xl glass-strong grid place-items-center mb-5 group-hover:shadow-glow transition-all">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  <div className="mt-5 flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                    Learn more <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
