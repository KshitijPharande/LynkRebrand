"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CTASection from "../components/CTASection";
import OrbitalDecoration from "../components/OrbitalDecoration";
import { useScrollAnimation, useScrollAnimationGroup } from "../hooks/useScrollAnimation";

const projects = [
  {
    title: "Tatva",
    category: "Branding & Web Development",
    type: "live",
    url: "https://tatva-ochre.vercel.app/",
    desc: "A premium, minimalist branding and digital web experience designed for an intentional design agency.",
    tags: ["Next.js", "Tailwind CSS", "Editorial"],
    image: "/tatva.png",
  },
  {
    title: "SK Physio Fit",
    category: "Health & Wellness Portal",
    type: "live",
    url: "https://www.skphysiofit.com/",
    desc: "A clean, functional, and responsive digital platform for a specialized physiotherapy and rehabilitation clinic.",
    tags: ["React", "UI/UX Design", "Patient Care"],
    image: "/skphysiofit.png",
  },
  {
    title: "Columbus Tours",
    category: "Travel & Booking Platform",
    type: "live",
    url: "https://www.columbustours.in/",
    desc: "An immersive travel platform offering curated tour packages and seamless reservation inquiries.",
    tags: ["Next.js", "Tailwind CSS", "Booking API"],
    image: "/columbustours.png",
  },
  {
    title: "The Coffee Lab",
    category: "Food & Beverage Concept",
    type: "demo",
    url: "https://the-coffee-lab-ochre.vercel.app/",
    desc: "A sensory web experience designed for a craft coffee roastery and experimental café.",
    tags: ["Framer Motion", "Interactive Shop", "Branding"],
    image: "/thecoffeelab.png",
  },
  {
    title: "Brew & Blossom",
    category: "Artisanal Florist & Café",
    type: "demo",
    url: "https://brewand-blossom.vercel.app/",
    desc: "An elegant, botanically inspired web template for a boutique floral studio and café space.",
    tags: ["React", "CSS Grid", "E-commerce Layout"],
    image: "/brewandblossom.png",
  },
  {
    title: "Apex Academy",
    category: "Education & Learning Portal",
    type: "demo",
    url: "https://apex-academy-jade.vercel.app/",
    desc: "A clean and accessible user interface design for an advanced training academy and student courses.",
    tags: ["UI/UX", "Course Management", "Responsive"],
    image: "/apexacademy.png",
  },
  {
    title: "Gym Template",
    category: "Fitness & Training Center",
    type: "demo",
    url: "https://gym-template-snowy.vercel.app/",
    desc: "A bold, high-energy web template built for modern fitness studios and personal trainers.",
    tags: ["Next.js", "Dynamic Forms", "Tailwind"],
    image: "/powerfit.png",
  },
  {
    title: "Rainostora",
    category: "E-Commerce Store",
    type: "live",
    url: "https://www.rainostora.com/",
    desc: "A fully custom digital store providing a modern, seamless retail shopping experience.",
    tags: ["Next.js", "Payment Gateways", "Cart Logic"],
    image: "/rainostra.png",
  },
  {
    title: "Resun Technology",
    category: "Corporate Tech Website",
    type: "live",
    url: "https://www.resuntechnology.com/",
    desc: "A precise, high-performance corporate landing page and service showcase for an IT solutions firm.",
    tags: ["React", "B2B Tech", "Portfolio"],
    image: "/resuntech.png",
  },
  {
    title: "Khajina",
    category: "Gourmet & Organic Store",
    type: "live",
    url: "https://www.khajina.com/",
    desc: "An authentic, heritage-focused digital platform displaying premium local delicacies and organic products.",
    tags: ["Next.js", "Storefront", "SEO"],
    image: "/khajina.png",
  },
  {
    title: "Silkroute Creations",
    category: "Social Media Marketing",
    type: "social",
    url: "https://www.instagram.com/",
    desc: "Comprehensive social media marketing strategy, visual curation, and content styling for an artisanal fashion and lifestyle brand.",
    tags: ["Social Strategy", "Grid Styling", "Content Curation"],
    image: "/about-1.webp",
  },
  {
    title: "Silkroute Exhibitors",
    category: "Event Marketing & Social Media",
    type: "social",
    url: "https://www.instagram.com/",
    desc: "Targeted event campaigns, real-time social coverage, and community engagement for high-end boutique exhibitions.",
    tags: ["Campaign Design", "Event Promotion", "Engagement"],
    image: "/about-2.webp",
  },
  {
    title: "Bellissimaa Boutique",
    category: "Social Media & Branding",
    type: "social",
    url: "https://www.instagram.com/",
    desc: "Bespoke social media management, aesthetic content creation, and organic growth campaigns for a luxury fashion boutique.",
    tags: ["Instagram Growth", "Aesthetic Curation", "Copywriting"],
    image: "/about-3.webp",
  },
];

