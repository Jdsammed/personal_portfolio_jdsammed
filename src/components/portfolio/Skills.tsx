import { Code, Server, Wrench, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Stagger, StaggerItem } from "./Reveal";

const groups = [
  {
    Icon: Code,
    title: "Frontend",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3 / Tailwind", level: 92 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "Responsive Design", level: 94 },
    ],
  },
  {
    Icon: Server,
    title: "Backend & Cloud",
    skills: [
      { name: "Python", level: 80 },
      { name: "REST APIs", level: 78 },
      { name: "AWS Basics", level: 65 },
    ],
  },
  {
    Icon: Wrench,
    title: "Tools & Design",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "VS Code", level: 95 },

    ],
  },
  {
    Icon: Briefcase,
    title: "Freelance Services",
    skills: [
      { name: "Portfolio Design", level: 92 },
      { name: "Landing Pages", level: 90 },
      { name: "Frontend Dev", level: 88 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Skills"
          title="What I Bring to the Table"
          subtitle="A modern stack chosen for speed, scale, and beautiful interfaces."
        />

        <Stagger className="grid md:grid-cols-2 gap-6">
          {groups.map(({ Icon, title, skills }) => (
            <StaggerItem key={title}>
              <div className="glass rounded-2xl p-7 h-full hover:border-primary/30 transition-all group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-11 w-11 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
                    <Icon size={20} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                </div>

                <div className="space-y-4">
                  {skills.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-foreground">{s.name}</span>
                        <span className="text-muted-foreground">{s.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
