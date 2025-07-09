"use client";
import { Particles } from "@/components/magicui/particles";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Design", "Development", "Motion"];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen bg-white text-black font-jakarta">
      <Particles
        quantity={150}
        color="#7F8CAA"
        staticity={30}
        ease={40}
        size={1}
        vx={0.05}
        vy={0.05}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 max-w-4xl mx-auto h-full flex flex-col items-center justify-center text-center px-4 space-y-6">
        
        {/* Green pulse dot */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-gray-800">Available for work</span>
        </div>

        {/* Title with animated word */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-black">
          Supercharge Your Startup:
          <br />
          <span className="text-black">
            Elite{" "}
            <span className="inline-block px-2 py-1 border-4 border-black bg-white rounded-sm font-extrabold">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
             ,One Subscription
          </span>
        </h1>

        {/* Subtitle */}
        
        <div className="text-lg sm:text-xl text-gray-700 max-w-xl mx-auto">
          Get a top-tier product team on autopilot. 
          <PointerHighlight
        rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
        pointerClassName="text-gray-500"
      >
        <span className="relative z-10"> Design, frontend, backend  — no hiring required.</span>
      </PointerHighlight>
         
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="https://cal.com/rudresh-jha-9hwci7">
            <RainbowButton variant="default">Schedule a call</RainbowButton>
          </Link>

          <Link href="/portfolio">
            <RainbowButton variant="outline">View Our Work</RainbowButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
