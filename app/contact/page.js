"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OrbitalDecoration from "../components/OrbitalDecoration";
import { useScrollAnimation, useScrollAnimationGroup } from "../hooks/useScrollAnimation";

const faqs = [
  { q: "What is your typical process for a new project?", a: "We start with a discovery phase to understand your goals, then move through strategy, design, development, testing, and launch — with you involved every step." },
  { q: "How long does it take to complete a website?", a: "A simple website takes 4-6 weeks; more complex projects can take 3-6 months. We provide a detailed timeline during our initial consultation." },
  { q: "Do you offer ongoing maintenance?", a: "Yes, we offer various maintenance and support packages to keep your digital assets secure, up-to-date, and performing optimally." },
  { q: "What is your pricing structure?", a: "Our pricing is project-based and depends on scope and complexity. We provide transparent, detailed proposals after our initial consultation." },
  { q: "Can you help with content creation?", a: "Absolutely — we offer content strategy, copywriting, and creative direction to ensure your brand's message resonates across all platforms." },
  { q: "Do you work internationally?", a: "We work with clients globally and have experience managing remote projects efficiently through clear communication and dedicated tools." },
];

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState("idle");
  const [selectedService, setSelectedService] = useState("web-design");
  const [openFaq, setOpenFaq] = useState(null);
  const heroRef = useScrollAnimation();
  const formRef = useScrollAnimationGroup();
  const faqRef = useScrollAnimationGroup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");
    const formData = new FormData(e.target);
    formData.append("service", selectedService);

    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      if (res.ok) {
        setFormStatus("success");
        e.target.reset();
        setTimeout(() => setFormStatus("idle"), 4000);
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <>
      {/* ══════════════════════════════════════
          HERO
          ══════════════════════════════════════ */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/about-3.webp" alt="" fill className="object-cover" priority quality={85} />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/70 to-cream/30" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 w-full pt-28 md:pt-36 pb-16 md:pb-20">
          <div ref={heroRef} className="scroll-fade max-w-2xl">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.3em] text-navy/50 mb-6">
              Contact
            </p>
            <h1 className="font-heading text-[2.75rem] md:text-[4rem] lg:text-[5rem] font-semibold leading-[1.05] text-navy mb-6">
              Let's start<br />
              <em className="gradient-text">something great.</em>
            </h1>
            <p className="text-muted text-base md:text-lg leading-[1.85] max-w-lg">
              Have a project in mind? We'd love to hear about it. Reach out, and let's turn your vision into reality.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT INFO + FORM — Editorial split
          ══════════════════════════════════════ */}
      <section className="py-24 md:py-36">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div ref={formRef} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left — Contact info */}
            <div className="scroll-fade-left lg:col-span-5">
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.3em] text-navy/50 mb-6">
                Get in Touch
              </p>
              <h2 className="font-heading text-[2rem] md:text-[2.5rem] font-semibold text-navy leading-[1.15] mb-8">
                We'd love to hear<br />
                <em className="gradient-text">from you.</em>
              </h2>
              <p className="text-muted text-[0.9375rem] leading-[1.85] mb-10">
                Whether you're starting from scratch or looking to elevate your existing digital presence — we're here to help.
              </p>

              {/* Contact methods — vertical list */}
              <div className="space-y-8 mb-10">
                <div>
                  <p className="text-[0.625rem] font-medium uppercase tracking-[0.25em] text-lavender-dark mb-2">Email</p>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@lynkdigital.co.in" target="_blank" rel="noopener noreferrer" className="text-navy font-medium hover:text-navy-light transition-colors duration-300">
                    hello@lynkdigital.co.in
                  </a>
                </div>
                <div>
                  <p className="text-[0.625rem] font-medium uppercase tracking-[0.25em] text-lavender-dark mb-2">Phone</p>
                  <a href="tel:+918010195467" className="text-navy font-medium hover:text-navy-light transition-colors duration-300">
                    (+91) 8010195467
                  </a>
                </div>
                <div>
                  <p className="text-[0.625rem] font-medium uppercase tracking-[0.25em] text-lavender-dark mb-2">WhatsApp</p>
                  <a href="https://wa.me/+919930632999" target="_blank" rel="noopener noreferrer" className="text-navy font-medium hover:text-navy-light transition-colors duration-300">
                    +91 99306 32999
                  </a>
                </div>
                <div>
                  <p className="text-[0.625rem] font-medium uppercase tracking-[0.25em] text-lavender-dark mb-2">Instagram</p>
                  <a href="https://www.instagram.com/lynk.digital_" target="_blank" rel="noopener noreferrer" className="text-navy font-medium hover:text-navy-light transition-colors duration-300">
                    @lynk.digital_
                  </a>
                </div>
              </div>

              <div className="w-16 h-px bg-navy/15" />
            </div>

            {/* Right — Form */}
            <div className="scroll-fade-right lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-8">
                <input type="hidden" name="access_key" value="b445c2f1-7a8e-414d-8cfa-956cc15b207d" />
                <input type="checkbox" className="hidden" name="botcheck" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[0.625rem] font-medium uppercase tracking-[0.25em] text-muted mb-3 block">Full Name</label>
                    <input type="text" name="name" required placeholder="Your name" className="input-editorial" />
                  </div>
                  <div>
                    <label className="text-[0.625rem] font-medium uppercase tracking-[0.25em] text-muted mb-3 block">Email Address</label>
                    <input type="email" name="email" required placeholder="your@email.com" className="input-editorial" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[0.625rem] font-medium uppercase tracking-[0.25em] text-muted mb-3 block">Phone</label>
                    <input type="tel" name="phone" placeholder="+91" className="input-editorial" />
                  </div>
                  <div>
                    <label className="text-[0.625rem] font-medium uppercase tracking-[0.25em] text-muted mb-3 block">Subject</label>
                    <input type="text" name="subject" required placeholder="What's this about?" className="input-editorial" />
                  </div>
                </div>

                <div>
                  <label className="text-[0.625rem] font-medium uppercase tracking-[0.25em] text-muted mb-4 block">Service of Interest</label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { id: "web-design", label: "Web Design" },
                      { id: "ui-ux", label: "UI/UX" },
                      { id: "social-media", label: "Social Media" },
                      { id: "branding", label: "Branding" },
                      { id: "seo", label: "SEO" },
                      { id: "other", label: "Other" },
                    ].map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedService(s.id)}
                        className={`py-2 px-4 text-[0.75rem] font-medium tracking-wide transition-all duration-300 border ${
                          selectedService === s.id
                            ? "bg-navy text-white border-navy"
                            : "bg-transparent text-muted border-navy/15 hover:border-navy/40 hover:text-navy"
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[0.625rem] font-medium uppercase tracking-[0.25em] text-muted mb-3 block">Message</label>
                  <textarea name="message" required placeholder="Tell us about your project, timeline, and goals..." rows="5" className="input-editorial resize-none" />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="btn-primary w-full md:w-auto justify-center"
                >
                  {formStatus === "sending"
                    ? "Sending..."
                    : formStatus === "success"
                    ? "Message Sent ✓"
                    : "Send Message →"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ — Accordion style
          ══════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-cream-dark/30 relative overflow-hidden">
        <OrbitalDecoration className="absolute -top-20 -left-20 text-navy" size={400} opacity={0.03} />

        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.3em] text-navy/50 mb-4">
              Common Questions
            </p>
            <h2 className="font-heading text-[2rem] md:text-[2.5rem] font-semibold text-navy leading-[1.15]">
              Things you might <em className="gradient-text">want to know.</em>
            </h2>
          </div>

          <div ref={faqRef} className="border-t border-navy/10">
            {faqs.map((faq, i) => (
              <div key={i} className={`scroll-fade stagger-${Math.min(i + 1, 6)} border-b border-navy/10`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-6 flex items-start justify-between gap-4 text-left group"
                >
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-navy group-hover:text-navy-light transition-colors duration-300">
                    {faq.q}
                  </h3>
                  <span className={`text-navy/40 text-xl shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? "max-h-40 pb-6" : "max-h-0"}`}>
                  <p className="text-muted text-sm md:text-[0.9375rem] leading-[1.85]">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
