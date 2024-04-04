'use client'
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
function WhyChooseus() {
    const content = [
        {
          title: "Exceptional Talent",
          description:
            "Our platform boasts a curated selection of freelancers spanning various industries and disciplines, ensuring you find the perfect match for your project needs.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              Exceptional Talent
            </div>
          ),
        },
        {
          title: "Efficiency and Flexibility",
          description:
            "Say goodbye to traditional hiring processes. With our platform, you have the flexibility to hire on-demand, scaling your team as needed to meet project deadlines and objectives.",
          content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              Efficiency and Flexibility
            </div>
          ),
        },
        {
          title: "Quality Assurance",
          description:
            " We prioritize quality at every step of the process, offering robust vetting procedures and project management tools to ensure a seamless experience from start to finish.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
              Quality Assurance
            </div>
          ),
        },
        {
          title: "Get Started Today",
          description:
            "Ready to embark on your next project? Join our community of freelancers and clients today and experience the difference that Techno-Geeks can make for you. Let's collaborate, innovate, and achieve success together. Welcome aboard!",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              Get Started Today
            </div>
          ),
        },
      ];
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseus
