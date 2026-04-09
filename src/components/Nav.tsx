"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#realizacje", label: "Realizacje" },
    { href: "#klienci", label: "Klienci" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-40 bg-wero-bg border-b-2 border-wero-accent">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <Link 
            href="#" 
            className="font-bebas text-5xl leading-none text-wero-accent focus:outline-none focus:underline"
            onClick={() => window.scrollTo(0,0)}
          >
            WERO
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                className="font-bebas text-2xl tracking-wide uppercase hover:text-black transition-colors focus:outline-none focus:bg-wero-accent focus:text-wero-bg px-2"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-12 h-12 space-y-1.5 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={isOpen}
          >
            <span className={`block w-8 h-1 bg-wero-accent transition-transform ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`block w-8 h-1 bg-wero-accent transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-8 h-1 bg-wero-accent transition-transform ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-20 z-30 bg-wero-bg md:hidden border-b-2 border-wero-accent">
          <div className="flex flex-col items-center pt-16 gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-bebas text-5xl tracking-wide uppercase hover:text-black transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
