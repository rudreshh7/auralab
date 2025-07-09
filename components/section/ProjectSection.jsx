"use client";
import React, { useState } from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TypingAnimation } from "@/components/magicui/typing-animation";

const ProjectSection = () => {
  const [activeTab, setActiveTab] = useState("Design");

  const tabs = ["Design", "Develop", "Motion","Branding"];

  const allProjects = [
    {
    title: "WeddingByDoubleS",
    description: "Plan your dream wedding with elegance and grace.",
    image: "design1.png",
    category: "Design",
    link: "/projects/wedding-by-double-s",
  },
    {
    title: "WeddingByDoubleS",
    description: "Plan your dream wedding with elegance and grace.",
    image: "design1.png",
    category: "Design",
    link: "/projects/wedding-by-double-s",
  },  {
    title: "WeddingByDoubleS",
    description: "Plan your dream wedding with elegance and grace.",
    image: "design1.png",
    category: "Design",
    link: "/projects/wedding-by-double-s",
  },  {
    title: "WeddingByDoubleS",
    description: "Plan your dream wedding with elegance and grace.",
    image: "design1.png",
    category: "Design",
    link: "/projects/wedding-by-double-s",
  },
  {
    title: "TechPulse CRM",
    description: "Next-gen CRM solution for startups & freelancers.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2560&auto=format&fit=crop",
    category: "Develop",
    link: "/projects/techpulse-crm",
  },
  {
    title: "Motion Magic",
    description: "Animated UI interactions using Framer Motion.",
    video: "motion1.mp4",
    category: "Motion",
    link: "/projects/motion-magic",
  },
    
  ];

  const filteredProjects = allProjects.filter(
    (project) => project.category === activeTab
  );

  return (
    <section className="py-10 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-5 text-neutral-800 dark:text-white">
          <TypingAnimation>Feature Projects</TypingAnimation>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeTab === tab
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="flex flex-wrap items-start justify-center gap-7">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                video={project.video} // ✅ Pass video if exists
                link={project.link}

              />
            ))
          ) : (
            <p className="text-center text-neutral-500 dark:text-neutral-400">
              No projects available in this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
