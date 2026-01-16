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
  FaAward,
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBars,
  FaTimes
} from "react-icons/fa";
import {
  MdSecurity,
  MdOutlineEngineering,
  MdOutlinePsychology,
  MdOutlineVerified
} from "react-icons/md";

const navLinks = [
  { href: "#about-me", label: "About me", icons: [FaUserAstronaut, FaLaptopCode, MdOutlinePsychology] },
  { href: "#skills", label: "Skills", icons: [FaFighterJet, MdOutlineEngineering, FaGlobeAmericas] },
  { href: "#internships", label: "Internships", icons: [FaBriefcase, FaCalendarAlt, FaMapMarkerAlt] },
  { href: "#projects", label: "Projects", icons: [MdSecurity, FaRocket, FaUserSecret] },
  { href: "#certifications", label: "Certifications", icons: [FaCertificate, MdOutlineVerified, FaAward] },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle window resize
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Mobile Floating Hamburger - Visible only on mobile when menu is closed */}
      {!isMobileMenuOpen && (
        <button
          className="fixed top-5 right-5 z-[50] p-3 bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg rounded-full md:hidden hover:scale-110 transition-all duration-200"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <FaBars className="w-6 h-6 text-black" />
        </button>
      )}

      {/* Desktop Navbar - Completely hidden on mobile now */}
      <div className="hidden md:block w-full fixed top-0 z-50 px-3 sm:px-4 pt-3 sm:pt-6">
        <div className="w-full max-w-7xl mx-auto h-[65px] bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-full flex flex-row items-center justify-between px-6">
          {/* Logo - Hidden on Tablet (md), Visible on Desktop (lg) */}
          <a href="#about-me" className="h-auto w-auto hidden lg:flex flex-row items-center shrink-0">
            <Image
              src="/logo.png"
              alt="logo"
              width={35}
              height={35}
              className="cursor-pointer hover:animate-slowspin rounded-full sm:w-10 sm:h-10"
            />
            <span className="font-bold ml-2 text-black text-xl font-bungee">
              Gaurav Portfolio
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="flex-1 h-full flex flex-row items-center justify-center">
            <div className="flex items-center justify-center w-auto h-auto px-5 py-2 text-black font-medium gap-2">
              {navLinks.map((link) => {
                const [Icon1, Icon2, Icon3] = link.icons;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group relative cursor-pointer px-5 py-2 rounded-full hover:bg-white/20 hover:backdrop-blur-md hover:scale-110 hover:text-black transition-all duration-300 font-bold text-base font-surgena flex items-center"
                  >
                    <Icon1 className="absolute -top-4 -right-4 w-5 h-5 text-black opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 rotate-12" />
                    <Icon2 className="absolute -bottom-4 -right-4 w-5 h-5 text-black opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 -rotate-12 delay-75" />
                    <Icon3 className="absolute -top-4 -left-2 w-5 h-5 text-black opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 rotate-45 delay-100" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Desktop Social Icons */}
          <div className="flex flex-row gap-5 shrink-0">
            {Array.isArray(Socials) &&
              Socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Image src={social.src} alt={social.name} width={24} height={24} />
                </a>
              ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 z-[100] h-full w-[280px] sm:w-[320px] bg-white shadow-2xl transform transition-transform duration-300 ease-out md:hidden overflow-y-auto`}
        style={{ transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 z-10"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <FaTimes className="w-6 h-6 text-black" />
        </button>

        <div className="flex flex-col h-full pt-20 pb-8 px-6">
          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const [Icon1] = link.icons;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center gap-4 px-4 py-3 rounded-xl text-black font-bold text-lg font-surgena hover:bg-gray-100 transition-all duration-200 pr-4"
                >
                  <span className="p-2 rounded-lg bg-gray-100">
                    <Icon1 className="w-5 h-5" />
                  </span>
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Divider */}
          <div className="my-6 h-px bg-gray-200" />

          {/* Social Links */}
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-wider text-gray-500 font-medium px-4 mb-2">
              Connect
            </p>
            <div className="flex flex-row gap-4 px-4">
              {Array.isArray(Socials) &&
                Socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 hover:scale-110 transition-all duration-200"
                  >
                    <Image src={social.src} alt={social.name} width={24} height={24} />
                  </a>
                ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto px-4">
            <a href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="logo" width={32} height={32} className="rounded-full" />
              <span className="font-bold text-black text-sm font-bungee">Gaurav Portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
