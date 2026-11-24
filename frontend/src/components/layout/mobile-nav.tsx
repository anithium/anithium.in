"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "What we do", href: "#services" },
  { label: "How we work", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "Start a project", href: "#contact" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-menu relative md:hidden" onKeyDown={(event) => {
      if (event.key === "Escape") setIsOpen(false);
    }}>
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-11 w-11 cursor-pointer items-center justify-center border border-[#1d201d]/25 text-[#1d201d] transition hover:border-[#b64d32] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b64d32]"
      >
        {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
      </button>
      <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!isOpen} className={`absolute right-0 top-14 w-56 flex-col border border-[#1d201d]/20 bg-[#e9e6de] p-2 shadow-xl ${isOpen ? "flex" : "hidden"}`}>
          {links.map((link) => (
            <a key={link.href} className="menu-link" href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
      </nav>
    </div>
  );
}
