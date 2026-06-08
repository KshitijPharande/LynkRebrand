import Link from "next/link";
import Image from "next/image";
import OrbitalDecoration from "./OrbitalDecoration";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our Work" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services#social-media", label: "Social Media Marketing" },
  { href: "/services#smo", label: "Social Media Optimization" },
  { href: "/services#branding", label: "Branding" },
  { href: "/services#content-marketing", label: "Content Marketing" },
  { href: "/services#web-development", label: "Web Development" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      <OrbitalDecoration
        className="absolute -top-20 -right-20 text-lavender"
        size={400}
        opacity={0.05}
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-12 md:py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link
              href="/"
              className="font-heading text-xl font-semibold text-lavender tracking-tight hover:text-white transition-colors duration-300"
            >
              Lynk Digital
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-[280px]">
              Empowering brands by crafting compelling digital identities, delivering cutting-edge web and UI/UX solutions.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/lynk.digital_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-lavender transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] !text-lavender">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-lavender transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] !text-lavender">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-lavender transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] !text-lavender">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-lavender shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-sm text-white/60">(+91) 8010195467</span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-lavender shrink-0">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="text-sm text-white/60">hello@lynkdigital.co.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Lynk Digital. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-lavender transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/40 hover:text-lavender transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
