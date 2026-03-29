import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { label: "Product + Consulting", desc: "Hybrid profile spanning strategy and execution" },
    { label: "Global Exposure", desc: "MENA, India, North America" },
    { label: "Domain Expertise", desc: "EHS, ESG, GRC, Quality, Supply Chain" },
    { label: "Tech-Enabled", desc: "SaaS platforms, ERP, Power BI, Data Analytics" },
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-3">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            From engineering roots to product leadership
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                My journey started in Mechanical Engineering, evolved through HSE consulting on large-scale infrastructure projects, and transformed through digital transformation initiatives across MENA and India.
              </p>
              <p>
                Today, I lead enterprise product development at GE Vernova — owning the Master Tracking Application (MTA) across sourcing, manufacturing, QA, and EHS streams. I bring a unique blend of domain depth and product thinking that bridges business outcomes with technology.
              </p>
              <p>
                With 9+ years spanning consulting, SaaS implementation, and product management, I thrive at the intersection of complex enterprise problems and elegant digital solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="text-sm font-semibold text-foreground mb-1">{h.label}</div>
                  <div className="text-xs text-muted-foreground">{h.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
