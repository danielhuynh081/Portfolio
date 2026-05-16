import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "React/Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Docker",
    "FastAPI",
    "PostgreSQL",
    "Firebase",
    "GCP",
    "AWS",
  ];

  return (
    <section id="about" className="py-32 bg-surface border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
              About
            </h2>
            <h3 className="text-4xl font-bold text-primary tracking-tight">
              Focus on the essential.
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-8"
          >
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              I'm a software engineer who combines technical complexity with
              minimalist design to create experiences that feel intuitive,
              performant, and modern.
            </p>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed">
              Currently based in Vancouver, Washington, I graduated from
              Portland State University in December 2025 with a focus on
              software engineering, backend systems, and modern web
              applications.
            </p>

            <div className="pt-12 border-t border-border">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                Technical Stack
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="flex items-center text-primary font-medium"
                  >
                    <span className="w-2 h-2 bg-accent mr-3"></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
