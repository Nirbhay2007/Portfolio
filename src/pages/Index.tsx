import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WhatIBuildSection from '@/components/WhatIBuildSection';
import ProjectsSection from '@/components/ProjectsSection';
import SecuritySection from '@/components/SecuritySection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import CustomCursor from '@/components/CustomCursor';
import SmoothScroll from '@/components/SmoothScroll';

const Index = () => {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#08090d] text-[#f1f3f7] selection:bg-cyan-500/20 selection:text-cyan-300 overflow-x-hidden">
        {/* Subtle global background lighting & fine technical grid */}
        <div className="fixed inset-0 bg-tech-grid bg-[size:48px_48px] opacity-[0.25] pointer-events-none z-0" />
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-radial from-cyan-500/[0.04] via-transparent to-transparent pointer-events-none z-0" />
        <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-blue-600/[0.03] via-transparent to-transparent pointer-events-none z-0" />

        {/* Desktop-only custom cursor */}
        <CustomCursor />

        {/* Floating / Sticky Navigation */}
        <Navigation />

        {/* Narrative Flow: Hero -> About -> What I Build -> Projects -> Security -> Experience -> Skills -> Contact */}
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <WhatIBuildSection />
          <ProjectsSection />
          <SecuritySection />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
        </main>
      </div>
    </SmoothScroll>
  );
};

export default Index;
