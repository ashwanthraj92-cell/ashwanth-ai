import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const articles = [
  {
    title: "Future of Supply Chain – 4 Key Trends",
    desc: "Exploring how AI, IoT, blockchain, and sustainability are reshaping global supply chains.",
    link: "#",
  },
  {
    title: "Work From Home – Is It Really Working?",
    desc: "A product leader's perspective on remote productivity, collaboration, and the future of work.",
    link: "#",
  },
];

const ThoughtLeadership = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-3">Writing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
            Thought leadership
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((a, i) => (
            <motion.a
              key={a.title}
              href={a.link}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all block"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {a.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{a.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm text-primary">
                Read <ExternalLink size={14} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThoughtLeadership;
