import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Layout,
  Database,
  BrainCircuit,
  Cloud,
  ShieldCheck,
  Wrench,
  Sparkles,
} from 'lucide-react';

interface SkillCategory {
  id: string;
  name: string;
  icon: typeof Code2;
  skills: { name: string; tag?: string }[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    name: 'LANGUAGES',
    icon: Code2,
    skills: [
      { name: 'Python', tag: 'PRIMARY' },
      { name: 'C', tag: 'SYSTEMS' },
      { name: 'SQL', tag: 'QUERY' },
    ],
  },
  {
    id: 'backend',
    name: 'BACKEND',
    icon: Server,
    skills: [
      { name: 'FastAPI', tag: 'ASYNC' },
      { name: 'Node.js', tag: 'RUNTIME' },
      { name: 'REST APIs', tag: 'HTTP' },
      { name: 'SQLAlchemy', tag: 'ORM' },
      { name: 'Pydantic', tag: 'VALIDATION' },
      { name: 'JWT Authentication', tag: 'AUTH' },
    ],
  },
  {
    id: 'frontend',
    name: 'FRONTEND',
    icon: Layout,
    skills: [
      { name: 'React', tag: 'UI' },
    ],
  },
  {
    id: 'databases',
    name: 'DATABASES',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', tag: 'ACID' },
      { name: 'SQLite', tag: 'EMBEDDED' },
      { name: 'Alembic', tag: 'MIGRATIONS' },
    ],
  },
  {
    id: 'ai-data',
    name: 'AI / DATA',
    icon: BrainCircuit,
    skills: [
      { name: 'Computer Vision', tag: 'SPATIAL' },
      { name: 'Image Processing', tag: 'CV' },
      { name: 'NumPy', tag: 'TENSORS' },
      { name: 'Rasterio', tag: 'GEOTIFF' },
      { name: 'Matplotlib', tag: 'PLOTS' },
    ],
  },
  {
    id: 'cloud-devops',
    name: 'CLOUD / DEVOPS',
    icon: Cloud,
    skills: [
      { name: 'AWS Boto3', tag: 'SDK' },
      { name: 'Azure VM', tag: 'COMPUTE' },
      { name: 'DigitalOcean VPS', tag: 'HOSTING' },
      { name: 'Cloudflare DNS', tag: 'EDGE' },
      { name: 'Git', tag: 'VCS' },
      { name: 'GitHub', tag: 'CI/CD' },
    ],
  },
  {
    id: 'security',
    name: 'SECURITY',
    icon: ShieldCheck,
    skills: [
      { name: 'JWT', tag: 'AUTH' },
      { name: 'bcrypt', tag: 'HASH' },
      { name: 'HMAC Verification', tag: 'CRYPTO' },
      { name: 'Rate Limiting', tag: 'DEFENSE' },
      { name: 'Input Validation', tag: 'APPSEC' },
    ],
  },
  {
    id: 'tools',
    name: 'TOOLS',
    icon: Wrench,
    skills: [
      { name: 'UV', tag: 'PACKAGE' },
      { name: 'Postman', tag: 'API TEST' },
      { name: 'VS Code', tag: 'IDE' },
      { name: 'Linux', tag: 'KERNEL' },
      { name: 'Ruff', tag: 'LINTER' },
      { name: 'Vitest', tag: 'TESTING' },
    ],
  },
];

export const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-24 sm:py-36 px-6 border-t border-white/[0.06] bg-[#07090e]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-cyan-400 uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>06 // TECHNICAL ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Skills & Toolchain
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            A comprehensive, verified technical stack spanning backend frameworks, security protocols, system languages, databases, and developer tooling.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="rounded-2xl bg-[#0b0f17] border border-white/[0.08] hover:border-cyan-500/30 p-6 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/[0.06]">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-mono text-xs font-bold text-white tracking-wider">
                      {cat.name}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => {
                      const isHovered = hoveredSkill === skill.name;
                      return (
                        <div
                          key={skill.name}
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`group cursor-default px-3 py-1.5 rounded-lg border transition-all duration-200 flex items-center gap-2 font-mono text-xs ${
                            isHovered
                              ? 'bg-cyan-500/15 border-cyan-400 text-cyan-200 shadow-md shadow-cyan-950/40 scale-[1.03]'
                              : 'bg-white/[0.03] border-white/[0.06] text-slate-300 hover:border-white/[0.15]'
                          }`}
                        >
                          <span className="font-medium">{skill.name}</span>
                          {skill.tag && (
                            <span
                              className={`text-[9px] px-1 py-0.2 rounded transition-colors ${
                                isHovered
                                  ? 'bg-cyan-400 text-[#08090d] font-bold'
                                  : 'text-slate-500 bg-white/[0.04]'
                              }`}
                            >
                              {skill.tag}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ecosystem Bottom Telemetry */}
        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>NO PROGRESS BARS // ZERO FAKE PERCENTAGES // PRODUCTION TOOLCHAIN</span>
          </div>
          <div className="text-slate-400">
            TOTAL VERIFIED SKILLS: 33 ACTIVE CAPABILITIES
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
