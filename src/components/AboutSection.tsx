
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const stats = [
    { number: '6+', label: 'Month Experience' },
    { number: '5+', label: 'Projects Completed' },
    { number: '4+', label: 'Skill Certificates' },
    { number: '100%', label: 'Growth Focus' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="section-container bg-gradient-to-b from-background to-background/80">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.span
                variants={itemVariants}
                className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4"
              >
                About Me
              </motion.span>
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Crafting Digital <span className="gradient-text">Experiences</span>
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-muted-foreground leading-relaxed mb-6"
              >
                I’m a B.Tech undergraduate specializing in Data Science and Artificial Intelligence/Machine Learning.  
                With a strong interest in technology and innovation, I’m passionate about creating impactful digital solutions 
                 From intuitive front-end interfaces to data-driven insights, I enjoy exploring how code and design come together to solve real-world problems.

              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Currently focused on building my skills through hands-on projects, certifications, and internships,
                 I aim to grow into a versatile developer and data enthusiast ready to contribute to the future of intelligent systems.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Card */}
          <motion.div variants={itemVariants} className="relative">
            <Card className="glass-card p-8 premium-shadow">
              <div className="relative">
                {/* Profile Image Placeholder */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-64 h-64 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/10 flex items-center justify-center overflow-hidden"
                >
                  <img
                    src="/nirbhay.jpeg"
                    alt="Nirbhay Garg"
                    className="w-64 h-64 object-cover rounded-xl shadow-lg"
                  />
                </motion.div>

                {/* Tech Stack Icons */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-center mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {['Python','CSS', 'Git', 'Tableau'].map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium cursor-hover"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"
                />
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl"
                />
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
