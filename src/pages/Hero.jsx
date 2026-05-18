import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-6md:col-span-4"
      >
        <div className="max-w-4xl">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block">
            Based in Vancouver, Washington
          </span>
          <h1 className="text-6xl md:text-7xl font-bold text-primary mb-8 tracking-tighter leading-tight">
            Backend Developer <br />
            <span className="text-slate-400">& Software Engineer.</span>
          </h1>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
