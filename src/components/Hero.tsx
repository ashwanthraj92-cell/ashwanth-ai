import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Gradient orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">

          {/* LEFT SIDE CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl md:max-w-xl"
          >

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary/50 text-xs text-muted-foreground mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Currently building at GE Vernova
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              <span className="text-foreground">Ashwanth</span>{" "}
              <span className="text-gradient">B Raj</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl">
              Product Manager · Digital Transformation · EHS, ESG & GRC Specialist
            </p>

            <p className="text-base md:text-lg text-muted-foreground/80 mb-10 max-w-xl leading-relaxed">
              Building scalable enterprise products that connect business, technology, and impact.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                View My Work
                <ArrowDown size={16} />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
              >
                Download Resume
                <Download size={16} />
              </a>
            </div>

            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-10 mt-16 pt-8 border-t border-border"
            >
              {[
                { value: "9+", label: "Years Experience" },
                { value: "250+", label: "Requirements Managed" },
                { value: "65+", label: "Process Improvements" },
              ].map((m) => (
                <div key={m.label}>
                  <div className="text-3xl font-bold text-primary">{m.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{m.label}</div>
                </div>
              ))}
            </motion.div>

          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <div className="mt-10 md:mt-0">
           <img
  src="/profile.png"
  alt="Ashwanth Raj"
  className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover border-4 border-cyan-400 shadow-xl hover:scale-105 transition duration-300"
  style={{ objectPosition: "55% 60%" }}
/>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
