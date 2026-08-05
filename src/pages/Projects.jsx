import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import archive from "../images/projects/archive.jpg";
import hashcrack from "../images/projects/hashcrack.jpg";
import LivePDX from "../images/projects/LivePDX.jpg";
import BST from "../images/projects/BST.jpg";
import macsystem from "../images/projects/macsystem.png";
import pet from "../images/projects/pet.jpg";
import unix from "../images/projects/unix.jpg";

const Projects = () => {
  const fullStackProjects = [
    {
      title: "LivePDX Event Discovery Platform",
      description:
        "A full-stack web application that helps users discover events across the Portland metropolitan area. Organizers can create and manage events, while users can RSVP, save events, and see which events their friends are attending.",
      tags: ["React", "MongoDB", "Express", "Node.js"],
      image: LivePDX,
    },
    {
      title: "MAC System",
      description:
        "A capstone full-stack room access management application developed with a small Agile team. The application streamlines Portland State University room access requests by automating approval workflows and providing role-based dashboards.",
      tags: ["React", "Django", "Docker", "PostgreSQL"],
      image: macsystem,
      github: "https://github.com/danielhuynh081/Meseeh-Access-Control-Project",
    },
  ];

  const systemsProjects = [
    {
      title: "Unix Shell",
      description:
        "A Unix-like shell developed in C that implements process creation, pipelines, I/O redirection, command history, and built-in commands to replicate core Linux shell functionality.",
      tags: ["C", "Linux", "POSIX", "Systems Programming"],
      image: unix,
      imagePosition: "50% 25%",
      github:
        "https://github.com/danielhuynh081/PSU_Projects/tree/main/cs333_OperatingSystems/Lab4_UnixCommandShell",
    },
    {
      title: "Password Hash Cracker",
      description:
        "Developed a multithreaded password hash cracking tool in C using POSIX threads. Implemented mutex-based synchronization and coordinated work across up to 24 concurrent threads to improve performance while ensuring thread-safe execution.",
      tags: ["C", "Linux", "POSIX", "Multithreading"],
      image: hashcrack,
      imagePosition: "50% 2%",
      github:
        "https://github.com/danielhuynh081/PSU_Projects/tree/main/cs333_OperatingSystems/Lab5_MultiThreaded-DictionaryAttack-HashCrack",
    },
    {
      title: "Viktar Archive Utility",
      description:
        "Developed a Unix-style archive utility in C capable of creating, extracting, validating, and inspecting custom archive files while preserving metadata, permissions, timestamps, and verifying integrity with MD5 checksums.",
      tags: ["C", "Linux", "POSIX", "File I/O", "MD5"],
      image: archive,
      imagePosition: "50% 20%",
      github:
        "https://github.com/danielhuynh081/PSU_Projects/tree/main/cs333_OperatingSystems/Lab3_ViktarArchiveFiles",
    },
  ];

  const csProjects = [
    {
      title: "BST Cave Game",
      description:
        "A Python text-based adventure game where players traverse a Binary Search Tree, with branching paths and multiple endings determined by the choices they make.",
      tags: [
        "Python",
        "Data Structures",
        "Algorithms",
        "Object-Oriented Programming",
      ],
      image: BST,
      imagePosition: "top",
    },
    {
      title: "Pet Management System",
      description:
        "A C++ application for managing different types of pets using object-oriented programming and generic data structures. Implemented templated doubly linked lists, inheritance, operator overloading, and polymorphism to organize and manage pet collections.",
      tags: [
        "C++",
        "Templates",
        "Doubly Linked List",
        "OOP",
        "Operator Overloading",
      ],
      image: pet,
      imagePosition: "top",
      github:
        "https://github.com/danielhuynh081/PSU_Projects/tree/main/cs302_DataStructures/Lab2_DLL-Templates-OperatorOverloading",
    },
  ];

  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
              Projects
            </h2>

            <h3 className="text-4xl font-bold text-primary tracking-tight">
              A collection of my personal and PSU projects
            </h3>
          </motion.div>
        </div>

        {/* Full Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-primary mb-2">
            Full-Stack Applications
          </h3>

          <p className="text-slate-500 mb-10">
            End-to-end web applications built with modern frontend and backend
            technologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-8">
            {fullStackProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </motion.div>

        {/* Systems */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-primary mb-2">
            Systems Programming
          </h3>

          <p className="text-slate-500 mb-10">
            Projects focused on Linux, operating systems, multithreading, and
            efficient file processing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-8">
            {systemsProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </motion.div>

        {/* Computer Science */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-primary mb-2">
            Computer Science Fundamentals
          </h3>

          <p className="text-slate-500 mb-10">
            Projects exploring data structures, algorithms, and object-oriented
            programming concepts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-8">
            {csProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
