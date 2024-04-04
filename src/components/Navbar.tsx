'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null)
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">

            </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Services">
        <div className="flex flex-col text-md space-y-4">
            <HoveredLink href="/services">Websites</HoveredLink>
            <HoveredLink href="/services">Mobile Apps</HoveredLink>
            <HoveredLink href="/services">UI/UX Design</HoveredLink>
            <HoveredLink href="/services">Video Editing</HoveredLink>
            <HoveredLink href="/services">Excel Invoice</HoveredLink>
            <HoveredLink href="/services">Poster Making</HoveredLink>
        </div>
        </MenuItem>
        <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact">
                <div className="flex flex-col text-md space-y-4">
                    <HoveredLink href="/contact">Email</HoveredLink>
                    <HoveredLink href="/contact">Instagram</HoveredLink>
                    <HoveredLink href="/contact">LinkedIn</HoveredLink>
                </div>
            </MenuItem>
        </Link>
        <Link href={"/team"}>
            <MenuItem setActive={setActive} active={active} item="Team"></MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default Navbar
