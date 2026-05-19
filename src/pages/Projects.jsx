import { motion } from "framer-motion";
import ProjectCard from "../components/Projectcard";
import { desc, title } from "framer-motion/client";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Resume Optimizer",
      description:
        "An AI-driven application that analyzes users' resumes and provides personalized feedback and suggestions to optimize content, format, and keywords for improved job application success.",
      tags: ["Python", "LLMs", "Streamlit"],
      github: "#",
      demo: "#",
    },
    {
      title: "AI Speech Improver/Social Skills Coach",
      description:
        "An AI-powered application that analyzes users' speech patterns and provides personalized feedback to improve communication skills, enhance social interactions, and boost confidence in various settings.",
      tags: ["Python", "LLMs", "React"],
      github: "#",
      demo: "#",
    },
    {
      title: "AI-Powered Live Japanese Translator",
      description:
        "A real-time translation application that uses OpenAI Whisper to provide accurate and instantaneous translations of spoken Japanese, facilitating communication for travelers, language learners, and professionals in various settings.",
      tags: ["Python", "LLMs", "Streamlit"],
      github: "#",
      demo: "#",
    },
    {
      title: "Maseeh Access Control System",
      description:
        "Capstone project developed by a small team that streamlines room access requests by automating the approval processes and creating admin dashboards",
      tags: [
        "React",
        "MongoDB",
        "FastAPI",
        "Full-Stack-Development",
        "OAuth",
        "Full-Stack-Development",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "PDX Event Portal",
      description:
        "A web application that provides comprehensive information on events happening in Portland, Oregon, including event details, ticketing options, and personalized recommendations based on user preferences.",
      tags: ["React", "AWS", "Redis", "Full-Stack-Development"],
      github: "#",
      demo: "#",
    },
    {
      title: "BookPDX",
      description:
        "A web application that helps artists search and book for the perfect venue in Portland, Oregon, by providing comprehensive information on venue capacity, amenities, and availability.",
      tags: ["React", "AWS", "Redis", "Full-Stack-Development"],
      github: "#",
      demo: "#",
    },
    {
      title: "Virtual Event Platform",
      description:
        "A web application that enables users to create, manage, and attend virtual events, offering features such as live streaming, interactive sessions, and networking opportunities for a seamless online event experience.",
      tags: ["React", "AWS", "WebRTC", "Socket.io", "Full-Stack-Development"],
      github: "#",
      demo: "#",
    },
    {
      title: "Real-time chat application",
      description:
        "A real-time chat application that allows users to communicate instantly through text messages, supporting features like group chats, file sharing, and notifications for a seamless messaging experience.",
      tags: ["React", "Node.js", "Socket.io", "Full-Stack-Development"],
      github: "#",
      demo: "#",
    },
    {
      title: "Real-time sports scoreboard",
      description:
        "A real-time sports scoreboard application that provides live updates on scores, player statistics, and game events for various sports, allowing fans to stay informed and engaged throughout the game.",
      tags: ["React", "Node.js", "Socket.io", "Full-Stack-Development"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-32">
      {/* Page Title */}
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-8"
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
              Projects
            </h2>
            <h3 className="text-3xl font-bold text-primary tracking-tight">
              Modern web and backend development.
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-8"
          >
            {/* Project Cards */}
            <div className="pt-12 border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-8">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    github={project.github}
                    demo={project.demo}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
