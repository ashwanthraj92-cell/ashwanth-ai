import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "GE Vernova",
    role: "Product Leader",
    period: "Present",
    points: [
      "Leading Master Tracking Application (MTA) across sourcing, manufacturing, QA & EHS",
      "Own end-to-end product lifecycle: roadmap, backlog, stakeholder alignment, adoption",
      "Driving enterprise-wide impact through scalable product strategies",
    ],
  },
  {
    company: "EY",
    role: "Associate Manager",
    period: "Previous",
    points: [
      "Led SaaS platform evaluations and enterprise implementations",
      "Delivered ERM module rollout — 70% efficiency improvement",
      "Managed 250+ requirements and platform strategy across stakeholders",
    ],
  },
  {
    company: "Wipro",
    role: "Domain Consultant",
    period: "Previous",
    points: [
      "Agile delivery, backlog management, UAT, and dashboard creation",
      "Improved incident resolution efficiency by 25%",
      "Built Power BI dashboards for ERP metrics and operational insights",
    ],
  },
  {
    company: "HSE Consulting",
    role: "HSE Consultant",
    period: "Earlier",
    points: [
      "Field and consulting experience in infrastructure projects",
      "Inspections, safety system design, and compliance frameworks",
      "Training workshops and cross-functional safety coordination",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
            Career journey
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                className="relative pl-14 md:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full border-2 border-primary bg-background" />

                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Briefcase size={16} className="text-primary" />
                    <span className="font-semibold text-foreground">{exp.company}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-primary mb-3">{exp.role}</p>
                  <ul className="space-y-2">
                    {exp.points.map((p, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">·</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
