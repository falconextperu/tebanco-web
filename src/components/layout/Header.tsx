"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? "hidden" : "";
      return next;
    });
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Servicios", href: "/servicios" },
    { name: "Inversionistas", href: "/inversionistas" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-[9000] flex items-center border-b border-white/5 bg-[#11152a] transition-all duration-300 ${
          isScrolled ? "h-[70px] shadow-[0_4px_25px_rgba(0,0,0,0.25)]" : "h-[90px]"
        }`}
      >
        <div className="container flex w-full items-center justify-between">

          <Link
            href="/"
            onClick={closeMenu}
            className="z-[1050] flex items-center gap-3 text-[1.4rem] font-bold tracking-[0.5px] text-white"
          >
            <span className="flex h-[50px] w-[130px] items-center justify-center">
              <img
                src="/svg/fluxalogo.svg"
                alt="Fluxa Logo"
                className="h-full w-full object-contain"
              />
            </span>
          </Link>

          <nav className={`${isMobile ? "hidden" : "flex"} gap-8`}>
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-1 text-[0.9rem] transition-colors hover:text-white ${isActive ? "font-bold text-white" : "font-normal text-white/80"}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="z-[1050] flex items-center gap-4">
            <a
              href="/contacto"
              className={`rounded-full bg-[linear-gradient(90deg,#66007E_0%,#B900E4_100%)] px-6 py-2.5 text-[0.9rem] font-bold text-white ${
                isMobile ? "hidden" : "inline-flex"
              }`}
            >
              Habla con un asesor
            </a>

            <button
              onClick={toggleMobileMenu}
              className={`cursor-pointer border-none bg-transparent text-white ${
                isMobile ? "inline-flex" : "hidden"
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed bottom-0 left-0 right-0 z-[8999] overflow-y-auto bg-[#11152a] transition-all duration-300 ${
          isMobile ? "block" : "hidden"
        } ${isMobileMenuOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"} ${
          isScrolled ? "top-[70px]" : "top-[90px]"
        }`}
      >
        <nav className="flex flex-col gap-7 px-8 py-10">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={`border-b border-white/10 pb-4 text-[1.2rem] text-white ${isActive ? "font-bold" : "font-medium"}`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="mt-4">
            <a
              href="/contacto"
              onClick={closeMenu}
              className="flex w-full items-center justify-center rounded-lg bg-[linear-gradient(90deg,#66007E_0%,#B900E4_100%)] p-4 text-base font-semibold text-white"
            >
              Habla con un asesor
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};
