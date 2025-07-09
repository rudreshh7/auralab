"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  { number: "01.", title: "Research" },
  { number: "02.", title: "Wireframing" },
  { number: "03.", title: "Visual Design" },
  { number: "04.", title: "Prototyping" },
  { number: "05.", title: "Responsive" },
  { number: "06.", title: "Handoff" },
];

export default function OurApproach() {
  return (
    <section className="py-20 px-6 font-tech">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-16 font-bold tracking-widest uppercase">
          Our Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-2xl text-gray-400 w-12">{step.number}</div>
              <div className="relative group">
                <div className="border border-white px-6 py-3 text-lg tracking-widest uppercase transition-all group-hover:bg-white group-hover:text-black">
                  {step.title}
                </div>
                {/* Optional taped graphic effect */}
                <img
                  src="/icons/tape.png"
                  alt=""
                  className={`absolute -top-2 -left-3 w-6 transform rotate-12 opacity-70 group-hover:opacity-100 transition-opacity`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
