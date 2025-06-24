
import React, { Suspense, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Button } from '@/components/ui/button';

const AnimatedSphere = () => {
  const meshRef = useRef<any>();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} scale={2}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color="#8b5cf6" 
        roughness={0.1}
        metalness={0.8}
      />
    </mesh>
  );
};

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Fallback Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />

      {/* Simplified 3D Background */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Suspense fallback={null}>
          <Canvas 
            camera={{ position: [0, 0, 5], fov: 75 }}
            gl={{ 
              alpha: true,
              antialias: false,
              powerPreference: "default"
            }}
            dpr={1}
            style={{ background: 'transparent' }}
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 5]} intensity={1} />
            <AnimatedSphere />
          </Canvas>
        </Suspense>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium backdrop-blur-sm">
            Welcome to my digital world
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block">Hello, I'm</span>
          <span className="gradient-text">Nirbhay Garg</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Pursuing a BTech in Data Science & AI/ML, focused on building scalable, real-world solutions through analytical thinking and technology.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl glow-effect"
            onClick={() => {
              const element = document.getElementById('projects');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 glass-button font-semibold"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Let's Connect
          </Button>
        </motion.div>
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-[1]" />
    </section>
  );
};

export default HeroSection;