export default function WorkPage() {
  const [filter, setFilter] = useState("all");
  const heroRef = useScrollAnimation();
  const gridRef = useScrollAnimationGroup({}, [filter]);

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.type === filter;
  });

  return (
    <>
      {/* ══════════════════════════════════════
          HERO
          ══════════════════════════════════════ */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cream-dark/20">
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/80 to-transparent" />
        </div>
        <OrbitalDecoration className="absolute -top-10 -right-10 text-navy" size={400} opacity={0.03} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 w-full pt-28 md:pt-36 pb-12">
          <div ref={heroRef} className="scroll-fade max-w-2xl">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.3em] text-navy/50 mb-6">
              Our Work
            </p>
            <h1 className="font-heading text-[2.75rem] md:text-[4rem] lg:text-[5rem] font-semibold leading-[1.05] text-navy mb-6">
              Digital craft,<br />
              <em className="gradient-text">made to resonate.</em>
            </h1>
            <p className="text-muted text-base md:text-lg leading-[1.85] max-w-lg">
              A curated collection of live client websites and interactive design prototypes crafted with minimal design and functional precision.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PORTFOLIO FILTER & GRID
          ══════════════════════════════════════ */}
      <section className="pb-24 md:pb-36 pt-8 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 border-b border-navy/10 pb-6 mb-12">
            {[
              { id: "all", label: "All Work" },
              { id: "live", label: "Live Client Sites" },
              { id: "social", label: "Social Media Clients" },
              { id: "demo", label: "Concept Demos" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`py-2 px-5 text-[0.75rem] font-medium tracking-[0.1em] uppercase transition-all duration-300 rounded-full border ${
                  filter === tab.id
                    ? "bg-navy text-white border-navy"
                    : "bg-transparent text-navy/60 border-navy/10 hover:border-navy/30 hover:text-navy"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
            key={filter} /* force animation group reset on filter change */
          >
            {filteredProjects.map((project, i) => (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                key={project.title}
                className={`scroll-fade stagger-${(i % 4) + 1} group flex flex-col bg-cream-light/40 border border-navy/5 rounded-2xl overflow-hidden card-hover`}
              >
                {/* Visual Backdrop */}
                <div className="relative h-[240px] md:h-[280px] w-full overflow-hidden bg-navy/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-w: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-xs">
                    <span className="bg-cream text-navy font-body text-xs font-semibold uppercase tracking-[0.15em] py-2.5 px-6 rounded-full shadow-lg">
                      {project.type === "live"
                        ? "Visit Live Site ↗"
                        : project.type === "social"
                        ? "View Instagram ↗"
                        : "View Interactive Demo ↗"}
                    </span>
                  </div>
                  {/* Badge */}
                  <span className="absolute top-4 left-4 text-[0.5625rem] font-semibold uppercase tracking-[0.15em] bg-cream text-navy/80 py-1.5 px-3 rounded-md shadow-sm">
                    {project.type === "live"
                      ? "Live Site"
                      : project.type === "social"
                      ? "Social Client"
                      : "Concept Demo"}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-lavender-dark block mb-2">
                      {project.category}
                    </span>
                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-navy mb-3 group-hover:text-navy-light transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-6">
                      {project.desc}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.625rem] font-medium text-navy/70 bg-navy/5 px-2.5 py-1 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Have a Vision in Mind?"
        description="Let's build a purposeful, high-performing digital space for your brand."
      />
    </>
  );
}
