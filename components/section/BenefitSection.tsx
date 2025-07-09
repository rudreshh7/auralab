"use client";

import {
  Brush,
  Code,
  Film,
  Gauge,
  Rocket,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function BenefitSection() {
  return (
    <div className="w-full flex justify-center items-center px-4 py-12">
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-3 xl:grid-rows-2 xl:max-w-[1200px]">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Brush className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Pixel-Perfect Design"
          description="Clean, modern UI/UX with a focus on visual storytelling and usability."
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Code className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Fullstack Development"
          description="Building fast, scalable web apps with modern stacks like Next.js, Node.js & PostgreSQL."
        />

        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Film className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Micro Interactions"
          description="Delightful animations using Framer Motion, Lottie, and creative transitions."
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Gauge className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Optimized Performance"
          description="Lighthouse-perfect websites with optimized assets, lazy loading, and SSR."
        />

        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Brush className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Robust Tooling"
          description="Built with TypeScript, CI/CD pipelines, linting, testing, and modular structure."
        />
      </ul>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[11rem] list-none ${area}`}>
      <div className="relative h-full rounded-xl border p-2 md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-4 rounded-lg p-4 dark:shadow-[0px_0px_20px_0px_#2D2D2D]">
          <div className="flex flex-col justify-between gap-3">
            <div className="w-fit rounded-md border border-gray-600 p-1.5">
              {icon}
            </div>
            <div className="space-y-2">
              <h3 className="font-sans text-lg font-semibold text-black dark:text-white">
                {title}
              </h3>
              <p className="text-sm text-black dark:text-neutral-400">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
