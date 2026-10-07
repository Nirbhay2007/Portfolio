import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, ShieldCheck, Database, Lock, Key, ArrowUpRight } from 'lucide-react';

const CAPABILITIES = [
  {
    number: '01',
    title: 'SECURE BACKENDS',
    category: 'API & PERSISTENCE ARCHITECTURE',
    summary: 'APIs, authentication, validation, and relational databases.',
    description:
      'Designing robust RESTful services using FastAPI, PostgreSQL, and SQLAlchemy. Implementing strict Pydantic payload validation to eliminate injection vulnerabilities, Alembic migration histories, and the modern UV toolchain for reproducible environments.',
    tags: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Pydantic', 'Alembic', 'UV & Ruff', 'Boto3'],
    icon: Server,
    borderColor: 'hover:border-cyan-500/40',
    accentColor: 'text-cyan-400',
    badgeColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  },
  {
    number: '02',
    title: 'FULL-STACK APPLICATIONS',
    category: 'END-TO-END PRODUCT SYSTEMS',
    summary: 'Interactive web applications and complete product experiences.',
    description:
      'Engineering complete digital platforms with React, TypeScript, and robust API integrations. Building production-grade workflows including custom donation engines, Razorpay checkouts, transactional guarantees, and Vitest test suites for concurrent write validation.',
    tags: ['React', 'TypeScript', 'Node.js', 'Razorpay', 'Vitest', 'State Management'],
    icon: Layout,
    borderColor: 'hover:border-blue-500/40',
    accentColor: 'text-blue-400',
    badgeColor: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  },
  {
    number: '03',
    title: 'SECURITY-FOCUSED ENGINEERING',
    category: 'DEFENSIVE SYSTEM PROTOCOLS',
    summary: 'Authentication, HMAC verification, rate limiting, and privacy-first flows.',
    description:
      'Embedding defensive cybersecurity directly into software workflows: timing-safe HMAC signature verification, bcrypt salted password hashing, JWT claim authorization, strict endpoint rate limiting, and zero-knowledge aggregate admin telemetry.',
    tags: ['Timing-Safe HMAC', 'JWT Auth', 'bcrypt', 'Rate Limiting', 'Privacy Controls', 'AppSec'],
    icon: ShieldCheck,
    borderColor: 'hover:border-emerald-500/40',
    accentColor: 'text-emerald-400',
    badgeColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  },
];

export const WhatIBuildSection = () => {
  return (
    <section id="what-i-build" className="relative py-24 sm:py-32 px-6 border-t border-white/[0.06] bg-[#07090e]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-cyan-400 uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>02 // ARCHITECTURAL FOCUS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            What I Build
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            A focused engineering direction centered on backend reliability, end-to-end full-stack development, and defensive security.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.number}
                className={`group relative rounded-2xl bg-[#0b0f17] border border-white/[0.08] ${cap.borderColor} p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/60`}
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-slate-500 font-semibold tracking-wider">
                      MODULE //{cap.number}
                    </span>
                    <div className={`w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center ${cap.accentColor} group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Category */}
                  <span className={`inline-block font-mono text-[11px] px-2.5 py-0.5 rounded border mb-3 ${cap.badgeColor}`}>
                    {cap.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-cyan-300 transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-300 mb-4">
                    {cap.summary}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="pt-6 border-t border-white/[0.06]">
                  <div className="text-[11px] font-mono text-slate-500 mb-2.5 uppercase tracking-wider">
                    Core Technologies & Patterns
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-slate-300 font-mono text-xs group-hover:border-white/[0.12] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIBuildSection;
