import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Linkedin, Instagram, Phone } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's build impactful products together.
          </h2>
          <p className="text-muted-foreground mb-10">
            Open to conversations about product leadership, digital transformation, and enterprise SaaS.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:ashwanth.raj92@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Mail size={16} />
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/ashwanthrajgev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors"
            >
              <Instagram size={16} />
              Travel Blog
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Phone size={14} />
              +91 9159311982
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} />
              Bengaluru, India
            </span>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-border">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ashwanth B Raj. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
