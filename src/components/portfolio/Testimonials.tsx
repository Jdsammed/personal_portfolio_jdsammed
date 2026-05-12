import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    quote:
      "Delivered our landing page in record time and it converts like crazy. Easy to work with and clearly cares about quality.",
    name: "Aarav Mehta",
    role: "Founder, NorthLabs",
  },
  {
    quote:
      "Pixel-perfect translation of our Figma file. The animations and polish made our brand feel ten times more premium.",
    name: "Sara Kapoor",
    role: "Design Lead, Hueform",
  },
  {
    quote:
      "Reliable, fast, and a great communicator. Helped us ship a portfolio site that finally feels like us.",
    name: "Daniel Rivera",
    role: "Independent Consultant",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-28">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow="Testimonials" title="What Clients Say" />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-3xl" />
          <div className="relative glass-strong rounded-3xl p-10 sm:p-14 min-h-[18rem] flex flex-col justify-between">
            <Quote size={40} className="text-primary/60" />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="my-6 text-xl sm:text-2xl font-display leading-snug"
              >
                "{items[i].quote}"
              </motion.blockquote>
            </AnimatePresence>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-semibold">{items[i].name}</div>
                <div className="text-sm text-muted-foreground">{items[i].role}</div>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} className="fill-primary text-primary" />
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {items.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Testimonial ${k + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  k === i ? "w-8 bg-gradient-primary" : "w-3 bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
