import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldAlert,
  KeyRound,
  FileCheck2,
  Lock,
  Timer,
  EyeOff,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  Cpu,
} from 'lucide-react';

interface SecurityModule {
  id: string;
  number: string;
  title: string;
  mechanism: string;
  specification: string;
  defensiveImpact: string;
  telemetrySnippet: string;
  icon: typeof KeyRound;
  accent: string;
}

const MODULES: SecurityModule[] = [
  {
    id: 'auth',
    number: '01',
    title: 'AUTHENTICATION',
    mechanism: 'JWT (JSON Web Tokens)',
    specification: 'Stateless, cryptographically signed token claims with strict expiration and audience validation.',
    defensiveImpact: 'Prevents session tampering and state exhaustion on backend nodes.',
    telemetrySnippet: '{"alg": "HS256", "sub": "usr_91a", "exp": 1728000, "scope": "write"}',
    icon: KeyRound,
    accent: 'text-cyan-400',
  },
  {
    id: 'password',
    number: '02',
    title: 'PASSWORD SECURITY',
    mechanism: 'bcrypt Adaptive Hashing',
    specification: 'Salted key derivation with configurable cost factor (work factor 12) resistant to GPU acceleration.',
    defensiveImpact: 'Neutralizes rainbow table lookups and offline dictionary cracking attacks.',
    telemetrySnippet: '$2b$12$LJ8m7P...Q4f1a09vB.82hKj48N (Cost: 12, Salt: 128-bit)',
    icon: Lock,
    accent: 'text-emerald-400',
  },
  {
    id: 'validation',
    number: '03',
    title: 'REQUEST VALIDATION',
    mechanism: 'Pydantic & Input Sanitization',
    specification: 'Strict boundary model validation enforcing data types, constraints, and rejection of unknown fields.',
    defensiveImpact: 'Eliminates mass-assignment, injection flaws, and unexpected payload crashes.',
    telemetrySnippet: 'class DTO(BaseModel): id: UUID; amount: Decimal(gt=0); strict=True',
    icon: FileCheck2,
    accent: 'text-blue-400',
  },
  {
    id: 'signature',
    number: '04',
    title: 'SIGNATURE VERIFICATION',
    mechanism: 'Timing-Safe HMAC-SHA256',
    specification: 'Constant-time string comparison preventing side-channel execution time leakages on webhooks.',
    defensiveImpact: 'Guarantees transaction integrity and defeats timing attack vulnerabilities.',
    telemetrySnippet: 'hmac.compare_digest(calc_signature, request_signature) -> bool',
    icon: ShieldCheck,
    accent: 'text-cyan-400',
  },
  {
    id: 'ratelimit',
    number: '05',
    title: 'RATE LIMITING',
    mechanism: '10 requests / 15 minutes',
    specification: 'Sliding window token bucket applied to authentication and sensitive transaction routes.',
    defensiveImpact: 'Thwarts automated credential stuffing, brute-force spam, and denial-of-service.',
    telemetrySnippet: 'HTTP/1.1 429 Too Many Requests (Retry-After: 900s; Window: 15m)',
    icon: Timer,
    accent: 'text-amber-400',
  },
  {
    id: 'privacy',
    number: '06',
    title: 'PRIVACY CONTROLS',
    mechanism: 'Aggregate-Only Admin Statistics',
    specification: 'Zero-knowledge architectural telemetry; zero storage of student credentials or identifiable PII.',
    defensiveImpact: 'Guarantees zero operator exposure even in the event of administrative compromise.',
    telemetrySnippet: 'SELECT COUNT(*), AVG(attendance) FROM metrics WHERE redacted=TRUE',
    icon: EyeOff,
    accent: 'text-emerald-400',
  },
];

export const SecuritySection = () => {
  return (
    <section id="security" className="relative py-24 sm:py-36 px-6 border-t border-white/[0.06] bg-[#07090e]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-cyan-400 uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>04 // DEFENSIVE SYSTEM ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            SECURITY / BY DESIGN
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            Six architectural mechanisms embedded across my projects to ensure integrity, authentication, confidentiality, and resilience.
          </p>
        </div>

        {/* 6 Visual Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MODULES.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.id}
                className="group relative rounded-2xl bg-[#0b0f17] border border-white/[0.08] hover:border-cyan-500/40 p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/70"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs text-slate-500 font-bold tracking-wider">
                      DEFENSE //{mod.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className={`w-4 h-4 ${mod.accent}`} />
                    </div>
                  </div>

                  {/* Title & Mechanism */}
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    {mod.title}
                  </h3>
                  <div className="text-lg font-bold text-white tracking-tight mb-3 group-hover:text-cyan-300 transition-colors">
                    {mod.mechanism}
                  </div>

                  {/* Specification */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {mod.specification}
                  </p>

                  {/* Defensive Guarantee */}
                  <div className="flex items-start gap-2 text-xs text-slate-400 mb-5 bg-white/[0.02] p-2.5 rounded-lg border border-white/[0.04]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{mod.defensiveImpact}</span>
                  </div>
                </div>

                {/* Telemetry Snippet */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <div className="flex items-center justify-between mb-1.5 font-mono text-[10px] text-slate-500">
                    <span>PROTOCOL TRACE</span>
                    <span className="text-emerald-400">ACTIVE</span>
                  </div>
                  <pre className="font-mono text-[11px] text-slate-300 bg-[#080b12] p-2.5 rounded-lg border border-white/[0.05] overflow-x-auto whitespace-pre-wrap break-all">
                    <code>{mod.telemetrySnippet}</code>
                  </pre>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security Philosophy Banner */}
        <div className="mt-12 rounded-2xl bg-[#090d16] border border-cyan-500/20 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white tracking-tight">
                Zero-Trust Architectural Baseline
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Every external endpoint validates payloads, limits request cadence, verifies signatures in constant time, and treats client input as untrusted.
              </p>
            </div>
          </div>

          <div className="font-mono text-xs px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
            SEC.AUDIT: 100% IMPLEMENTED
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
