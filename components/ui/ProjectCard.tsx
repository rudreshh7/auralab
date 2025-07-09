"use client";
import Link from "next/link";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  video?: string;
  link: string;
}


export function ProjectCard({ title, description, image, video, link }: ProjectCardProps) {
  return (
    <CardContainer className="inter-var">
      <Link href={link}>
        <CardBody className="cursor-pointer bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border transition duration-300 hover:scale-[1.01]">
          <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
            {title}
          </CardItem>

          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {description}
          </CardItem>

          <CardItem translateZ="100" className="w-full mt-4">
            {video ? (
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              />
            ) : (
              <img
                src={image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={title}
              />
            )}
          </CardItem>
          
        </CardBody>
      </Link>
    </CardContainer>
  );
}

