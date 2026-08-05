import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import patioBefore from "../images/patio/patio-before.jpg";
import patioProgress from "../images/patio/patio-progress.jpg";
import patioFinished from "../images/patio/patio-finished.jpg";
import mountain from "../images/waterfall/mountain.jpg";
import waterfall from "../images/waterfall/waterfall.jpg";

const patioImages = [
  {
    src: mountain,
    alt: "Trail I found on a mountain",
    label: "Trail I found on a mountain",
  },
  {
    src: waterfall,
    alt: "I forgot which waterfall this was ",
    label: "Random hike I went on",
  },
  {
    src: patioBefore,
    alt: "Backyard before building the patio",
    label: "Patio Before",
  },
  {
    src: patioProgress,
    alt: "Backyard patio during construction",
    label: "Patio In Progress",
  },
  {
    src: patioFinished,
    alt: "Completed backyard patio",
    label: "Patio Finished",
  },
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(1);

  const changeSlide = (newIndex) => {
    setDirection(newIndex > currentImage ? 1 : -1);
    setCurrentImage(newIndex);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentImage((current) => (current + 1) % patioImages.length);
  };

  const previousSlide = () => {
    setDirection(-1);
    setCurrentImage(
      (current) => (current - 1 + patioImages.length) % patioImages.length
    );
  };

  const variants = {
    enter: (slideDirection) => ({
      x: slideDirection > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (slideDirection) => ({
      x: slideDirection > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.98,
    }),
  };

  return (
    <div className="mt-10">
      <div className="group relative overflow-hidden rounded-2xl border border-border bg-slate-100 shadow-xl">
        <div className="relative aspect-[16/10] md:aspect-[16/9]">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.img
              key={patioImages[currentImage].src}
              src={patioImages[currentImage].src}
              alt={patioImages[currentImage].alt}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 260, damping: 28 },
                opacity: { duration: 0.25 },
                scale: { duration: 0.3 },
              }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 p-5 md:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              My Life
            </p>

            <h5 className="mt-1 text-2xl font-bold text-white">
              {patioImages[currentImage].label}
            </h5>
          </div>

          <button
            type="button"
            onClick={previousSlide}
            aria-label="Show previous patio image"
            className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-2xl text-white backdrop-blur-md transition hover:scale-105 hover:bg-black/50 md:opacity-0 md:group-hover:opacity-100"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Show next patio image"
            className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-2xl text-white backdrop-blur-md transition hover:scale-105 hover:bg-black/50 md:opacity-0 md:group-hover:opacity-100"
          >
            ›
          </button>

          <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-sm font-medium text-white backdrop-blur-md">
            {currentImage + 1} / {patioImages.length}
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {patioImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => changeSlide(index)}
            aria-label={`Show ${image.label} image`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentImage === index
                ? "w-8 bg-accent"
                : "w-2.5 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const About = () => {
  const skills = [
    "React / Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "C++",
    "GCP",
    "AWS",
  ];

  return (
    <section id="about" className="border-y border-border bg-surface py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">
              About Me
            </h2>

            <h3 className="text-4xl font-bold tracking-tight text-primary">
              My Skills & Interests
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-8"
          >
            <p className="mb-8 text-xl leading-relaxed text-slate-600">
              Hi, I&apos;m Daniel. I recently graduated with a degree in
              Computer Science from Portland State University. I enjoy building
              C++ and full-stack applications that solve real-world problems and
              improve the lives of others.
            </p>

            <p className="mb-12 text-lg leading-relaxed text-slate-500">
              Since graduating, I&apos;ve been diving deeper into areas of
              software engineering that aren&apos;t always taught in school.
              I&apos;ve been expanding my portfolio, studying for the AWS Cloud
              Practitioner certification, and learning Blender to create unique,
              interactive websites.
            </p>

            <div className="border-t border-border py-12">
              <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-400">
                Technical Stack
              </h4>

              <div className="grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center font-medium text-primary"
                  >
                    <span className="mr-3 h-2 w-2 bg-accent" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-12 border-t border-border pt-20 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">
              Hobbies
            </h2>

            <h3 className="text-4xl font-bold tracking-tight text-primary">
              Beyond Programming
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-8"
          >
            <p className="text-xl leading-relaxed text-slate-600">
              When I&apos;m not coding, I enjoy exploring nature, lifting
              weights, playing sports, cooking, and trying new things. One of my
              favorite experiences this year was building a backyard patio with
              my dad. It was challenging, but seeing our ideas come to life made
              all the hard work worth it. I also gained practical skills that I
              can use for future DIY projects.
            </p>

            <ImageSlider />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
