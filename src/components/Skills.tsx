import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Product",
    skills: ["Roadmapping", "Backlog Management", "Agile / Scrum", "Stakeholder Management"],
  },
  {
    title: "Technology",
    skills: ["SaaS Platforms", "ERP Systems", "Power BI", "Data Analytics"],
  },
  {
    title: "Domain",
    skills: ["EHS", "ESG", "GRC", "Quality & Supply Chain"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
            Core competencies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-5">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-lg bg-secondary text-sm text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
