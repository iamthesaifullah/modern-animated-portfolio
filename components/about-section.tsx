"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Code, Globe, Server, Shield } from "lucide-react"
import PlaceholderProfile from "./placeholder-profile"

export default function AboutSection() {
  const services = [
    {
      icon: <Globe className="w-10 h-10 text-primary" />,
      title: "Web Development",
      description: "Creating responsive, optimized websites and web applications using modern technologies.",
    },
    {
      icon: <Code className="w-10 h-10 text-primary" />,
      title: "Web3 Integration",
      description: "Implementing blockchain technologies and wallet connections for next-gen applications.",
    },
    {
      icon: <Server className="w-10 h-10 text-primary" />,
      title: "Server Management",
      description: "Maintaining, optimizing, and securing servers for optimal performance and uptime.",
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Security Solutions",
      description: "Conducting penetration testing and implementing robust security measures.",
    },
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Results-driven Full Stack Engineer with over 2 years of professional experience and 4 years of project-based
            experience.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-xl"></div>
              <div className="neumorphic p-2 rounded-xl relative">
                <div className="rounded-xl overflow-hidden relative aspect-[4/3] w-full max-w-lg">
                  <PlaceholderProfile className="w-full h-full" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-4">Full Stack Engineer & Web3 Specialist</h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate Full Stack Engineer with expertise in designing, developing, and securing websites and
              web applications. My focus is on creating scalable, optimized, and secure solutions, with a strong
              emphasis on Web3 technologies, API integration, server maintenance, and team leadership.
            </p>
            <p className="text-muted-foreground mb-6">
              I excel in building and maintaining dynamic web platforms, custom plugins, and CMS solutions. My approach
              combines technical expertise with creative problem-solving to deliver exceptional digital experiences.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="font-medium">Name:</p>
                <p className="text-muted-foreground">Md Saifullah</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-muted-foreground">kaisarsaiful@gmail.com</p>
              </div>
              <div>
                <p className="font-medium">Phone:</p>
                <p className="text-muted-foreground">(+880) 1825377647</p>
              </div>
              <div>
                <p className="font-medium">From:</p>
                <p className="text-muted-foreground">Chattogram, Bangladesh</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card hover-effect h-full">
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10">{service.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

