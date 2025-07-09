"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Brand Strategy",
    preview: "/previews/brand.png",
    description:
      "We develop a solid foundation that communicates your brand’s voice and vision. Includes identity, messaging, positioning, and tone.",
  },
  {
    id: 2,
    title: "Content Marketing",
    preview: "/previews/content.png",
    description:
      "From blogs to campaigns, we build your content funnel with strategy, creativity, and consistency.",
  },
  {
    id: 3,
    title: "Creative Production",
    preview: "/previews/production.png",
    description:
      "We handle all aspects of creative production — videos, motion, graphics, and more — tailored to your brand identity.",
  },
  {
    id: 4,
    title: "Paid Ads & SEO",
    preview: "/previews/seo.png",
    description:
      "Maximize reach through PPC campaigns, retargeting ads, and SEO optimization strategies.",
  },
  {
    id: 5,
    title: "Social Media Management",
    preview: "/previews/social.png",
    description:
      "We manage, plan, and grow your social presence through content, insights, and community engagement.",
  },
  {
    id: 6,
    title: "Analytics & Insights",
    preview: "/previews/analytics.png",
    description:
      "Track KPIs, generate reports, and interpret data to help you make informed decisions for campaigns.",
  },
];

export default function ServicesList() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <section
      className="relative w-full  px-4 py-20"
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
    >
      <div className="max-w-4xl mx-auto">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="border-b border-white/20 py-6 cursor-pointer relative"
            onMouseEnter={() => setHovered(service.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() =>
              setSelected((prev) => (prev === service.id ? null : service.id))
            }
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-400 w-6">
                  {String(service.id).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold uppercase tracking-wide">
                  {service.title}
                </h3>
              </div>
              <ChevronDown
                className={`transition-transform ${
                  selected === service.id ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Expanded content */}
            <AnimatePresence>
              {selected === service.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 text-gray-300 text-sm leading-relaxed"
                >
                  {service.description}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Hover Preview Image */}
      <AnimatePresence>
        {hovered !== null && (
          <motion.img
            src={services.find((s) => s.id === hovered)?.preview || ""}
            alt="preview"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: mousePos.x + 20,
              y: mousePos.y - 20,
            }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed z-50 w-32 h-20 object-cover rounded-xl pointer-events-none shadow-xl border border-white/20"
            style={{ top: 0, left: 0 }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
