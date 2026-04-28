"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact Us", path: "#contact" }
];

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 h-16 bg-white/90 backdrop-blur-md border-b border-black/5">
      <Link href="/" className="flex items-center gap-2 text-gray-900">
        <div className="w-9 h-9 bg-[#EDE8DF] rounded-lg flex items-center justify-center text-lg">
          ⚡
        </div>
        <span className="text-lg font-semibold tracking-tight">
          KK ENTERPRISE
        </span>
      </Link>

      <div className="hidden md:flex gap-8 text-sm font-medium">
        <Link
          href="/"
          className={`hover:text-black ${pathname === "/" ? "text-black" : "text-gray-500"
            }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`hover:text-black ${pathname === "/about" ? "text-black" : "text-gray-500"
            }`}
        >
          About
        </Link>
        <Link
          href="/services"
          className={`hover:text-black ${pathname === "/services" ? "text-black" : "text-gray-500"
            }`}
        >
          Services
        </Link>
        <Link
          href="/projects"
          className={`hover:text-black ${pathname === "/projects" ? "text-black" : "text-gray-500"
            }`}
        >
          Projects
        </Link>
      </div>

      <Link
        href="#contact"
        className="hidden sm:block bg-gray-900 text-white text-xs font-medium px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
      >
        Contact Us
      </Link>

      <button className="lg:hidden" onClick={() => open ? setOpen(false) : setOpen(true)}>
        <img src="menu.png" alt="menu" className="w-6 h-6" />
      </button>

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed right-0 top-16 z-50">
          <div className="bg-white w-44 h-screen p-5">

            <div className="mt-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className="text-center border-2 border-gray-500 rounded-2xl p-2 font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}