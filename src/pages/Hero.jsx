const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block">
            Based in Vancouver, Washington
          </span>
          <h1 className="text-6xl md:text-7xl font-bold text-primary mb-8 tracking-tighter leading-tight">
            Backend Developer <br />
            <span className="text-slate-400">& Software Engineer.</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
