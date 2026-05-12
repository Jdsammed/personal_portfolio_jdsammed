import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Check, Send } from "lucide-react";
import { z } from "zod";
import { SectionHeader } from "./SectionHeader";

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Required").max(150),
  message: z.string().trim().min(1, "Required").max(2000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});

    const mailtoLink = `mailto:jdthefreelancer1816@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailtoLink;

    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 2800);
  };

  const field = (name: keyof typeof form, label: string, type = "text", textarea = false) => (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
      {textarea ? (
        <textarea
          rows={5}
          value={form[name]}
          onChange={(e) => setForm({ ...form, [name]: e.target.value })}
          className="w-full glass rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
        />
      ) : (
        <input
          type={type}
          value={form[name]}
          onChange={(e) => setForm({ ...form, [name]: e.target.value })}
          className="w-full glass rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all"
        />
      )}
      {errors[name] && <p className="text-xs text-destructive mt-1">{errors[name]}</p>}
    </div>
  );

  return (
    <section id="contact" className="py-28">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Work Together"
          subtitle="Got a project in mind? I'd love to hear about it."
        />

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-5">
            <div className="glass rounded-2xl p-6">
              <div className="inline-flex items-center gap-2 text-xs glass rounded-full px-3 py-1.5 mb-5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Freelance
              </div>
              <h3 className="font-display text-2xl font-semibold mb-2">Reach out directly</h3>
              <p className="text-sm text-muted-foreground mb-6">
                I usually reply within a few hours.
              </p>

              {[
                { Icon: Mail, label: "Email", value: "jdthefreelancer1816@gmail.com" },
                { Icon: MapPin, label: "Location", value: "India · Remote worldwide" },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 py-3 border-t border-glass-border">
                  <div className="h-10 w-10 rounded-xl bg-gradient-primary/20 grid place-items-center">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{label}</div>
                    <div className="text-sm font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 glass rounded-2xl p-7 space-y-5 relative overflow-hidden">
            <div className="grid sm:grid-cols-2 gap-5">
              {field("name", "Name")}
              {field("email", "Email", "email")}
            </div>
            {field("subject", "Subject")}
            {field("message", "Message", "text", true)}

            <button
              type="submit"
              disabled={sent}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform disabled:opacity-70"
            >
              <Send size={16} />
              Send Message
            </button>

            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute inset-0 grid place-items-center bg-background/80 backdrop-blur-md"
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                      className="mx-auto h-16 w-16 rounded-full bg-gradient-primary grid place-items-center shadow-glow mb-4"
                    >
                      <Check size={28} className="text-primary-foreground" />
                    </motion.div>
                    <h4 className="font-display text-xl font-semibold mb-1">Message sent!</h4>
                    <p className="text-sm text-muted-foreground">I'll be in touch shortly.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
}
