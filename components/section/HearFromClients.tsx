"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "",
    role: "Founder @ Sprout Venture Studio",
    avatar: "/avatars/ares.jpg",
    video: "motion1.mp4",
    quote:
      "Built multiple sites really quickly and now they generate us multiple 6-figs a year. Got help with branding and product design, thanks to AWeb we're able to launch our SaaS with ease",
  },
  {
    name: "Shanaya Udawadiya",
    role: "CEO @ FrostChanger",
    avatar: "/avatars/pelle.jpg",
    quote: "Soon...",
    video: null,
  },
  {
    name: "Lavesh Khairajani",
    role: "Head @ FrostChanger",
    avatar: "/avatars/sam.jpg",
    quote:
      "The designs were so good that I ordered 5 times for 5 of my brands. These guys are really talented in the work they do, thank you!",
    video: null,
  },
  {
    name: "Saam Hickson",
    role: "Head @ Quantum Business Growth",
    avatar: "/avatars/sam.jpg",
    quote:
      "The designs were so good that I ordered 5 times for 5 of my brands. These guys are really talented in the work they do, thank you!",
    video: null,
  },

];

export default function HearFromClients() {
  return (
    <section className="py-20 bg-black text-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Hear from our Clients
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,_auto)]">
          {/* First item: the only video testimonial, spans two rows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:row-span-2 bg-[#111] p-4 rounded-xl shadow-lg flex flex-col space-y-4"
          >
            <div className="relative rounded-lg overflow-hidden">
              <video
                className="w-full h-[300px] object-cover rounded-md"
                poster="/poster.jpg"
                muted
                autoPlay
                loop
                playsInline
              >
                <source src={testimonials[0].video!} type="video/mp4" />
              </video>
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <button className="text-white bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition">
                  ▶️
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <Image
                  src={testimonials[0].avatar}
                  alt={testimonials[0].name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonials[0].name}</h4>
                  <p className="text-sm text-gray-400">
                    {testimonials[0].role}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {testimonials[0].quote}
              </p>
            </div>
          </motion.div>

          {/* Remaining testimonials in grid format */}
          {testimonials.slice(1).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 1) * 0.2, duration: 0.6 }}
              className="bg-[#111] p-4 rounded-xl shadow-lg flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
