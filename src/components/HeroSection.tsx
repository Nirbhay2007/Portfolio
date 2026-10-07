import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Shield, Terminal, ArrowRight, Lock, FileDown } from 'lucide-react';
import HeroVisual from './HeroVisual';

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden"
    >
      {/* Subtle background ambient mesh */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-600/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* Decorative subtle grid background */}
      <div className="absolute inset-0 bg-tech-grid bg-[size:32px_32px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Typography & CTAs */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* 1. Small Status Label */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0e1320] border border-emerald-500/30 text-emerald-400 font-mono text-xs tracking-wider shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>OPEN TO INTERNSHIP OPPORTUNITIES</span>
              </div>
            </motion.div>

            {/* 2. Hero Name in Large Confident Typography */}
            <motion.div variants={itemVariants} className="mb-4">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[0.95]">
                NIRBHAY <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                  GARG
                </span>
              </h1>
            </motion.div>

            {/* 3. Degree & Specialization */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-slate-300 font-mono text-sm sm:text-base">
                <span className="font-semibold text-cyan-400">B.Tech CSE</span>
                <span className="text-slate-600">/</span>
                <span className="text-slate-300">Cyber Security & Digital Forensics</span>
                <span className="text-slate-600">/</span>
                <span className="text-slate-400">UPES</span>
              </div>
            </motion.div>

            {/* 4. Positioning Statement */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-400 max-w-xl leading-relaxed mb-8"
            >
              Building secure backend systems and full-stack applications with defensive architecture, strong cryptography, and scalable engineering.
            </motion.p>

            {/* 5. CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-[#08090d] font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 w-full sm:w-auto"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="https://github.com/Nirbhay2007"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0e1320] hover:bg-[#151c2e] border border-white/[0.1] hover:border-cyan-500/40 text-slate-200 hover:text-white font-medium text-sm transition-all duration-200 w-full sm:w-auto"
              >
                <Github className="w-4 h-4 text-slate-400" />
                <span>GITHUB</span>
              </a>

              <a
                href="https://linkedin.com/in/nirbhaygarg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0e1320] hover:bg-[#151c2e] border border-white/[0.1] hover:border-blue-500/40 text-slate-200 hover:text-white font-medium text-sm transition-all duration-200 w-full sm:w-auto"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LINKEDIN</span>
              </a>

              <a
                href="/Nirbhay_Garg_Resume.pdf"
                download="Nirbhay_Garg_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-white font-medium text-sm transition-all duration-200 w-full sm:w-auto shadow-sm shadow-cyan-950/40"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>RESUME</span>
              </a>
            </motion.div>

            {/* Quick architectural indicators */}
            <motion.div
              variants={itemVariants}
              className="mt-10 pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-6 text-xs text-slate-500 font-mono"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>DEFENSE IN DEPTH</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>HMAC • JWT • BCRYPT</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span>FASTAPI • POSTGRES • REACT</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Original Interactive Technical Visual */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Down indicator */}
      <motion.button
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to About Section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 p-2 text-slate-500 hover:text-cyan-400 transition-colors focus:outline-none"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
