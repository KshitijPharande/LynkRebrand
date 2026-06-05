"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CTASection from "../components/CTASection";
import OrbitalDecoration from "../components/OrbitalDecoration";
import { useScrollAnimation, useScrollAnimationGroup } from "../hooks/useScrollAnimation";

const serviceDetails = [
  { id: "social-media", num: "01", title: "Social Media Marketing", desc: "We help you grow your brand, amplify your voice, and connect with your target audience through strategic social media marketing. From custom content creation and feed styling to organic community growth and paid campaign optimization, we build a strong, authentic social footprint.", features: ["Social media strategy & audit", "Content creation & grid aesthetics", "Community management & growth", "Paid campaign setup & optimization"], image: "/about-2.webp" },
  { id: "branding", num: "02", title: "Branding & Identity", desc: "We create impactful brand identities that tell your story and leave an unforgettable impression. From logo design and brand positioning to design systems, we define a cohesive visual language that communicates your core values.", features: ["Logo & visual identity design", "Brand strategy & positioning", "Color palette & typography systems", "Brand style guides & documentation"], image: "/about-4.webp" },
  { id: "digital-strategy", num: "03", title: "Digital Strategy & Consulting", desc: "We guide your business with analytical marketing strategies and digital roadmaps that get results. Our consulting helps you navigate the ever-evolving social and digital landscape with absolute clarity and measurable KPIs.", features: ["Digital performance audits", "Competitor analysis", "Marketing funnel design", "Analytics & ROI tracking"], image: "/about-3.webp" },
  { id: "seo", num: "04", title: "SEO & Content Strategy", desc: "We boost your online visibility and drive high-intent organic traffic with smart SEO audits and search-optimized content planning built for sustainable, long-term brand relevance.", features: ["Technical SEO audits", "Keyword research & strategy", "Content mapping & copy editing", "Analytics & search ranking reports"], image: "/hero-image.webp" },
  { id: "web-design", num: "05", title: "Web Design & Development", desc: "We craft visually stunning, user-friendly websites tailored to your brand goals. Our design process focuses on interactive layouts and seamless user experiences, while our developers ensure code is clean, fast, and responsive.", features: ["Responsive design for all screens", "Custom CMS & headless setups", "Speed & performance optimization", "Ongoing support & platform updates"], image: "/hero-image.webp" },
  { id: "ui-ux", num: "06", title: "UI/UX Design", desc: "We design intuitive user experiences and interfaces across web and mobile platforms. Our user-centered approach ensures every click feels natural and purposeful, building digital loyalty that lasts.", features: ["User research & wireframing", "Interactive prototyping", "Usability testing & feedback", "Design systems & component libraries"], image: "/about-1.webp" },
];

const processSteps = [
  { num: "01", title: "Discovery", desc: "Understanding your business, goals, and audience." },
  { num: "02", title: "Strategy", desc: "Developing a tailored plan to meet your objectives." },
  { num: "03", title: "Design", desc: "Crafting beautiful, purposeful digital experiences." },
  { num: "04", title: "Development", desc: "Bringing designs to life with clean, efficient code." },
  { num: "05", title: "Testing", desc: "Ensuring everything works flawlessly across platforms." },
  { num: "06", title: "Launch", desc: "Deploying your project with care and precision." },
  { num: "07", title: "Optimization", desc: "Continuous improvement for lasting performance." },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  const heroRef = useScrollAnimation();
  const detailsRef = useScrollAnimationGroup();
  const processRef = useScrollAnimationGroup();

  return (
    <>
      {/* ══════════════════════════════════════
          HERO
          ══════════════════════════════════════ */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/about-2.webp" alt="" fill className="object-cover" priority quality={85} />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/70 to-cream/30" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 w-full pb-16 md:pb-20">
          <div ref={heroRef} className="scroll-fade max-w-2xl">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.3em] text-navy/50 mb-6">
              Our Services
            </p>
            <h1 className="font-heading text-[2.75rem] md:text-[4rem] lg:text-[5rem] font-semibold leading-[1.05] text-navy mb-6">
              Social strategies,<br />
              <em className="gradient-text">intentionally crafted.</em>
            </h1>
            <p className="text-muted text-base md:text-lg leading-[1.85] max-w-lg">
              From scroll-stopping social media and strategic branding to high-converting web experiences — we connect all your digital touchpoints.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICE DETAILS — Alternating editorial
          ══════════════════════════════════════ */}
      <section className="py-24 md:py-36">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div ref={detailsRef}>
            {serviceDetails.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-fade stagger-${Math.min(i + 1, 4)} border-b border-navy/8 py-16 md:py-20 first:pt-0 last:border-b-0`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "direction-rtl" : ""}`}>
                  {/* Image */}
                  <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative overflow-hidden rounded-2xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={500}
                        height={400}
                        className="w-full h-[280px] md:h-[360px] object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                    <span className="text-[0.75rem] font-medium uppercase tracking-[0.2em] text-lavender-dark mb-3 block">
                      {service.num}
                    </span>
                    <h2 className="font-heading text-[1.75rem] md:text-[2.25rem] font-semibold text-navy mb-5 leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-muted text-[0.9375rem] md:text-base leading-[1.85] mb-6">
                      {service.desc}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0" />
                          <span className="text-charcoal text-sm leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-navy hover:text-navy-light transition-colors duration-300 border-b border-navy/30 pb-0.5">
                      Get Started →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROCESS — Minimal timeline
          ══════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-cream-dark/30 relative overflow-hidden">
        <OrbitalDecoration className="absolute -bottom-20 -right-20 text-navy" size={400} opacity={0.03} />

        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="max-w-xl mb-16 md:mb-20">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.3em] text-navy/50 mb-4">
              Our Approach
            </p>
            <h2 className="font-heading text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-semibold text-navy leading-[1.1]">
              A process built on<br />
              <em className="gradient-text">clarity & craft.</em>
            </h2>
          </div>

          <div ref={processRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {processSteps.map((step, i) => (
              <div key={step.num} className={`scroll-fade stagger-${Math.min(i + 1, 6)}`}>
                <div className="flex items-start gap-5">
                  <span className="font-heading text-[2.5rem] font-semibold text-lavender-light leading-none shrink-0">
                    {step.num}
                  </span>
                  <div className="pt-2">
                    <h3 className="font-heading text-xl font-semibold text-navy mb-2">{step.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection secondaryLabel="Learn About Us" secondaryHref="/about" />
    </>
  );
}
