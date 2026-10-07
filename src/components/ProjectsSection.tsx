import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Server,
  Layers,
  Database,
  Cpu,
  Eye,
  KeyRound,
  FileCheck2,
  CreditCard,
  Building2,
  CalendarCheck2,
  Satellite,
  BarChart2,
  Sparkles,
} from 'lucide-react';

interface ArchitectureStep {
  step: string;
  label: string;
  detail: string;
  badge?: string;
}

interface ProjectData {
  id: string;
  number: string;
  category: string;
  statusBadge: string;
  statusType: 'active' | 'built' | 'challenge';
  title: string;
  date?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  flow: ArchitectureStep[];
  githubUrl?: string;
  ctaText?: string;
  note?: string;
}

const PROJECTS: ProjectData[] = [
  {
    id: 'expense-tracker',
    number: '01',
    category: 'BACKEND / SECURITY',
    statusBadge: 'JUL 2026 — PRESENT',
    statusType: 'active',
    title: 'Expense Tracker REST API',
    description:
      'A secure, production-grade RESTful API engineered for personal and organizational expense management. Designed with defense-in-depth principles: strict schema enforcement at the boundary, salted hashing for credentials, stateless JWT authorization, and relational persistence with automated schema migrations.',
    highlights: [
      'Stateless JWT authentication paired with bcrypt password hashing',
      'Comprehensive Pydantic request validation preventing malformed or malicious payloads',
      'PostgreSQL persistence modeled through SQLAlchemy ORM with Alembic schema migrations',
      'Integrated AWS Boto3 cloud services, optimized using the modern UV toolchain and Ruff linter',
    ],
    technologies: [
      'FastAPI',
      'SQLAlchemy',
      'PostgreSQL',
      'Pydantic',
      'JWT Auth',
      'bcrypt',
      'Alembic',
      'AWS Boto3',
      'UV',
      'Ruff',
      'Git',
    ],
    flow: [
      { step: '01', label: 'CLIENT', detail: 'HTTPS Request with Bearer Token', badge: 'TLS 1.3' },
      { step: '02', label: 'FASTAPI', detail: 'High-throughput async router with CORS & middleware', badge: 'Async IO' },
      { step: '03', label: 'AUTHENTICATION', detail: 'JWT validation & bcrypt credential verification', badge: 'Zero Trust' },
      { step: '04', label: 'VALIDATION', detail: 'Pydantic strict schema parsing and sanitization', badge: 'Clean DTO' },
      { step: '05', label: 'DATABASE', detail: 'PostgreSQL storage via SQLAlchemy & Alembic migrations', badge: 'ACID Safe' },
    ],
    githubUrl: 'https://github.com/Nirbhay2007/uv_expense_tracker_app',
    ctaText: 'GITHUB REPOSITORY',
    note: 'Active development repository utilizing the UV package manager.',
  },
  {
    id: 'lakshya-ngo',
    number: '02',
    category: 'FULL-STACK / WEB / SECURITY',
    statusBadge: 'BUILT • TESTED • NOT CURRENTLY HOSTED',
    statusType: 'built',
    title: 'Lakshya NGO — Full-Stack Website',
    description:
      "The complete official web platform built for Lakshya (A Society for Social & Environmental Development). Beyond organizational storytelling, the platform incorporates a robust donation management engine with multiple payment channels, timing-safe cryptographic verification, and end-to-end integration tests.",
    highlights: [
      'Complete organization platform covering CSR initiatives, programs, and outreach',
      'Multi-channel donation flow supporting custom amounts, Razorpay, and UPI/bank transfers',
      'Timing-safe HMAC-SHA256 signature verification preventing payment forgery and replay attacks',
      'Strict input sanitization, sliding-window rate limiting, and Vitest concurrent-write test suites',
    ],
    technologies: [
      'React',
      'Node.js',
      'Razorpay',
      'HMAC-SHA256',
      'Vitest',
      'Rate Limiting',
      'Input Validation',
      'Tailwind CSS',
    ],
    flow: [
      { step: '01', label: 'WEBSITE', detail: 'Public NGO platform & campaign showcase', badge: 'Client' },
      { step: '02', label: 'DONATION FLOW', detail: 'Custom amount & payment channel selection', badge: 'Stateful' },
      { step: '03', label: 'VALIDATION', detail: 'Strict payload validation & client rate limits', badge: 'Defensive' },
      { step: '04', label: 'PAYMENT', detail: 'Razorpay / UPI transaction processing', badge: 'Checkout' },
      { step: '05', label: 'SIGNATURE VERIFY', detail: 'Timing-safe HMAC-SHA256 cryptographic check', badge: 'Timing-Safe' },
      { step: '06', label: 'WRITE', detail: 'Verified transaction record persisted with Vitest checks', badge: 'Verified' },
    ],
    githubUrl: 'https://github.com/Nirbhay2007/lakshya_for_development_Website',
    ctaText: 'SOURCE CODE',
    note: 'Built & rigorously tested. Not currently hosted on public infrastructure.',
  },
  {
    id: 'attendance-tracker',
    number: '03',
    category: 'WEB + ANDROID',
    statusBadge: 'PRIVACY-FIRST ARCHITECTURE',
    statusType: 'active',
    title: 'College Attendance Tracker',
    description:
      'A cross-platform monitoring application engineered to give students clear insight into attendance requirements. Automates institutional portal authentication and timetable scraping to calculate safe class-skip thresholds while preserving student anonymity.',
    highlights: [
      'Automated session handshake and timetable scraping directly from institutional portals',
      'Configurable minimum attendance threshold engine with real-time class-skip calculations',
      'Privacy-first administrative dashboard displaying aggregate statistics only',
      'Zero student ID or portal credential exposure to system administrators',
    ],
    technologies: [
      'Python',
      'Session Scraper',
      'Web / Android',
      'Privacy Architecture',
      'Data Aggregation',
      'Credential Shield',
    ],
    flow: [
      { step: '01', label: 'COLLEGE PORTAL', detail: 'Authentication handshake & timetable endpoint', badge: 'Session' },
      { step: '02', label: 'AUTHENTICATION', detail: 'Client-side credential processing, never logged', badge: 'Zero PII' },
      { step: '03', label: 'ATTENDANCE', detail: 'Subject-wise historical presence extraction', badge: 'Parser' },
      { step: '04', label: 'TIMETABLE', detail: 'Upcoming schedule matching & calendar sync', badge: 'Schedule' },
      { step: '05', label: 'CALCULATION', detail: 'Predictive class-skip margin algorithm', badge: 'Threshold' },
      { step: '06', label: 'STUDENT APP', detail: 'Actionable student view & aggregate admin stats', badge: 'Privacy View' },
    ],
    ctaText: 'ARCHITECTURAL DETAILS',
    note: 'Built with privacy-by-design principles: zero credential storage.',
  },
  {
    id: 'satellite-change-detection',
    number: '04',
    category: 'COMPUTER VISION / MACHINE LEARNING',
    statusBadge: 'ALL INDIA GRAND CHALLENGE — IIT DELHI',
    statusType: 'challenge',
    title: 'Satellite Change Detection',
    description:
      'A geospatial computer vision system developed for the All India Grand Challenge at IIT Delhi. The system analyzes co-registered bi-temporal satellite imagery pairs to detect land-use transformations, urban sprawl, and environmental changes across target geographic zones.',
    highlights: [
      'Ingestion and preprocessing of multi-temporal satellite imagery using Rasterio',
      'Spatial alignment, atmospheric correction, and multispectral band differencing',
      'Computer vision and ML segmentation algorithms isolating genuine structural changes',
      'Geospatial map rendering and change-heatmaps utilizing GeoPlotLib and Matplotlib',
    ],
    technologies: [
      'Python',
      'NumPy',
      'Rasterio',
      'GeoPlotLib',
      'Matplotlib',
      'Computer Vision',
      'Machine Learning',
    ],
    flow: [
      { step: '01', label: 'IMAGE A + B', detail: 'Bi-temporal satellite scene pairs (T0 & T1)', badge: 'GeoTIFF' },
      { step: '02', label: 'PROCESSING', detail: 'Radiometric alignment & multispectral normalization', badge: 'Rasterio' },
      { step: '03', label: 'CHANGE DETECTION', detail: 'Spectral difference analysis & ML segmentation', badge: 'Computer Vision' },
      { step: '04', label: 'VISUALIZATION', detail: 'High-resolution geospatial mask & change telemetry', badge: 'Matplotlib' },
    ],
    ctaText: 'RESEARCH & CODE',
    note: 'Submitted for the All India Grand Challenge at IIT Delhi.',
  },
];

