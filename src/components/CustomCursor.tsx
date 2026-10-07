import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<'default' | 'link' | 'project' | 'button'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only activate cursor on devices with fine pointer (mouse) and width >= 1024px
    const checkPointer = () => {
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
      const isWideEnough = window.innerWidth >= 1024;
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsDesktop(hasFinePointer && isWideEnough && !prefersReduced);
    };

    checkPointer();
    window.addEventListener('resize', checkPointer);

    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest('[data-cursor="project"]');
      if (projectEl) {
        setCursorState('project');
        return;
      }

      const linkEl = target.closest('a, [data-cursor="link"]');
      if (linkEl) {
        setCursorState('link');
        return;
      }

      const buttonEl = target.closest('button, [role="button"], [data-cursor="button"]');
      if (buttonEl) {
        setCursorState('button');
        return;
      }

      setCursorState('default');
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkPointer);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isDesktop, isVisible]);

  if (!isDesktop || !isVisible) {
    return null;
  }

  const isExpanded = cursorState === 'project' || cursorState === 'link';

  return (
    <>
      {/* Central precise dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-cyan-400"
        style={{
          width: 6,
          height: 6,
          marginLeft: -3,
          marginTop: -3,
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          opacity: isExpanded ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1200,
          damping: 50,
          mass: 0.1,
        }}
      />

      {/* Trailing follower badge */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full flex items-center justify-center font-mono text-[10px] font-semibold tracking-wider select-none"
        style={{
          border: '1px solid rgba(0, 229, 255, 0.45)',
          background: isExpanded ? 'rgba(8, 12, 20, 0.85)' : 'rgba(0, 229, 255, 0.05)',
          backdropFilter: isExpanded ? 'blur(8px)' : 'none',
          color: '#38bdf8',
        }}
        animate={{
          x: mousePosition.x - (cursorState === 'project' ? 36 : cursorState === 'link' ? 32 : cursorState === 'button' ? 16 : 14),
          y: mousePosition.y - (cursorState === 'project' ? 36 : cursorState === 'link' ? 32 : cursorState === 'button' ? 16 : 14),
          width: cursorState === 'project' ? 72 : cursorState === 'link' ? 64 : cursorState === 'button' ? 32 : 28,
          height: cursorState === 'project' ? 72 : cursorState === 'link' ? 64 : cursorState === 'button' ? 32 : 28,
          borderColor: isExpanded ? 'rgba(0, 229, 255, 0.8)' : 'rgba(0, 229, 255, 0.3)',
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          mass: 0.2,
        }}
      >
        {cursorState === 'project' && <span className="text-[10px] tracking-widest text-cyan-300">VIEW</span>}
        {cursorState === 'link' && <span className="text-[9px] tracking-wider text-cyan-300">OPEN ↗</span>}
      </motion.div>
    </>
  );
};

export default CustomCursor;
