'use client'
import { HoverEffect } from "./ui/card-hover-effect";

export default function FeaturedCard() {
    return (
        <>
        <div className="mt-12 py-12">
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">SERVICES</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Services we provide</p>
            </div>
        </div>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
        </>
      );
    }
        export const projects = [
            {
                title: "Websites",
            description:
            "We specialize in crafting captivating, high-performance websites that elevate your online presence and drive results.Let us be your partner in bringing your website dreams to reality.",
            link: "",
            },
            {
                title: "Mobile Apps",
            description:
            "We specialize in crafting dynamic and user-friendly mobile applications tailored to your unique needs.Let us be your partner in bringing your dream apps to reality.",
            link: "",
            },
            {
                title: "UI/UX Design",
            description:
            "We specialize in crafting intuitive UI/UX that elevate your digital presence.Let us be your partner in designing that captivate your audience and drive meaningful interactions.",
            link: "",
            },
            {
                title: "Data Analysis",
            description:
            "We specialize in data analysis, helping businesses derive valuable insights from their data to make informed decisions and drive growth.Let us be your partner in unlocking the full potential of your data.",
            link: "",
            },
            {
                title: "Video Editing",
            description:
            "We are passionate about storytelling through the art of video editing.Let us transform your footage into compelling visual narratives that leave a lasting impression on your audience.",
            link: "",
            },
            {
                title: "Excel Invoice",
            description:
            "We understand the importance of efficient invoicing for freelancers and businesses alike.Let us help you manage your finances efficiently so you can focus on what you do best.",
            link: "",
            },
        ];