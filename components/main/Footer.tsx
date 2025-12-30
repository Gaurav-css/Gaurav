"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => {
          setIsModalOpen(false);
          setStatus("");
        }, 3000);
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("An error occurred.");
    }
  };

  return (
    <div className="w-full h-full bg-white/10 backdrop-blur-md border-t border-white/20 text-black shadow-lg p-[15px] z-40 relative">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap gap-8">
          {/* Community */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[20px] font-bungee mb-4">Community</div>
            <a
              href="https://github.com/Gaurav-css"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-[10px] text-[15px] hover:underline hover:text-brand-green transition-colors font-medium"
            >
              <RxGithubLogo className="mr-2 w-5 h-5" /> Github
            </a>
            <a
              href="https://discord.com/invite/yourserver"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-[10px] text-[15px] hover:underline hover:text-brand-green transition-colors font-medium"
            >
              <RxDiscordLogo className="mr-2 w-5 h-5" /> Discord
            </a>
          </div>

          {/* Social Media */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[20px] font-bungee mb-4">Social Media</div>
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-[10px] text-[15px] hover:underline hover:text-brand-green transition-colors font-medium"
            >
              <RxInstagramLogo className="mr-2 w-5 h-5" /> Instagram
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-[10px] text-[15px] hover:underline hover:text-brand-green transition-colors font-medium"
            >
              <RxTwitterLogo className="mr-2 w-5 h-5" /> Twitter
            </a>
            <a
              href="https://linkedin.com/in/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-[10px] text-[15px] hover:underline hover:text-brand-green transition-colors font-medium"
            >
              <RxLinkedinLogo className="mr-2 w-5 h-5" /> LinkedIn
            </a>
          </div>

          {/* About */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[20px] font-bungee mb-4">About</div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 my-3 bg-brand-green text-black border-2 border-black shadow-hard rounded-full hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all font-bold text-sm"
            >
              Contact Us
            </button>
            <a
              href="mailto:gky89552@gmail.com"
              className="flex items-center my-[10px] text-[15px] hover:underline hover:text-brand-green transition-colors font-medium"
            >
              gky895522@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-10 mb-[20px] text-[14px] text-center font-medium opacity-80">
          &copy; {new Date().getFullYear()} Gaurav Inc. All rights reserved.
        </div>

        {/* Contact Form Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60 backdrop-blur-sm"
            >
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white border-2 border-black text-black rounded-3xl p-8 w-full max-w-lg shadow-hard relative"
              >
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-black text-2xl hover:text-red-500 transition-colors"
                >
                  <IoClose />
                </button>

                <h2 className="text-3xl font-extrabold text-center mb-6 text-black">
                  Let&apos;s Talk!
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block mb-1 text-sm font-bold">Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-2 rounded-lg bg-white border-2 border-black focus:outline-none focus:shadow-hard transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-bold">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-2 rounded-lg bg-white border-2 border-black focus:outline-none focus:shadow-hard transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-bold">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Write your message here..."
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg bg-white border-2 border-black focus:outline-none focus:shadow-hard transition-all"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-brand-green border-2 border-black text-black font-bold text-lg shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                  >
                    Send Message
                  </button>

                  {status && (
                    <p className="text-center mt-2 text-sm text-green-600 font-bold">{status}</p>
                  )}
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Footer;
