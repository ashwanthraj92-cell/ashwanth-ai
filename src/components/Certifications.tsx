import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certs = [
  { name: "Certified Scrum Product Owner (CSPO)", org: "Scrum Alliance" },
  { name: "Lean Six Sigma", org: "Certification Body" },
  { name: "Enablon Certified Professional", org: "Enablon / Wolters Kluwer" },
  { name: "Tableau Desktop Specialist", org: "Tableau" },
  { name: "Smart Cities – Technology Solutions", org: "Coursera" },
];

const Certifications = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-3">Certifications</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
            Credentials & learning
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <Award size={18} className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">{c.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{c.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
