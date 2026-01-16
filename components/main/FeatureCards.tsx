"use client";
import React from "react";
import {
    CodeBracketIcon,
    CommandLineIcon,
    RocketLaunchIcon,
    ArrowRightIcon
} from "@heroicons/react/24/outline";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const projects = [
    {
        title: "Task Management",
        subtitle: "Web App",
        badge: "AI Powered",
        description: "A full-stack task management web application powered by AI. Manage your tasks efficiently with smart suggestions, automated prioritization, and intelligent scheduling features.",
        bg: "bg-[#E4D9F5]", // Purple
        buttonColor: "bg-brand-green",
        icon: CodeBracketIcon,
        tech: ["React", "Node.js", "AI"],
        image: "/image.png",
        githubLink: "https://github.com/Gaurav-css/MiniTask.git",
        liveLink: "https://mini-task-jet.vercel.app/"
    },
    {
        title: "PreviewHost",
        subtitle: "Frontend Hosting Platform",
        badge: "Instant Sharing",
        description: "Localhost, meet the Public Web. Upload your HTML, CSS, and JS. Get a secure, shareable link instantly. Perfect for feedback, testing, and demos. No CLI needed.",
        bg: "bg-[#C4DBFA]", // Blue
        buttonColor: "bg-[#C3F53C]", // Lime
        icon: CommandLineIcon,
        tech: ["HTML", "CSS", "JavaScript"],
        image: "/preview.png",
        githubLink: "https://github.com/Gaurav-css/preview-hosting",
        liveLink: "https://preview-hosting.vercel.app/"
    },
    {
        title: "Major Project",
        subtitle: "Coming Soon",
        badge: "In Development",
        description: "Something exciting is in the works! Stay tuned for a major update featuring the latest web technologies.",
        bg: "bg-[#FDF6C4]", // Yellow
        buttonColor: "bg-[#B0F4F9]", // Cyan
        icon: RocketLaunchIcon,
        tech: ["React", "Chart.js", "REST API"],
        image: "/java.png",
        githubLink: "#"
    }
];

const FeatureCards = () => {
    return (
        <div id="projects" className="w-full relative flex flex-col items-center justify-center py-20 px-4 md:px-10 gap-16 lg:gap-40">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={`w-full max-w-5xl ${project.bg} rounded-[40px] p-6 md:p-10 border-2 border-black shadow-hard relative overflow-hidden sticky top-24 min-h-[400px] transition-transform duration-300 will-change-transform`}
                    style={{
                        top: `${100 + index * 40}px`,
                        zIndex: index + 1,
                        marginBottom: index === projects.length - 1 ? 0 : '10vh'
                    }}
                >
                    {/* Top "Folder" Tabs Effect (Decorative) */}
                    <div className="absolute top-0 left-10 w-32 h-4 bg-white opacity-50 rounded-t-xl border-t-2 border-l-2 border-r-2 border-black -mt-4 z-0 hidden md:block"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row gap-8 justify-between items-center h-full">
                        {/* Left Column: Text Content */}
                        <div className="flex-1 flex flex-col gap-4 lg:gap-6 w-full">
                            <div className="w-max px-3 py-1.5 bg-white border-2 border-black rounded-full shadow-hard flex items-center gap-2">
                                <SparklesIcon className="w-4 h-4 text-black" />
                                <span className="font-bold text-xs md:text-sm text-black">{project.badge}</span>
                            </div>
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-black leading-tight">
                                {project.title} <br />
                                <span className="text-gray-800">{project.subtitle}</span>
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                    <div key={i} className="px-2 py-1 bg-white/50 border-2 border-black rounded-lg text-xs md:text-sm font-bold text-black uppercase">
                                        {t}
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm md:text-base font-medium text-black max-w-lg">
                                {project.description}
                            </div>

                            <div className="flex flex-wrap gap-3 mt-2">
                                {(project as any).liveLink ? (
                                    <a href={(project as any).liveLink} target="_blank" rel="noopener noreferrer" className={`w-max px-5 py-2.5 md:px-6 md:py-3 ${project.buttonColor} border-2 border-black shadow-hard rounded-xl font-bold text-sm md:text-base hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2 text-black`}>
                                        <project.icon className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                ) : (
                                    <button className={`w-max px-5 py-2.5 md:px-6 md:py-3 ${project.buttonColor} border-2 border-black shadow-hard rounded-xl font-bold text-sm md:text-base hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2 text-black`}>
                                        <project.icon className="w-4 h-4" />
                                        View Project
                                    </button>
                                )}
                                {project.githubLink && (
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="w-max px-5 py-2.5 md:px-6 md:py-3 bg-white border-2 border-black shadow-hard rounded-xl font-bold text-sm md:text-base hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2 text-black">
                                        <CodeBracketIcon className="w-4 h-4" />
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Right Column: Project Image */}
                        <div className="flex-1 w-full flex justify-center lg:justify-end items-center">
                            <div className="relative w-full max-w-sm aspect-video bg-white border-2 border-black shadow-hard rounded-xl overflow-hidden group">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeatureCards;
