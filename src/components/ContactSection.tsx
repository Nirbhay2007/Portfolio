
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xldnogod', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error: unknown) {
      let message = "Something went wrong. Please try again later.";
      if (error instanceof Error) {
        message = error.message;
      }
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'contact@nirbhaygarg.com',
      link: 'mailto:contact@nirbhaygarg.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: 'Comming Soon...',
      link: 'tel:+91'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Jalandhar,India',
      link: '#'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Nirbhay Garg',
      link: 'https://linkedin.com/in/nirbhaygarg'
    }
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
    <section id="contact" className="section-container bg-gradient-to-b from-background/80 to-background">
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
            Get In Touch
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="gradient-text">Open to Learning, Growing, and Creating.</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Currently pursuing Data Science and AI/ML. I’m open to internships, collaborations, or learning opportunities — let’s connect!
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="glass-card p-8 premium-shadow">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="glass-button"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="glass-button"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project subject"
                    required
                    className="glass-button"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="glass-button resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 cursor-hover glow-effect"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const isMailto = info.link.startsWith('mailto:');
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      {...(!isMailto ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex items-center space-x-4 p-4 glass-card rounded-xl cursor-hover group hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="text-2xl">{info.icon}</div>
                      <div>
                        <div className="font-medium text-muted-foreground text-sm">{info.label}</div>
                        <div className="font-semibold group-hover:text-primary transition-colors">{info.value}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', icon: '🐙', link: 'https://github.com/Nirbhay2007/' },
                  { name: 'LinkedIn', icon: '💼', link: 'www.linkedin.com/in/nirbhaygarg' },
                  { name: 'Twitter', icon: '🐦', link: 'https://x.com/Nirbhay1030' },
                  { name: 'Instagram', icon: '📷', link: 'https://www.instagram.com/nirbhaygarg_' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    whileHover={{ scale: 1.1, rotateY: 180 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-xl cursor-hover hover:border-primary/30 transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 rounded-xl border-l-4 border-l-green-500"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-green-400">Available for Internships</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Always exploring new ideas and opportunities to grow — happy to connect and collaborate!
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-muted-foreground">
            © 2025 Nirbhay Garg. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default ContactSection;
