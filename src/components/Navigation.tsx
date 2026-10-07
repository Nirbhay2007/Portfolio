import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Menu, X, ArrowUpRight, Terminal, FileDown } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'security', label: 'Security' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sectionElements = ['hero', ...NAV_ITEMS.map((item) => item.id)]
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(el.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#08090d]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/50'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/60 transition-colors">
            <span className="font-mono text-xs font-bold">NG</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              NIRBHAY GARG
            </span>
            <span className="font-mono text-[10px] text-slate-400 tracking-wider">
              CSE // SECURITY
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0e121b]/80 border border-white/[0.08] p-1 rounded-full backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  isActive
                    ? 'text-cyan-300 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-cyan-500/15 border border-cyan-500/40 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right side Actions & Socials */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>OPEN TO INTERNSHIPS</span>
          </div>

          <a
            href="/Nirbhay_Garg_Resume.pdf"
            download="Nirbhay_Garg_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="link"
            aria-label="Download Nirbhay Garg Resume PDF"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold transition-all hover:border-cyan-400"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </a>

          <a
            href="https://github.com/Nirbhay2007"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-white/[0.08] transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/nirbhaygarg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-white/[0.08] transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="/Nirbhay_Garg_Resume.pdf"
            download="Nirbhay_Garg_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
            className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg bg-[#0e121b] border border-white/[0.08] text-slate-300 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#0a0d14]/98 border-b border-white/[0.1] backdrop-blur-2xl"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>OPEN TO INTERNSHIP OPPORTUNITIES</span>
              </div>

              <a
                href="/Nirbhay_Garg_Resume.pdf"
                download="Nirbhay_Garg_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-sm font-semibold text-cyan-300 font-mono"
              >
                <FileDown className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>

              <div className="space-y-1 pt-2">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-300 hover:bg-white/[0.04]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-slate-500">#{item.id}</span>
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center gap-3">
                <a
                  href="https://github.com/Nirbhay2007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-xs font-medium text-slate-200"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/nirbhaygarg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-xs font-medium text-cyan-300"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;
