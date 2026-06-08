"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        mobileOpen
          ? "bg-cream"
          : scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-nav"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-50">
        <div className="flex items-center justify-between h-[72px] md:h-[80px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/lynk-logo-v2.webp"
              alt="Lynk Digital"
              width={114}
              height={60}
              className="h-10 md:h-12 w-auto object-contain"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Nav — editorial style */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[0.6875rem] font-medium uppercase tracking-[0.2em] transition-colors duration-300 py-1 ${
                  pathname === link.href
                    ? "text-navy"
                    : "text-navy/40 hover:text-navy"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-0.5 left-0 w-full h-px bg-navy" />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-[0.6875rem] font-medium uppercase tracking-[0.15em] text-navy border border-navy/20 px-5 py-2 transition-all duration-300 hover:bg-navy hover:text-white hover:border-navy"
            >
              Start a Project
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-navy relative z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {mobileOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="14" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 bottom-0 top-[72px] bg-cream z-40 transition-transform duration-500 ease-in-out ${
          mobileOpen
            ? "translate-y-0 visible"
            : "-translate-y-full invisible"
        }`}
      >
        <nav className="flex flex-col items-start justify-center h-full px-10 gap-1 -mt-24">
          <p className="text-[0.5625rem] font-medium uppercase tracking-[0.3em] text-navy/30 mb-6">
            Navigation
          </p>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-heading text-[2.5rem] font-semibold transition-all duration-500 leading-[1.3] ${
                mobileOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              } ${pathname === link.href ? "text-navy" : "text-navy/30 hover:text-navy"}`}
              style={{ transitionDelay: mobileOpen ? `${i * 80 + 100}ms` : "0ms" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8">
            <Link
              href="/contact"
              className={`btn-primary transition-all duration-500 ${
                mobileOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: mobileOpen ? "500ms" : "0ms" }}
              onClick={() => setMobileOpen(false)}
            >
              Start a Project →
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
