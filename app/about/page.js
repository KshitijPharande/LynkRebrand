"use client";

import Image from "next/image";
import Link from "next/link";
import CTASection from "../components/CTASection";
import OrbitalDecoration from "../components/OrbitalDecoration";
import { useScrollAnimation, useScrollAnimationGroup } from "../hooks/useScrollAnimation";

const values = [
  { title: "Innovation", desc: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions." },
  { title: "Collaboration", desc: "We believe in working closely with our clients — their vision is our blueprint." },
  { title: "Excellence", desc: "We are committed to exceptional quality in every pixel, every word, every interaction." },
  { title: "Results-Driven", desc: "We focus on creating solutions that drive real, measurable outcomes." },
];

export default function AboutPage() {
  const heroRef = useScrollAnimation();
  const storyRef = useScrollAnimationGroup();
  const uspsRef = useScrollAnimationGroup();
  const valuesRef = useScrollAnimationGroup();

  return (
    <>
      {/* ══════════════════════════════════════
          HERO — Full height editorial
          ══════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/about-1.webp" alt="" fill className="object-cover" priority quality={85} />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/70 to-cream/30" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 w-full pt-28 md:pt-36 pb-16 md:pb-20">
          <div ref={heroRef} className="scroll-fade max-w-2xl">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.3em] text-navy/50 mb-6">
              About Us
            </p>
            <h1 className="font-heading text-[2.75rem] md:text-[4rem] lg:text-[5rem] font-semibold leading-[1.05] text-navy mb-6">
              We build what<br />
              <em className="gradient-text">brands feel.</em>
            </h1>
            <p className="text-muted text-base md:text-lg leading-[1.85] max-w-lg">
              Not just campaigns. Not just post templates. We build the authentic social connections
              and branding that carry a business into the future.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          OUR STORY — Long editorial section
          ══════════════════════════════════════ */}
      <section className="py-24 md:py-36">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div ref={storyRef} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="scroll-fade lg:col-span-4">
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.3em] text-navy/50 mb-4">
                Our Origin
              </p>
              <h2 className="font-heading text-[2rem] md:text-[2.5rem] font-semibold text-navy leading-[1.15] mb-4">
                Started with a<br />
                <em className="gradient-text">simple belief.</em>
              </h2>
              <div className="w-16 h-px bg-navy/15 mt-6" />
            </div>
            <div className="scroll-fade-right lg:col-span-8 space-y-6">
              <p className="text-charcoal text-[1.0625rem] md:text-lg leading-[1.9]">
                When Lynk Digital was founded, it wasn't just about posting content or running campaigns. It was about creating a space where businesses could find clarity in the chaos of the digital world a place where social strategy meets design artistry.
              </p>
              <p className="text-charcoal text-[1.0625rem] md:text-lg leading-[1.9]">
                We saw something most agencies were missing: authenticity with an edge. Not louder. Not flashier. But intentional, elevated, and quietly powerful the kind of marketing that doesn't just capture attention, but holds it.
              </p>
              <p className="text-charcoal text-[1.0625rem] md:text-lg leading-[1.9]">
                Today, Lynk Digital is a team of strategists, designers, developers, and storytellers who believe that the best digital work happens at the intersection of creativity and clarity. We don't chase trends we set them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY LYNK DIGITAL — The Lynk Difference
          ══════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-cream-dark/30 relative overflow-hidden">
        <OrbitalDecoration className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-navy" size={600} opacity={0.02} />
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.3em] text-navy/50 mb-4">
              Why Lynk Digital
            </p>
            <h2 className="font-heading text-[2.25rem] md:text-[3rem] font-semibold text-navy leading-[1.1] mb-6">
              Marketing with intention.<br />
              <em className="gradient-text">Results with clarity.</em>
            </h2>
            <p className="text-muted text-sm md:text-base leading-relaxed">
              We believe digital experiences should feel natural, purposeful, and effective. Here is how we do things differently to help your brand grow sustainably.
            </p>
          </div>

          <div ref={uspsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* USP 1 */}
            <div className="scroll-fade stagger-1 bg-cream-light/60 border border-navy/5 rounded-2xl p-8 md:p-10 card-hover">
              <span className="font-heading text-[2.5rem] font-semibold text-lavender leading-none block mb-6">01</span>
              <h3 className="font-heading text-2xl font-semibold text-navy mb-4">Intentional Growth</h3>
              <p className="text-muted text-sm md:text-[0.9375rem] leading-relaxed">
                We don’t chase vanity metrics or manufacture short-lived hype. We focus on building authentic connection, organic community engagement, and long-term marketing strategies that translate directly into business value.
              </p>
            </div>

            {/* USP 2 */}
            <div className="scroll-fade stagger-2 bg-cream-light/60 border border-navy/5 rounded-2xl p-8 md:p-10 card-hover">
              <span className="font-heading text-[2.5rem] font-semibold text-lavender leading-none block mb-6">02</span>
              <h3 className="font-heading text-2xl font-semibold text-navy mb-4">Connected Ecosystems</h3>
              <p className="text-muted text-sm md:text-[0.9375rem] leading-relaxed">
                Your web design, branding, and marketing should work in harmony. We approach branding holistically, ensuring every digital touchpoint aligns perfectly with your overall business goals and delivers a cohesive user experience.
              </p>
            </div>

            {/* USP 3 */}
            <div className="scroll-fade stagger-3 bg-cream-light/60 border border-navy/5 rounded-2xl p-8 md:p-10 card-hover">
              <span className="font-heading text-[2.5rem] font-semibold text-lavender leading-none block mb-6">03</span>
              <h3 className="font-heading text-2xl font-semibold text-navy mb-4">Data-Backed Clarity</h3>
              <p className="text-muted text-sm md:text-[0.9375rem] leading-relaxed">
                We balance bold, high-end creativity with data-driven precision. By tracking user behavior and campaign analytics closely, we continually refine our strategies to ensure you see real, measurable progress.
              </p>
            </div>

            {/* USP 4 */}
            <div className="scroll-fade stagger-4 bg-cream-light/60 border border-navy/5 rounded-2xl p-8 md:p-10 card-hover">
              <span className="font-heading text-[2.5rem] font-semibold text-lavender leading-none block mb-6">04</span>
              <h3 className="font-heading text-2xl font-semibold text-navy mb-4">Extension of Your Team</h3>
              <p className="text-muted text-sm md:text-[0.9375rem] leading-relaxed">
                We act as a committed partner, not just a service provider. We take the time to understand your values and operational workflow, aligning ourselves closely to bring your long-term vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MISSION & VALUES — Editorial columns
          ══════════════════════════════════════ */}
      <section className="py-24 md:py-36">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          {/* Mission statement — Large editorial text */}
          <div className="max-w-3xl mb-20 md:mb-28">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.3em] text-navy/50 mb-6">
              Our Mission
            </p>
            <h2 className="font-heading text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] font-medium text-navy leading-[1.3]">
              <em>
                We empower brands by crafting compelling digital identities, delivering
                cutting-edge solutions, and executing strategies that drive{" "}
                <span className="gradient-text">engagement, growth, and lasting impact.</span>
              </em>
            </h2>
          </div>

          {/* Values — Horizontal list */}
          <div>
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.3em] text-navy/50 mb-10">
              Our Values
            </p>
            <div ref={valuesRef} className="border-t border-navy/10">
              {values.map((v, i) => (
                <div key={v.title} className={`scroll-fade stagger-${i + 1} border-b border-navy/10 py-8 md:py-10`}>
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-16">
                    <span className="text-[0.75rem] font-medium uppercase tracking-[0.2em] text-lavender-dark w-8 shrink-0">
                      0{i + 1}
                    </span>
                    <h3 className="font-heading text-[1.5rem] md:text-[1.75rem] font-semibold text-navy md:w-64 shrink-0">
                      {v.title}
                    </h3>
                    <p className="text-muted text-[0.9375rem] leading-[1.85] flex-1">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* CTA */}
      <CTASection title="Ready to Work Together?" description="We'd love to hear about your project. Let's create something remarkable." />
    </>
  );
}
