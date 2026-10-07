import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  ShieldCheck,
  Terminal,
  FileDown,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('itsnirbhaygarg@gmail.com');
    setCopied(true);
    toast({
      title: 'Email Copied',
      description: 'itsnirbhaygarg@gmail.com copied to clipboard.',
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/meaeagye', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: 'Transmission Delivered',
          description: "Thank you for reaching out. I'll get back to you shortly.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json();
        let errorMessage = 'Failed to send message';
        if (data && data.errors && Array.isArray(data.errors)) {
          errorMessage = data.errors.map((err: { message: string }) => err.message).join(', ');
        } else if (data && data.error) {
          errorMessage = data.error;
        }
        throw new Error(errorMessage);
      }
    } catch (error: unknown) {
      let message = 'Failed to transmit message. Please try sending a direct email.';
      if (error instanceof Error) {
        message = error.message;
      }
      toast({
        title: 'Transmission Failed',
        description: message,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative pt-24 sm:pt-36 pb-16 px-6 border-t border-white/[0.06] bg-[#07090e]">
      <div className="max-w-7xl mx-auto">
        {/* Large Ending Heading */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-cyan-400 uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>07 // INITIATE TRANSMISSION</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
            LET'S BUILD SOMETHING.
          </h2>
          <p className="text-slate-400 text-base sm:text-xl mt-6 leading-relaxed max-w-2xl">
            Currently seeking software engineering and backend internship opportunities. Open to discussing robust system architectures, security-focused projects, or technical collaborations.
          </p>

          {/* Quick Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="mailto:itsnirbhaygarg@gmail.com"
              data-cursor="link"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-[#08090d] font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20"
            >
              <Mail className="w-4 h-4" />
              <span>EMAIL ME</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/Nirbhay2007"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#0e1320] hover:bg-[#151c2e] border border-white/[0.1] hover:border-cyan-500/40 text-slate-200 hover:text-white font-medium text-sm transition-all duration-200"
            >
              <Github className="w-4 h-4 text-slate-400" />
              <span>GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
            </a>

            <a
              href="https://linkedin.com/in/nirbhaygarg"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#0e1320] hover:bg-[#151c2e] border border-white/[0.1] hover:border-blue-500/40 text-slate-200 hover:text-white font-medium text-sm transition-all duration-200"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
            </a>

            <a
              href="/Nirbhay_Garg_Resume.pdf"
              download="Nirbhay_Garg_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-white font-medium text-sm transition-all duration-200 shadow-sm shadow-cyan-950/40"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              <span>DOWNLOAD RESUME</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-500" />
            </a>
          </div>
        </div>

        {/* Contact Grid: Direct Channels (Left) vs Interactive Form (Right) */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-4">
            <div className="font-mono text-xs uppercase text-slate-400 tracking-wider mb-2">
              DIRECT REACHABILITY
            </div>

            {/* Email Card with Copy */}
            <div className="p-5 rounded-2xl bg-[#0b0f17] border border-white/[0.08] hover:border-cyan-500/30 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-slate-400">EMAIL ADDRESS</span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 font-mono text-[11px] text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>
              <a
                href="mailto:itsnirbhaygarg@gmail.com"
                className="text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition-colors font-mono break-all"
              >
                itsnirbhaygarg@gmail.com
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="p-5 rounded-2xl bg-[#0b0f17] border border-white/[0.08] hover:border-blue-500/30 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-slate-400">LINKEDIN PROFILE</span>
                <span className="font-mono text-[11px] text-blue-400">CONNECT</span>
              </div>
              <a
                href="https://linkedin.com/in/nirbhaygarg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-bold text-white hover:text-blue-300 transition-colors font-mono flex items-center gap-1"
              >
                <span>linkedin.com/in/nirbhaygarg</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </a>
            </div>

            {/* GitHub Card */}
            <div className="p-5 rounded-2xl bg-[#0b0f17] border border-white/[0.08] hover:border-cyan-500/30 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-slate-400">GITHUB PROFILE</span>
                <span className="font-mono text-[11px] text-slate-400">REPOSITORIES</span>
              </div>
              <a
                href="https://github.com/Nirbhay2007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition-colors font-mono flex items-center gap-1"
              >
                <span>github.com/Nirbhay2007</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </a>
            </div>

            {/* Security note */}
            <div className="pt-2 font-mono text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>GPG / HTTPS SECURE ENCRYPTED INBOX</span>
            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0b0f17] border border-white/[0.08] p-7 sm:p-8 relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="font-mono text-xs font-semibold text-white tracking-wider">
                    SEND A MESSAGE // FORM DISPATCH
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-500">ENDPOINT ACTIVE</span>
              </div>

              <form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/meaeagye"
                method="POST"
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-slate-400">NAME</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name or Team"
                      className="w-full px-4 py-3 rounded-xl bg-[#080b12] border border-white/[0.08] focus:border-cyan-400 focus:outline-none text-white text-sm font-sans placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-slate-400">EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#080b12] border border-white/[0.08] focus:border-cyan-400 focus:outline-none text-white text-sm font-sans placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-slate-400">SUBJECT</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Internship Inquiry / Project Discussion"
                    className="w-full px-4 py-3 rounded-xl bg-[#080b12] border border-white/[0.08] focus:border-cyan-400 focus:outline-none text-white text-sm font-sans placeholder:text-slate-600 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-slate-400">MESSAGE</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about the role, technical challenge, or project scope..."
                    className="w-full px-4 py-3 rounded-xl bg-[#080b12] border border-white/[0.08] focus:border-cyan-400 focus:outline-none text-white text-sm font-sans placeholder:text-slate-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 text-[#08090d] font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'DISPATCHING TRANSMISSION...' : 'SEND MESSAGE'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* 28. MINIMAL FOOTER */}
        <footer className="mt-28 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="font-bold text-white tracking-wider">NIRBHAY GARG</span>
            <span className="hidden sm:inline text-slate-600">—</span>
            <span className="text-slate-300">B.Tech CSE — Cyber Security & Digital Forensics</span>
          </div>

          <div className="flex items-center gap-4 text-cyan-400 tracking-wider">
            <span>BACKEND</span>
            <span className="text-slate-600">•</span>
            <span>FULL-STACK</span>
            <span className="text-slate-600">•</span>
            <span>SECURITY</span>
          </div>

          <div className="text-slate-400">
            © 2026 Nirbhay Garg
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;
