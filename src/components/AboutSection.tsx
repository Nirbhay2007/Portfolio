import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Server, Terminal, Lock, CheckCircle2, Award, BookOpen, User, FileDown } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-6 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial About / Profile */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-cyan-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>01 // PROFILE & BACKGROUND</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Engineering systems where performance and security reinforce each other.
            </h2>

            <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
              <p>
                I am a Computer Science & Engineering undergraduate at UPES, Dehradun, specializing in{' '}
                <span className="text-white font-medium">Cyber Security & Digital Forensics</span>. My core
                engineering focus centers on backend architectures, full-stack application development, and
                security-first system design.
              </p>
              <p>
                Rather than treating security as an afterthought or compliance checklist, I design systems
                where cryptographic verification, defensive input validation, least-privilege access, and rate limiting
                are integral architectural foundations.
              </p>
              <p>
                From architecting clean REST APIs with FastAPI, PostgreSQL, and Alembic, to engineering
                full-stack production web applications with timing-safe HMAC payment verification and Vitest test suites,
                I focus on writing dependable, maintainable code.
              </p>
              <p className="text-slate-400 text-sm sm:text-base border-l-2 border-cyan-500/50 pl-4 py-1 italic">
                Current goal: Actively seeking software engineering and backend internship opportunities
                where I can contribute to robust engineering challenges and production codebases.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="pt-6 grid sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#0d121c] border border-white/[0.06] hover:border-cyan-500/30 transition-colors">
                <Server className="w-5 h-5 text-cyan-400 mb-2.5" />
                <h3 className="font-semibold text-white text-sm">Backend Systems</h3>
                <p className="text-xs text-slate-400 mt-1">
                  FastAPI, PostgreSQL, SQLAlchemy schemas, Alembic migrations, and REST APIs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0d121c] border border-white/[0.06] hover:border-emerald-500/30 transition-colors">
                <Shield className="w-5 h-5 text-emerald-400 mb-2.5" />
                <h3 className="font-semibold text-white text-sm">Security by Design</h3>
                <p className="text-xs text-slate-400 mt-1">
                  JWT auth, bcrypt hashing, HMAC verification, rate limiting, and defensive validation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0d121c] border border-white/[0.06] hover:border-blue-500/30 transition-colors">
                <Terminal className="w-5 h-5 text-blue-400 mb-2.5" />
                <h3 className="font-semibold text-white text-sm">Full-Stack Flow</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Modern React interfaces, state management, Vitest testing, and clean UX.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Technical Profile Panel */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0b0f17] border border-white/[0.08] p-6 shadow-2xl relative overflow-hidden">
              {/* Subtle top indicator bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.07] font-mono text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/80" />
                  <span className="text-white font-medium">SYS.PROFILE // NIRBHAY GARG</span>
                </div>
                <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  VERIFIED
                </span>
              </div>

              {/* Real profile image in technical frame */}
              <div className="flex items-center gap-5 mb-6">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden border-2 border-cyan-500/30 shrink-0 shadow-lg shadow-cyan-950/50">
                  <img
                    src="/nirbhay.jpeg"
                    alt="Nirbhay Garg"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white tracking-tight">Nirbhay Garg</h4>
                  <p className="font-mono text-xs text-cyan-400 mt-0.5">B.Tech Computer Science & Eng.</p>
                  <p className="text-xs text-slate-400 mt-1">Specialization: Cyber Security & Digital Forensics</p>
                </div>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center py-2 border-b border-white/[0.05]">
                  <span className="text-slate-400">INSTITUTION</span>
                  <span className="text-white font-medium">UPES, Dehradun</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/[0.05]">
                  <span className="text-slate-400">TIMELINE</span>
                  <span className="text-cyan-300 font-medium">2025 — 2029</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/[0.05]">
                  <span className="text-slate-400">PRIMARY FOCUS</span>
                  <span className="text-white font-medium">Backend • Full-Stack • AppSec</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/[0.05]">
                  <span className="text-slate-400">CURRENT TARGET</span>
                  <span className="text-emerald-300 font-medium">Software Engineering Internship</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/[0.05]">
                  <span className="text-slate-400">PRIMARY TOOLCHAIN</span>
                  <span className="text-slate-200">Python (FastAPI, UV) • PostgreSQL • React</span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400">SECURITY MINDSET</span>
                  <span className="text-cyan-400">Defense-in-depth & Zero Trust</span>
                </div>
              </div>

              {/* Resume download CTA in technical profile panel */}
              <a
                href="/Nirbhay_Garg_Resume.pdf"
                download="Nirbhay_Garg_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 font-mono text-xs font-semibold transition-all shadow-sm shadow-cyan-950/40"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>DOWNLOAD FULL RESUME (PDF)</span>
              </a>

              {/* Status footer inside card */}
              <div className="mt-6 pt-4 border-t border-white/[0.07] bg-white/[0.02] -mx-6 -mb-6 px-6 py-3 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>TERMINAL ID: 2025-UPES-CYBER</span>
                <span className="text-emerald-400">STATUS: ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
