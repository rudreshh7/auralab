import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
 
export function CoolDemo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span className="text-4xl">
            Delivery in 48 hours. <br /> No kidding.
          </span>
        }
        // badge={
        //   <a href="https://peerlist.io/manuarora">
        //     <Badge className="h-10 w-10 transform -rotate-12" />
        //   </a>
        // }
        src={`/design1.png`}
        showGradient={false}
      />
    </div>
  );
}