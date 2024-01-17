'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
// import {SignInHelper} from "./signinhelper";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Header({children}: {children?: React.ReactNode}): React.JSX.Element {
    const pathname = usePathname()


  return (
    <header className="mx-4 flex h-16 items-center bg-[#ffffff] gap-4 px-4 text-black md:mx-8 lg:mx-16 lg:px-6">
      <Link className="flex items-center justify-center" href="/">
        <span className="ml-2 text-lg font-bold">Home</span>
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        {links.map((link, index) => (
          <Link
            key={index}
            className={`text-sm font-medium underline-offset-4 hover:underline ${pathname === link.href ? "text-gray-500" : ""}`}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
        {children}
        {/* <SignInHelper /> */}
      </nav>
    </header>
  );
};


