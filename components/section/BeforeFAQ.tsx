"use client";

import { motion } from "framer-motion";
import { RainbowButton } from "@/components/magicui/rainbow-button";
export default function FAQ() {
  return (
    <section className="relative w-full py-28 text-white overflow-hidden">
      {/* Glowy background blob */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto text-center px-6"
      >
        <h2 className="text-4xl md:text-5xl text-black font-extrabold mb-6">
          Ready to convert your vision into reality?
        </h2>
        <p className="text-lg text-black mb-10">
          Aura so good, even your ex will click 'Book Now'!
        </p>
    <RainbowButton className="mt-6"> Book a Free Consultation</RainbowButton>  
      </motion.div>
    </section>
  );
}
