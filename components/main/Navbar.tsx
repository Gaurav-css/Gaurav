"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import {
  FaFighterJet,
  FaUserSecret,
  FaLaptopCode,
  FaGlobeAmericas,
  FaRocket,
  FaUserAstronaut,
  FaCertificate,
  FaAward
} from "react-icons/fa";
import {
  MdSecurity,
  MdOutlineEngineering,
  MdOutlinePsychology,
  MdOutlineVerified
} from "react-icons/md";

const Navbar = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  React.useEffect(() => {
    let ticking = false;

    const controlNavbar = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY && window.scrollY > 100) { // if scroll down and past 100px
              setIsVisible(false);
            } else { // if scroll up
              setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
            ticking = false;
          }
        });
        ticking = true;
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div className={`w-full fixed top-0 z-50 px-4 pt-6 transition-transform duration-300 will-change-transform ${isVisible ? 'translate-y-0' : '-translate-y-[200%]'}`}>
      <div className="w-full max-w-7xl mx-auto h-[65px] bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-full flex flex-row items-center justify-between px-6">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin rounded-full"
          />
          <span className="font-bold ml-[10px] hidden md:block text-black text-xl font-bungee">
            <a href="/">Gaurav Portfolio</a>
          </span>
        </a>

        <div className="flex-1 h-full flex flex-row items-center justify-center md:mr-0">
          <div className="flex items-center justify-between w-full md:w-auto h-auto px-2 md:px-[20px] py-[10px] text-black font-medium gap-2 md:gap-4">
            <a href="#about-me" className="group relative cursor-pointer px-3 py-2 md:px-8 md:py-2 rounded-full hover:bg-white/20 hover:backdrop-blur-md hover:scale-110 hover:text-black transition-all duration-300 font-bold text-xs md:text-base font-surgena flex items-center gap-2 md:gap-5">
              <FaUserAstronaut className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-4 h-4 md:w-5 md:h-5 text-black opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 rotate-12" />
              <FaLaptopCode className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-4 h-4 md:w-5 md:h-5 text-black opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 -rotate-12 delay-75" />
              <MdOutlinePsychology className="absolute -top-3 -left-1 md:-top-4 md:-left-2 w-4 h-4 md:w-5 md:h-5 text-black opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 rotate-45 delay-100" />
              About me
            </a>
            <a href="#skills" className="group relative cursor-pointer px-3 py-2 md:px-6 md:py-2 rounded-full hover:bg-white/20 hover:backdrop-blur-md hover:scale-110 hover:text-black transition-all duration-300 font-bold text-xs md:text-base font-surgena flex items-center gap-2 md:gap-5">
              <FaFighterJet className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-4 h-4 md:w-5 md:h-5 text-black opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 -rotate-12" />
              <MdOutlineEngineering className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-4 h-4 md:w-5 md:h-5 text-black opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 rotate-12 delay-75" />
              <FaGlobeAmericas className="absolute -top-3 -left-1 md:-top-4 md:-left-2 w-4 h-4 md:w-5 md:h-5 text-black opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 rotate-45 delay-100" />
              Skills
            </a>
            <a href="#projects" className="group relative cursor-pointer px-3 py-2 md:px-6 md:py-2 rounded-full hover:bg-white/20 hover:backdrop-blur-md hover:scale-110 hover:text-black transition-all duration-300 font-bold text-xs md:text-base font-surgena flex items-center gap-2 md:gap-2">
              <MdSecurity className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-4 h-4 md:w-5 md:h-5 text-black opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
              <FaRocket className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-4 h-4 md:w-5 md:h-5 text-black opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 -rotate-12 delay-75" />
              <FaUserSecret className="absolute -top-3 -left-1 md:-top-4 md:-left-2 w-4 h-4 md:w-5 md:h-5 text-black opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 rotate-12 delay-100" />
              Projects
            </a>
            <a href="#certifications" className="group relative cursor-pointer px-3 py-2 md:px-6 md:py-2 rounded-full hover:bg-white/20 hover:backdrop-blur-md hover:scale-110 hover:text-black transition-all duration-300 font-bold text-xs md:text-base font-surgena flex items-center gap-2 md:gap-5">
              <FaCertificate className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-4 h-4 md:w-5 md:h-5 text-black opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 rotate-12" />
              <MdOutlineVerified className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-4 h-4 md:w-5 md:h-5 text-black opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 -rotate-12 delay-75" />
              <FaAward className="absolute -top-3 -left-1 md:-top-4 md:-left-2 w-4 h-4 md:w-5 md:h-5 text-black opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 rotate-45 delay-100" />
              Certifications
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Array.isArray(Socials) &&
            Socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="invert" // Invert colors for dark icons on white background if needed, or remove if they are colored
                />
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
