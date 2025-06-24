
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Data Analytics Job Simulation',
      description: 'Completed a virtual job simulation focusing on data analysis, visualization, and insights using Python, Excel, and Tableau. Gained practical exposure to interpreting real-world business datasets and delivering data-driven recommendations.',
      image: 'Data.jpg',
      tags: ['Python', 'Tableau', 'Excel'],
      featured: true,
      live:'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_KvppNfCoPoMo8v48B_1750652575184_completion_certificate.pdf'
    },

    {
      title: 'Technology Job Simulation',
      description: 'Engaged in a simulated tech internship solving industry tasks using Python and Replit. Practiced software logic, documentation, and communication workflows to develop foundational experience in technical roles.',
      image: 'Technology.jpg',
      tags: ['Python', 'Replit', 'React'],
      featured: true,
      live:'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_KvppNfCoPoMo8v48B_1750662314696_completion_certificate.pdf'
    },

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
    <section id="projects" className="section-container bg-gradient-to-b from-background to-background/80">
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
            My Work
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Featured <span className="gradient-text">Certificates</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A curated selection of certifications and job simulations I've completed, showcasing my commitment to continuous learning and foundational experience in data and technology.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`group ${project.featured ? 'md:col-span-2' : ''}`}
            >
              <Card className="glass-card overflow-hidden h-full premium-shadow hover:shadow-2xl transition-all duration-500 group-hover:border-primary/30">
                <div className={`grid ${project.featured ? 'lg:grid-cols-2' : ''} h-full`}>
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full backdrop-blur-sm">
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Overlay Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-4">
                        
                        
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tagIndex}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium cursor-hover"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <Button
                        className="flex-1 cursor-hover glow-effect"
                        onClick={() => window.open(project.live, '_blank')}
                      >
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;
