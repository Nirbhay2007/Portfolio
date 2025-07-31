
import React, { Suspense, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Card } from '@/components/ui/card';

const FloatingBox = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<any>();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={0.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Backend',
      icon: '⚡',
      skills: ['Firebase', 'Python', 'Pandas', 'NumPy',],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: ['GitHub', 'Tableau', 'Git', 'VS Code'],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section id="skills" className="section-container bg-gradient-to-b from-background/80 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4"
          >
            My Skills
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Technologies I'm <span className="gradient-text">Learning</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A growing toolkit of modern technologies and frameworks I'm exploring to turn ideas into reality.
          </motion.p>
        </motion.div>

        {/* Simplified 3D Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
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
              <ambientLight intensity={0.3} />
              <pointLight position={[10, 10, 10]} />
              <FloatingBox position={[-2, 2, 0]} color="#8b5cf6" />
              <FloatingBox position={[2, -1, 0]} color="#ec4899" />
              <FloatingBox position={[0, 1, -1]} color="#06b6d4" />
            </Canvas>
          </Suspense>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group"
            >
              <Card className="glass-card p-8 h-full premium-shadow hover:shadow-2xl transition-all duration-300 group-hover:border-primary/30">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <div className={`w-16 h-1 bg-gradient-to-r ${category.color} rounded-full mx-auto`} />
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                      <span className="font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Level Indicators */}
        <motion.div
          variants={containerVariants}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6">Current Learning Journey</h3>
            {[
              { skill: 'Python', level: 44 },
              { skill: 'Tableau', level: 31},
              { skill: 'HTML/CSS', level: 41 },
              { skill: 'Git & GitHub', level: 60 },
            ].map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-primary">{item.level}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center justify-center">
            <div className="glass-card p-8 text-center rounded-2xl">
              <div className="text-6xl font-bold gradient-text mb-2">7+</div>
              <div className="text-lg text-muted-foreground">Months of Experience</div>
              <div className="text-5xl font-bold gradient-text mt-4 mb-2">9+</div>
              <div className="text-lg text-muted-foreground">Tools Explored</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
