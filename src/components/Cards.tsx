import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Cards() {
  const testimonials = [
    {
      quote:
        "I couldn&apos;t be happier with the quality of work delivered by Techno-Geeks. They went above and beyond to meet my project requirements and exceeded my expectations. Their professionalism and attention to detail were truly impressive. I highly recommend their services to anyone looking for top-notch freelancers!",
      name: "Sudhir Dey",
      title: "Senior Developer - OneWay",
    },
    {
      quote:
        "Working with Techno-Geeks was a breeze! They were incredibly efficient in completing the project and demonstrated a deep understanding of my needs. Their communication throughout the process was excellent, and they delivered results that were exactly what I was looking for. I&apos;ll definitely be hiring them again for future projects.",
      name: "Rajanya Basak",
      title: "Assistant Manager - Nexus",
    },
    {
      quote:
        "I had the pleasure of collaborating with Techno-Geeks on a design project, and I couldn&apos;t be happier with the results. Their creativity and attention to detail were exceptional, and they brought fresh ideas to the table that truly elevated the project. I look forward to working with them again in the future!",
      name: "Pratima Dev",
      title: "Sales Executive - Bryon",
    }
  ];
  return (
    <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <div className="font-bold text-3xl text-center mb-8 z-10">Let&apos;s see what others say</div>
      <div className="w-full max-w-6xl">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}
