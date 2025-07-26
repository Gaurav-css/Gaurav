
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  demoLink: string;
  githubLink: string;
  image: string;
}

const ProjectCard = ({
  title,
  description,
  tech,
  demoLink,
  githubLink,
  image,
}: ProjectCardProps) => {
  return (
    <div className="group relative bg-[#0F172A] border-2 rounded-2xl overflow-hidden shadow-xl 
      transition-transform duration-300 hover:scale-[1.03] hover:shadow-cyan-500/30 
      animate-glow-border">
      
      {/* Animated Glow Fill Layer */}
      <div className="absolute inset-0 z-0 rounded-2xl pointer-events-none 
        bg-gradient-to-br from-purple-500/5 via-cyan-500/10 to-purple-500/5 
        blur-xl opacity-10 group-hover:opacity-30 transition-all duration-1000" />

      {/* Image */}
      <div className="w-full h-48 relative z-10 flex items-center justify-center bg-black/10">
  <Image
    src={image}
    alt={title}
    width={160} // or adjust based on your image
    height={160}
    className="object-contain transition-transform duration-500"
  />
</div>


      {/* Content */}
      <div className="relative z-10 p-6">
        <h2 className="text-white text-xl font-bold mb-2 group-hover:text-purple-300 transition">{title}</h2>
        <p className="text-gray-300 text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, idx) => (
            <span
              key={idx}
              className="bg-purple-800/30 text-purple-300 px-2 py-1 text-xs rounded-md"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-white transition"
          >
            <Github size={20} />
          </a>
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white transition"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
