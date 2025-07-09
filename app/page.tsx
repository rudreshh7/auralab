import Image from "next/image";
import HeroSection from "../components/section/HeroSection";
import ProjectSection from "../components/section/ProjectSection";
import {BenefitSection} from "../components/section/BenefitSection";
import { TextReveal } from "@/components/magicui/text-reveal";
import { Cover } from "@/components/ui/cover";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { TestinomialSection } from "@/components/section/TestinomialSection";
import { PriceSection } from "@/components/section/PriceSection";
import Footer from "@/components/section/Footer";
import BeforeFAQ from "@/components/section/BeforeFAQ";
import FAQSection from "@/components/section/FAQ";
import { CoolDemo } from "@/components/section/CoolDemo";
import {MoreWork} from "@/components/section/MoreWork";
// import {ContainerScrollDemo} from "@/components/section/ContainerScrollDemo";
// import  HearFromClients  from "@/components/section/HearFromClients";
import OurApproach from "@/components/section/OurApproach";
import ServicesList from "@/components/section/ServicesList";
import ServicesSection from "@/components/section/ServicesSection";
export default function Home() {
  return (
    <div>
     <HeroSection/>

     <TextReveal>At Auralabs, we don't just build websites—we design digital symphonies that captivate, convert, and connect. Born from a passion for clean design and powered by cutting-edge technology, we're a team of creative thinkers, code crafters, and strategy buffs who believe every pixel should serve a purpose.
     </TextReveal>

     <ProjectSection/>
  
 <h2 className="text-4xl font-bold text-center mb-5 text-neutral-800 dark:text-white">
                 <TypingAnimation>Benefits of AuraLabs</TypingAnimation>

        </h2>
      <BenefitSection/>
      {/* <ContainerScrollDemo/> */}
         <div>  
       {/* <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Build amazing websites <br /> at <Cover>warp speed</Cover>
      </h1> */}

      </div>

      <OurApproach/>

      <h2 className="text-4xl font-bold text-center mb-5 text-neutral-800 dark:text-white">
                 <TypingAnimation>Get your things done</TypingAnimation>

        </h2>
      <div className="m-4">     
         <ServicesSection/>

        </div>
{/* More Services */}
 <h2 className="text-4xl font-bold text-center mb-5 text-neutral-800 dark:text-white">
                 <TypingAnimation>services we are master at</TypingAnimation>

        </h2>

      <ServicesList />

      {/* <HearFromClients /> */}

 <h2 className="text-4xl font-bold text-center mb-5 text-neutral-800 dark:text-white">
                 <TypingAnimation>hear from our clients</TypingAnimation>

        </h2>
     <TestinomialSection/>
     <MoreWork/>
     <PriceSection/>
     <CoolDemo/>
    
      <FAQSection/>
        <BeforeFAQ/>
     <Footer/>
     </div>
   );


  }