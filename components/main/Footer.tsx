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
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {/* Community */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-[15px] text-[15px] hover:underline"
            >
              <RxGithubLogo className="mr-2" /> Github
            </a>
            <a
              href="https://discord.com/invite/yourserver"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-[15px] text-[15px] hover:underline"
            >
              <RxDiscordLogo className="mr-2" /> Discord
            </a>
          </div>

          {/* Social Media */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-[15px] text-[15px] hover:underline"
            >
              <RxInstagramLogo className="mr-2" /> Instagram
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-[15px] text-[15px] hover:underline"
            >
              <RxTwitterLogo className="mr-2" /> Twitter
            </a>
            <a
              href="https://linkedin.com/in/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-[15px] text-[15px] hover:underline"
            >
              <RxLinkedinLogo className="mr-2" /> LinkedIn
            </a>
          </div>

          {/* About */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 my-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:scale-105 transition-transform"
            >
              Contact Us
            </button>
            <a
              href="mailto:gky89552@gmail.com"
              className="flex items-center my-[15px] text-[15px] hover:underline"
            >
              gky89552@gmail.com
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; {new Date().getFullYear()} Gaurav Inc. All rights reserved.
        </div>

        {/* Contact Form Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60"
            >
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-3xl p-8 w-full max-w-lg shadow-2xl relative"
              >
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-white text-2xl"
                >
                  <IoClose />
                </button>

                <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
                  <h2>Let&apos;s Talk!</h2>
                  !
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block mb-1 text-sm font-semibold">Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-semibold">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-semibold">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Write your message here..."
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg hover:scale-105 transition-transform"
                  >
                    Send Message
                  </button>

                  {status && (
                    <p className="text-center mt-2 text-sm text-green-400">{status}</p>
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