export const ProjectsSection = () => {
  const [selectedSteps, setSelectedSteps] = useState<{ [projectId: string]: number }>({
    'expense-tracker': 2,
    'lakshya-ngo': 4,
    'attendance-tracker': 1,
    'satellite-change-detection': 2,
  });

  const handleStepClick = (projectId: string, index: number) => {
    setSelectedSteps((prev) => ({ ...prev, [projectId]: index }));
  };

  return (
    <section id="projects" className="relative py-24 sm:py-36 px-6 border-t border-white/[0.06] bg-[#08090d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-cyan-400 uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>03 // FEATURED ENGINEERING WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Systems & Project Showcase
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            Detailed architectures, security guarantees, and full-stack implementations. Each project reflects real engineering constraints and defensive design.
          </p>
        </div>

        {/* Large Immersive Showcase Items */}
        <div className="space-y-24">
          {PROJECTS.map((project, projIdx) => {
            const activeStepIdx = selectedSteps[project.id] ?? 0;
            const activeStepData = project.flow[activeStepIdx] || project.flow[0];

            return (
              <div
                key={project.id}
                data-cursor="project"
                className="group relative rounded-3xl bg-[#0b0f17] border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-500 p-8 sm:p-12 shadow-2xl shadow-black/80"
              >
                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-2xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400/50 rounded-br-2xl pointer-events-none" />

                {/* Top Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-white/[0.07]">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-cyan-400">
                      PROJECT //{project.number}
                    </span>
                    <span className="text-slate-600">/</span>
                    <span className="font-mono text-xs text-slate-300 tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`font-mono text-xs px-3 py-1 rounded-full border ${
                        project.statusType === 'active'
                          ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                          : project.statusType === 'built'
                          ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                          : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                      }`}
                    >
                      {project.statusBadge}
                    </span>
                  </div>
                </div>

                {/* Main Content Grid: Description (Left) vs Architectural Flow (Right) */}
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                  {/* Left Column: Project Details */}
                  <div className="lg:col-span-6 space-y-6">
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    {/* Engineering Highlights */}
                    <div className="space-y-2.5 pt-2">
                      <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                        Technical Highlights
                      </div>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="pt-2">
                      <div className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2.5">
                        Technology Stack
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] font-mono text-xs text-slate-200 group-hover:border-cyan-500/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Actions */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="link"
                          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-[#08090d] font-semibold text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20"
                        >
                          <Github className="w-4 h-4" />
                          <span>{project.ctaText}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-xs font-mono text-slate-300">
                          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{project.ctaText}</span>
                        </div>
                      )}

                      {project.note && (
                        <span className="font-mono text-xs text-slate-400 italic">
                          // {project.note}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Architectural Flow Visualization */}
                  <div className="lg:col-span-6 bg-[#080c14] border border-white/[0.08] rounded-2xl p-6 sm:p-7 relative overflow-hidden">
                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06]">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="font-mono text-xs text-white font-semibold tracking-wider uppercase">
                          CONCEPTUAL ARCHITECTURE PIPELINE
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-slate-500">
                        CLICK NODE TO INSPECT
                      </span>
                    </div>

                    {/* Step Flow Nodes (Horizontal / Staggered) */}
                    <div className="space-y-3 mb-6">
                      {project.flow.map((node, nIdx) => {
                        const isSelected = activeStepIdx === nIdx;
                        return (
                          <div
                            key={node.step}
                            onClick={() => handleStepClick(project.id, nIdx)}
                            className={`cursor-pointer rounded-xl p-3 border transition-all duration-200 flex items-center justify-between gap-3 ${
                              isSelected
                                ? 'bg-[#121929] border-cyan-400 shadow-md shadow-cyan-950/40'
                                : 'bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.12]'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className={`font-mono text-xs font-bold w-6 h-6 rounded flex items-center justify-center border ${
                                  isSelected
                                    ? 'bg-cyan-400 text-[#08090d] border-cyan-300'
                                    : 'bg-white/[0.04] text-slate-400 border-white/[0.08]'
                                }`}
                              >
                                {node.step}
                              </span>
                              <div>
                                <div className="text-xs font-bold tracking-tight text-white font-mono flex items-center gap-2">
                                  <span>{node.label}</span>
                                  {node.badge && (
                                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                                      {node.badge}
                                    </span>
                                  )}
                                </div>
                                <div className="text-[11px] text-slate-400 truncate max-w-[240px] sm:max-w-xs">
                                  {node.detail}
                                </div>
                              </div>
                            </div>

                            <div className="shrink-0 font-mono text-[11px] text-cyan-400">
                              {isSelected ? '● ACTIVE' : '○'}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Deep Telemetry Inspector for the active node */}
                    <div className="rounded-xl bg-[#0e1320] border border-cyan-500/20 p-4">
                      <div className="flex items-center justify-between mb-2 font-mono text-xs">
                        <span className="text-slate-400">NODE TELEMETRY:</span>
                        <span className="text-cyan-400 font-bold">{activeStepData.label}</span>
                      </div>
                      <p className="text-xs text-slate-300 font-mono leading-relaxed">
                        {activeStepData.detail}
                      </p>
                      <div className="mt-3 pt-3 border-t border-white/[0.05] flex items-center justify-between font-mono text-[10px] text-slate-500">
                        <span>GUARANTEE: {activeStepData.badge || 'VERIFIED'}</span>
                        <span className="text-emerald-400">DEFENSIVE STATUS: PASS</span>
                      </div>
                    </div>
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

export default ProjectsSection;
