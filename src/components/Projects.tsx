import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, X } from "lucide-react";

const projects = [
  {
    title: "Master Tracking Application (MTA)",
    tag: "GE Vernova",
    problem: "Disconnected enterprise workflows across sourcing, manufacturing, QA, and EHS created data silos and decision-making delays.",
    approach: "Built a unified SaaS platform with integrated tracking across all streams, aligning cross-functional stakeholders on a single roadmap.",
    solution: "Centralized product platform with modular architecture serving sourcing, quality assurance, EHS compliance, and manufacturing tracking.",
    impact: "Improved adoption rates, data reliability, and speed of decision-making across the enterprise.",
  },
  {
    title: "Enablon ERM Implementation",
    tag: "EY",
    problem: "Manual, inefficient enterprise risk assessment processes consuming excessive time and resources.",
    approach: "Evaluated and implemented Enablon's ERM module, digitizing workflows with automated risk scoring and reporting.",
    solution: "Fully digitized ERM workflows with automated assessments, dashboards, and compliance tracking.",
    impact: "70% reduction in assessment time with improved accuracy and audit readiness.",
  },
  {
    title: "Power BI Dashboard for ERP Metrics",
    tag: "Wipro",
    problem: "Lack of visibility into ERP performance metrics, hindering leadership decision-making.",
    approach: "Integrated 30+ KPIs from multiple ERP modules into a unified Power BI dashboard with real-time data refresh.",
    solution: "Interactive dashboard suite with drill-down capabilities, trend analysis, and automated alerting.",
    impact: "Enabled data-driven leadership decisions and reduced manual reporting effort by 60%.",
  },
  {
    title: "Digital Transformation – MENA",
    tag: "Consulting",
    problem: "Complex regulatory environments requiring modern compliance and ESG frameworks across MENA region projects.",
    approach: "Designed smart compliance frameworks integrating EHS and ESG requirements with digital tooling.",
    solution: "Comprehensive ESG + EHS system design with automated compliance tracking and reporting.",
    impact: "Streamlined compliance across multiple jurisdictions with scalable digital frameworks.",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
            Case studies & impact
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              onClick={() => setSelected(i)}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all cursor-pointer hover:glow-sm"
            >
              <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{p.tag}</span>
              <h3 className="text-lg font-semibold text-foreground mt-3 mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{p.problem}</p>
              <span className="inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                View Details <ArrowRight size={14} />
              </span>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {projects[selected].tag}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mt-3">{projects[selected].title}</h3>
                </div>
                <button onClick={() => setSelected(null)} className="text-muted-foreground hover:text-foreground">
                  <X size={20} />
                </button>
              </div>

              {[
                { label: "Problem", text: projects[selected].problem },
                { label: "Approach", text: projects[selected].approach },
                { label: "Solution", text: projects[selected].solution },
                { label: "Impact", text: projects[selected].impact },
              ].map((s) => (
                <div key={s.label} className="mb-5">
                  <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">{s.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
