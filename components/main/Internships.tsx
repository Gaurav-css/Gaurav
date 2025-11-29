"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const internships = [
    {
        title: "Full Stack Software Engineer & Team Lead",
        company: "Hooman Group Inc.",
        date: "August 2025 - Present",
        location: "Remote",
        description: "Leading a team to develop comprehensive full-stack solutions for the pet industry, including service platforms and e-commerce websites. Overseeing the entire development lifecycle from architecture to deployment.",
        skills: ["Next.js", "TypeScript", "Tailwind CSS", "Team Leadership", "Full Stack Development"],
    },
];

const Internships = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20 relative z-20"
            id="internships"
        >
            <div className="py-20">
                <h1 className="text-[30px] md:text-[40px] font-bold text-black bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-3 rounded-xl font-surgena">
                    My Internship Track
                </h1>
            </div>

            <div className="w-full max-w-6xl mx-auto flex flex-col gap-10 px-4 md:px-10">
                {internships.map((item, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={index % 2 === 0 ? slideInFromLeft(0.2) : slideInFromRight(0.2)}
                        className="flex flex-col md:flex-row gap-5 w-full"
                    >
                        {/* Timeline Line & Dot (Desktop) */}
                        <div className="hidden md:flex flex-col items-center justify-start relative min-w-[50px]">
                            <div className="w-4 h-4 rounded-full bg-cyan-500 z-10 shadow-[0_0_10px_#06b6d4]" />
                            <div className="w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500 absolute top-4" />
                        </div>

                        {/* Content Card */}
                        <div className="w-full p-6 rounded-2xl border-2 border-black bg-white hover:translate-x-1 hover:-translate-y-1 transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                                <div>
                                    <h2 className="text-2xl font-bold text-black group-hover:text-purple-700 transition-colors font-surgena">
                                        {item.title}
                                    </h2>
                                    <h3 className="text-lg text-gray-900 font-bold flex items-center gap-2 mt-1">
                                        <FaBriefcase className="text-black" />
                                        {item.company}
                                    </h3>
                                </div>
                                <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-800 font-bold">
                                    <span className="flex items-center gap-2">
                                        <FaCalendarAlt className="text-black" />
                                        {item.date}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-black" />
                                        {item.location}
                                    </span>
                                </div>
                            </div>

                            <p className="text-black mb-4 text-base leading-relaxed font-medium">
                                {item.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {item.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs font-bold rounded-full bg-black text-white border border-black"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Internships;
