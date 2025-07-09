"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";

export function ContainerScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              You Focus on product <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Let us handle the rest
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
