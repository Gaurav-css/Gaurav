"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
    {
        title: "Full Stack Web Development",
        issuer: "Coursera",
        date: "2023",
        link: "#",
        description: "Comprehensive training in modern web development technologies including React, Node.js, and database management.",
    },
    {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2024",
        link: "#",
        description: "Foundational understanding of AWS Cloud concepts, security, and compliance.",
    },
    {
        title: "Cybersecurity Fundamentals",
        issuer: "Udemy",
        date: "2023",
        link: "#",
        description: "Introduction to network security, encryption, and threat analysis.",
    },
];

const Certifications = () => {
    return (
        <section
            id="certifications"
            className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 px-4"
        >
            <motion.div
                variants={slideInFromTop}
                className="mb-10 py-[8px] px-[10px] border-2 border-black bg-white shadow-hard opacity-[0.9] w-max flex items-center rounded-lg z-20"
            >
                <SparklesIcon className="text-black mr-[10px] h-5 w-5" />
                <h1 className="text-black text-[13px] font-bold">
                    Certifications & Achievements
                </h1>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
                {certifications.map((cert, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-2xl border-2 border-black bg-white/10 backdrop-blur-md shadow-hard p-6 hover:scale-105 transition-transform duration-300 group"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <FaCertificate className="w-24 h-24 text-black" />
                        </div>

                        <div className="relative z-10 flex flex-col gap-4 h-full justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <FaCertificate className="text-brand-green w-5 h-5" />
                                    <span className="text-sm font-bold text-gray-600">{cert.issuer}</span>
                                </div>
                                <h3 className="text-xl font-black text-black mb-2">{cert.title}</h3>
                                <p className="text-sm text-gray-700 font-medium">{cert.description}</p>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <span className="text-xs font-bold text-gray-500">{cert.date}</span>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-xs font-bold hover:bg-brand-green hover:text-black transition-colors border-2 border-transparent hover:border-black"
                                >
                                    View Certificate <FaExternalLinkAlt className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
