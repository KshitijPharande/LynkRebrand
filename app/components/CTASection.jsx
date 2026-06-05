"use client";

import Link from "next/link";
import OrbitalDecoration from "./OrbitalDecoration";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function CTASection({
  title = "Ready to Transform Your Digital Presence?",
  description = "Let's collaborate to create digital experiences that captivate your audience and drive real results for your business.",
  primaryLabel = "Get in Touch",
  primaryHref = "/contact",
  secondaryLabel = "Explore Services",
  secondaryHref = "/services",
}) {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 md:py-section px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div
          ref={ref}
          className="scroll-fade relative bg-navy rounded-2xl overflow-hidden py-16 md:py-20 px-8 md:px-16 lg:px-24 text-center"
        >
          <OrbitalDecoration
            className="absolute -bottom-16 -left-16 text-lavender"
            size={300}
            opacity={0.08}
          />
          <OrbitalDecoration
            className="absolute -top-16 -right-16 text-lavender"
            size={300}
            opacity={0.08}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-semibold !text-white mb-5 leading-tight">
              {title}
            </h2>
            <p className="text-base md:text-lg !text-white/70 mb-10 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-8 bg-lavender !text-navy text-[0.8125rem] font-medium uppercase tracking-[0.1em] rounded transition-all duration-300 hover:bg-lavender-light"
              >
                {primaryLabel}
                <span>→</span>
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-8 !border !border-white/40 !text-white text-[0.8125rem] font-medium uppercase tracking-[0.1em] rounded transition-all duration-300 hover:bg-white/10 hover:border-white/60"
              >
                {secondaryLabel}
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
