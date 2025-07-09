"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What services does AuraLab offer?",
    answer:
      "We offer custom web design, full-stack development, motion graphics, branding, and product strategy — all tailored to elevate your brand experience.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary by scope, but most projects take between 2 to 6 weeks. We always prioritize quality and timely delivery.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Absolutely! AuraLab collaborates with clients worldwide — from startups to established brands — through clear communication and flexible hours.",
  },
  {
    question: "What's your pricing model?",
    answer:
      "We offer fixed-rate packages based on project type. Custom quotes are also available for unique needs. No surprises — just transparent pricing.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" py-24 px-6" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl p-5 backdrop-blur-sm transition-all"
            >
              <button
                onClick={() => toggle(index)}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden text-gray-800 mt-4 text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
