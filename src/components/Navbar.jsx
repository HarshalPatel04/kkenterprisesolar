"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

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

      <div className="hidden md:flex gap-8 text-sm font-medium items-center">

        <Link
          href="/"
          className={`hover:text-black ${pathname === "/" ? "text-black" : "text-gray-500"
            }`}
        >
          Home
        </Link>

        {/* SERVICES DROPDOWN */}
        <div className="relative group">
          <Link
            href="/services"
            className={`hover:text-black py-4 ${pathname.startsWith("/services") ? "text-black" : "text-gray-500"
              }`}
          >
            Services
          </Link>

          {/* Dropdown */}
          <div className="absolute left-0 top-7 hidden group-hover:flex flex-col bg-white shadow-lg border border-gray-200 rounded-md py-2 w-40">

            <Link
              href="/services/residential"
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-black"
            >
              Residential
            </Link>

            <Link
              href="/services/commercial"
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-black"
            >
              Commercial
            </Link>

          </div>
        </div>

        <Link
          href="/projects"
          className={`hover:text-black ${pathname === "/projects" ? "text-black" : "text-gray-500"
            }`}
        >
          Projects
        </Link>

        <Link
          href="/about"
          className={`hover:text-black ${pathname === "/about" ? "text-black" : "text-gray-500"
            }`}
        >
          About
        </Link>

      </div>

      <Link
        href="#contact"
        className="hidden sm:block bg-gray-900 text-white text-xs font-medium px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
      >
        Contact Us
      </Link>

      <button className="lg:hidden" onClick={() => open ? setOpen(false) : setOpen(true)}>
        <img src="/menu.png" alt="menu" className="w-6 h-6" />
      </button>

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed right-0 top-16 z-50">
          <div className="bg-white w-56 h-screen p-5 shadow-lg">

            <div className="mt-6 flex flex-col gap-4">

              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="text-center border-2 border-gray-500 rounded-2xl p-2 font-medium"
              >
                Home
              </Link>

              {/* SERVICES MOBILE DROPDOWN */}
              <div className="border-2 border-gray-500 rounded-2xl">

                <button
                  onClick={() => setServiceOpen(!serviceOpen)}
                  className="w-full p-2 font-medium"
                >
                  <Link href="/services">Services</Link>
                  <span className="fixed right-10">{serviceOpen ? "−" : "+"}</span>
                </button>

                {serviceOpen && (
                  <div className="flex flex-col border-t border-gray-300">

                    <Link
                      href="/services/residential"
                      onClick={() => setOpen(false)}
                      className="p-2 text-sm text-gray-600 hover:bg-gray-100"
                    >
                      Residential
                    </Link>

                    <Link
                      href="/services/commercial"
                      onClick={() => setOpen(false)}
                      className="p-2 text-sm text-gray-600 hover:bg-gray-100"
                    >
                      Commercial
                    </Link>

                  </div>
                )}

              </div>

              <Link
                href="/projects"
                onClick={() => setOpen(false)}
                className="text-center border-2 border-gray-500 rounded-2xl p-2 font-medium"
              >
                Projects
              </Link>

              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="text-center border-2 border-gray-500 rounded-2xl p-2 font-medium"
              >
                About Us
              </Link>

              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="text-center border-2 border-gray-500 rounded-2xl p-2 font-medium"
              >
                Contact Us
              </Link>

            </div>
          </div>
        </div>
      )}
    </nav>
  );
}