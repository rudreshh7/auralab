"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" relative overflow-hidden ">
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Let's Connect</h3>
          <p className="text-sm text-gray-400">
            Building beautiful web experiences worldwide.
          </p>
          <div className="flex gap-4 mt-4">
            <Facebook className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-sky-400 cursor-pointer" />
            <Mail className="w-5 h-5 hover:text-yellow-500 cursor-pointer" />
          </div>
        </div>

        {/* Right section */}
        <div className="text-sm text-gray-400 space-y-2 text-center md:text-right">
          <p>info@auralab.dev</p>
          <p>© 2025 AuraLab. All rights reserved.</p>
        </div>
      </div>

      {/* Giant AURALAB text */}
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.05 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 right-0 text-[20vw] font-extrabold text-gray-500 text-center tracking-tight select-none pointer-events-none"
        style={{ lineHeight: "1" }}
      >
        AURALAB
      </motion.h1>
    </footer>
  );
}
