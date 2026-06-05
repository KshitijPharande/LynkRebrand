"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import OrbitalDecoration from "./components/OrbitalDecoration";
import CTASection from "./components/CTASection";
import { useScrollAnimation, useScrollAnimationGroup } from "./hooks/useScrollAnimation";

/* ============================================
   Service data
   ============================================ */
const services = [
  {
    num: "01",
    title: "Social Media Marketing",
    desc: "Strategic campaigns that amplify your voice, build active communities, and drive meaningful audience connections.",
    link: "/services#social-media",
  },
  {
    num: "02",
    title: "Social Media Optimization",
    desc: "Optimizing profiles, content distribution, and metadata to maximize organic reach and searchability across social channels.",
    link: "/services#smo",
  },
  {
    num: "03",
    title: "Branding",
    desc: "Compelling brand identities, visual styling, and brand guidelines that tell your story and leave a lasting impression.",
    link: "/services#branding",
  },
  {
    num: "04",
    title: "Content Marketing",
    desc: "High-value, engaging copy, graphics, and video content tailored to inform, educate, and convert your target audience.",
    link: "/services#content-marketing",
  },
  {
    num: "05",
    title: "Web Development",
    desc: "Custom, high-performing websites and digital platforms built to convert visitors and serve as your digital home.",
    link: "/services#web-development",
  },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const servicesRef = useScrollAnimationGroup();
  const aboutRef = useScrollAnimationGroup();
  const philosophyRef = useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ══════════════════════════════════════
          HERO — Full viewport, bg image, Tatva-style
          ══════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
        {/* Background Image with low opacity */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg-marketing-v5.png"
            alt=""
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream/30 via-cream/40 to-cream/50" />
        </div>

        {/* Content */}
        <div
          className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 w-full pt-28 pb-12"
          style={{ transform: `translateY(${scrollY * 0.08}px)`, opacity: Math.max(0, 1 - scrollY / 600) }}
        >
          {/* Label */}
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.3em] text-navy/60 mb-6 md:mb-8">
            ESTD. 2025 — A Social Media & Branding Agency for Intentional Brands
          </p>

          {/* Main heading */}
          <h1 className="font-heading font-semibold text-navy leading-[1.05] mb-8">
            <span className="block text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem]">
              Ideas that ask
            </span>
            <span className="block text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem]">
              <em className="gradient-text">to be</em>{" "}
              <em className="gradient-text">experienced</em>
            </span>
            <span className="block text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem]">
              digitally.
            </span>
          </h1>

          {/* Body text */}
          <p className="max-w-lg text-base md:text-[1.0625rem] text-charcoal/80 leading-[1.8] mb-8">
            Lynk Digital is a social-first digital agency — a quiet force for brands that value
            clarity, organic engagement, and the kind of strategy you feel in every post, every word,
            every connection.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-6">
            <Link href="/contact" className="btn-primary">
              Start a Project →
            </Link>
            <Link
              href="/services"
              className="text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-navy/70 hover:text-navy transition-colors duration-300 border-b border-navy/30 pb-0.5"
            >
              Explore Services
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="mt-10 md:mt-14">
            <p className="text-[0.625rem] font-medium uppercase tracking-[0.3em] text-navy/40 flex items-center gap-2">
              <span>↓</span> Scroll
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES — Editorial list, NOT card grid
          ══════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
            <div>
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.3em] text-navy/50 mb-4">
                What We Do
              </p>
              <h2 className="font-heading text-[2.25rem] md:text-[3rem] lg:text-[3.5rem] font-semibold text-navy leading-[1.1]">
                Services crafted with
                <br />
                <em className="gradient-text">intention & precision.</em>
              </h2>
            </div>
            <Link
              href="/services"
              className="text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-navy/70 hover:text-navy transition-colors duration-300 border-b border-navy/30 pb-0.5 self-start md:self-auto shrink-0"
            >
              View All Services →
            </Link>
          </div>

          {/* Editorial service list */}
          <div ref={servicesRef} className="border-t border-navy/10">
            {services.map((service, i) => (
              <Link
                href={service.link}
                key={service.num}
                className={`scroll-fade stagger-${i + 1} group block border-b border-navy/10 py-8 md:py-10 transition-colors duration-500 hover:bg-cream-dark/30`}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
                  <span className="text-[0.75rem] font-medium uppercase tracking-[0.2em] text-lavender-dark w-12 shrink-0">
                    {service.num}
                  </span>
                  <h3 className="font-heading text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] font-semibold text-navy flex-1 group-hover:text-navy-light transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm md:text-[0.9375rem] leading-relaxed max-w-sm flex-shrink-0 hidden lg:block">
                    {service.desc}
                  </p>
                  <span className="text-navy/30 group-hover:text-navy group-hover:translate-x-2 transition-all duration-300 text-xl hidden md:block">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT PREVIEW — Large image + editorial text, Brew-style
          ══════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-cream-dark/30">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div ref={aboutRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Image — large, editorial */}
            <div className="scroll-fade-left lg:col-span-7">
              <div className="relative">
                <div className="absolute -inset-6 bg-lavender/5 rounded-3xl" />
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/hero-image.webp"
                    alt="Lynk Digital creative workspace"
                    width={800}
                    height={550}
                    className="w-full h-[350px] md:h-[500px] lg:h-[550px] object-cover"
                  />
                </div>
                {/* Floating label */}
                <div className="absolute -bottom-6 -right-4 md:right-8 bg-navy text-white px-6 py-4 rounded-xl shadow-lg">
                  <p className="text-[0.625rem] uppercase tracking-[0.25em] text-lavender mb-1">Founded</p>
                  <p className="font-heading text-2xl font-semibold">2025</p>
                </div>
              </div>
            </div>

            {/* Text — editorial */}
            <div className="scroll-fade-right lg:col-span-5">
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.3em] text-navy/50 mb-6">
                Our Story
              </p>
              <h2 className="font-heading text-[2rem] md:text-[2.5rem] font-semibold text-navy leading-[1.15] mb-6">
                Born from a belief that brands deserve{" "}
                <em className="gradient-text">more than noise.</em>
              </h2>
              <p className="text-muted text-[0.9375rem] md:text-base leading-[1.85] mb-6">
                Lynk Digital started with a quiet conviction: that brand marketing and social media should feel
                intentional — not manufactured. We believe in building digital connections that matter.
              </p>
              <p className="text-muted text-[0.9375rem] md:text-base leading-[1.85] mb-10">
                Today, we're a team of strategists, designers, and developers who believe
                that the best work happens at the intersection of creativity and clarity.
              </p>
              <Link
                href="/about"
                className="text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-navy hover:text-navy-light transition-colors duration-300 border-b border-navy/30 pb-0.5"
              >
                Read Our Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PHILOSOPHY — Full width editorial text
          ══════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-cream-dark/30 relative overflow-hidden">
        <OrbitalDecoration className="absolute top-10 right-[5%] text-navy" size={500} opacity={0.03} />

        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div ref={philosophyRef} className="scroll-fade max-w-3xl">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.3em] text-navy/50 mb-6">
              Our Philosophy
            </p>
            <blockquote className="font-heading text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] font-medium text-navy leading-[1.3] mb-8">
              <em>
                "We don't do marketing that shouts. We build digital presences that{" "}
                <span className="gradient-text">speak quietly and stay remembered.</span>"
              </em>
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-navy/20" />
              <p className="text-[0.8125rem] text-muted">
                <span className="text-navy font-medium">Team Lynk</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA
          ══════════════════════════════════════ */}
      <CTASection />
    </>
  );
}
