"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "../lib/utils";
import { Menu, X, Bone } from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Sobre mí", href: "#about" },
  { name: "Proyectos", href: "#projects" },
  { name: "Testimonios", href: "#testimonials" },
  { name: "Experiencia", href: "#experience" },
  { name: "Datos de Perros", href: "#dog-facts" },
  { name: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ",
        scrolled
          ? "bg-amber-600 backdrop-blur-sm shadow-md"
          : "bg-amber-600/80 backdrop-blur-sm"
      )}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="#" className="flex items-center space-x-2">
            <Bone className="h-8 w-8 text-white" />
            <span className="text-xl font-bold text-white">JMVFolio</span>
          </Link>

          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-white hover:text-amber-200 font-medium transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-amber-700 rounded-lg shadow-lg">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name} className="px-4">
                  <Link
                    href={link.href}
                    className="block text-white hover:text-amber-200 font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
