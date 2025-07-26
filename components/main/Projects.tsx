// components/Projects.tsx
'use client';

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Bank Managment",
      description:
        "The project is a bank management system that allows users to manage accounts, perform transactions, and view financial data through a web based interface make it short",
      tech: ["frontend", "mysql", "database"],
      demoLink: "",
      githubLink: "",
      image: "/java.png",
    },
    {
      title: "Invigilation management system",
      description:
        "A web-based platform that automates exam duty allocation, allowing teachers to choose available invigilation slots based on admin-defined conditions. It ensures fair distribution, avoids scheduling conflicts, and enhances transparency and efficiency in the process.",
      tech: ["frontend", "mysql", "database"],
      demoLink: "",
      githubLink: "",
      image: "/java.png",
    },
    {
      title: "Major Project Coming soon :)",
      description:
        "coming soooon....",
      tech: ["React", "Chart.js", "REST API"],
      demoLink: "",
      githubLink: "",
      image: "/java.png",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full min-h-screen py-20 px-5 md:px-20 bg-[#0A0A23] text-white flex flex-col items-center"
    >
      <a
        href="#projects"
        className="text-4xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent transition-all duration-300 transform hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(165,180,252,0.8)]"
      >
        My Projects
      </a>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
