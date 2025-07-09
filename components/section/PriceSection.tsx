"use client";

import React from "react";
import { motion } from "framer-motion";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { CheckCircle } from "lucide-react";

const pricingOptions = [
  {
    title: "Design",
    price: "$200",
    features: [
      "Custom UI/UX design tailored to your brand",
      "Responsive layouts for all screen sizes",
      "Up to 2 design revisions",
      "High-fidelity mockups",
      "Design system (colors, typography, spacing)"
    ],
  },
  {
    title: "<Design + Develop/>",
    price: "$500",
    features: [
      "Everything in Design package",
      "Frontend development (React, Next.js)",
      "Clean and maintainable code",
      "Performance optimization",
      "CMS or static site integration (e.g. Sanity, Contentful)",
      "Fully responsive on all devices",
      "Basic SEO setup",
      "Up to 3 design & code revisions"
    ],
  },
  {
    title: "<Design + Develop + Motion/>",
    price: "$1000",
    features: [
      "Everything in Design + Develop package",
      "Custom motion animations using Framer Motion",
      "Brand identity design (logo, colors, fonts)",
      "Social media kit (cover banners, profile pics, templates)",
      "Comprehensive brand guidelines (usage, do's & don'ts)",
      "Micro-interactions for better user experience",
      "Up to 5 revisions across design & branding"
    ],
  },
];


export const PriceSection = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-5">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-black mb-4">Our Pricing Plans</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Choose the perfect package that fits your creative needs.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {pricingOptions.map((option, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-sm bg-white border border-gray-300 rounded-2xl shadow-md p-8 flex flex-col items-center text-center"
          >
            <h3 className="text-2xl font-semibold text-black mb-2">{option.title}</h3>
            <p className="text-3xl font-bold text-black mb-6">{option.price}</p>

            <ul className="space-y-3 text-left mb-8">
              {option.features.map((feature, i) => (
                <li key={i} className="flex items-center text-black">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <RainbowButton>Choose Plan</RainbowButton>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
