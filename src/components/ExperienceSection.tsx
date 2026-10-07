import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-36 px-6 border-t border-white/[0.06] bg-[#08090d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-cyan-400 uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>05 // TIMELINE & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Experience, Education & Credentials
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            Real-world community engineering, academic immersion, and rigorous industry simulations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Main Column: Work Experience Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 pb-2 border-b border-white/[0.07]">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-white">
                EXPERIENCE TIMELINE
              </h3>
            </div>

            {/* Experience Item 1: Lakshya */}
            <div className="relative pl-8 border-l-2 border-cyan-500/40 space-y-4">
              {/* Timeline marker */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#08090d] border-2 border-cyan-400 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  SRIJAN SOCIAL INTERNSHIP PROGRAMME
                </span>
                <span className="font-mono text-xs text-slate-400">
                  SOCIAL & TECH INTERNSHIP
                </span>
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Lakshya — A Society for Social & Environmental Development
                </h4>
                <p className="text-sm font-medium text-slate-300 mt-1">
                  Intern — Fieldwork, Documentation & Web Engineering
                </p>
              </div>

              <div className="space-y-2.5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    Conducted CSR fieldwork and systematic documentation for community and grassroots initiatives.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    Participated directly in social and environmental development initiatives supporting local impact.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    Designed and built the organization's complete official website, engineering modern UI components and multi-channel donation workflows.
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                {['Full-Stack Web', 'CSR Fieldwork', 'Documentation', 'Social Impact', 'Payment Integration'].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.08] text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div className="lg:col-span-5 space-y-8">
            {/* 25. EDUCATION */}
            <div>
              <div className="flex items-center gap-3 pb-2 border-b border-white/[0.07] mb-4">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-white">
                  EDUCATION
                </h3>
              </div>

              <div className="rounded-2xl bg-[#0b0f17] border border-white/[0.08] p-6 hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-white/[0.05] text-slate-300 border border-white/[0.1]">
                    UNDERGRADUATE
                  </span>
                  <span className="font-mono text-xs text-cyan-300 font-semibold">
                    2025 — 2029
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white tracking-tight">
                  UPES, Dehradun
                </h4>
                <p className="font-mono text-xs text-cyan-400 mt-1">
                  B.Tech — Computer Science & Engineering
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  Specialization: Cyber Security & Digital Forensics
                </p>

                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>Dehradun, Uttarakhand</span>
                  </span>
                  <span className="text-emerald-400">IN PROGRESS</span>
                </div>
              </div>
            </div>

            {/* 26. CERTIFICATIONS */}
            <div>
              <div className="flex items-center gap-3 pb-2 border-b border-white/[0.07] mb-4">
                <Award className="w-5 h-5 text-cyan-400" />
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-white">
                  INDUSTRY SIMULATIONS
                </h3>
              </div>

              <div className="space-y-3.5">
                {/* Certification 1 */}
                <div className="rounded-xl bg-[#0b0f17] border border-white/[0.08] p-5 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-semibold">
                      AMAZON WEB SERVICES
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      JAN 2026
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    AWS Solutions Architecture Job Simulation
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Simulated cloud infrastructure architecture, high-availability design, and AWS system patterns.
                  </p>
                </div>

                {/* Certification 2 */}
                <div className="rounded-xl bg-[#0b0f17] border border-white/[0.08] p-5 hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 font-semibold">
                      J.P. MORGAN CHASE & CO.
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      OCT 2025
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    J.P. Morgan Software Engineering Job Simulation
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Practical software engineering workflows, financial system logic, and test-driven code validation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
