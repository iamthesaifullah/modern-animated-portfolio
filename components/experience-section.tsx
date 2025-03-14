"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Full Stack Engineer",
      company: "Adlunam Inc.",
      period: "Oct 2022 - Present",
      location: "Tortola, British Virgin Islands",
      achievements: [
        "Transformed Company Web Presence: Elevated Adlunam's digital footprint by managing and enhancing over 22 websites.",
        "Led Web3 Innovations: Spearheaded the development of cutting-edge platforms, such as Adastra.",
        "Built High-Impact Custom Solutions: Designed and implemented tools including a Meme Generator, Quote Generator, and meeting web apps.",
        "Pioneered New Media Platforms: Developed Altcoin Observer, a WordPress-based publication built from scratch.",
        "Ensured Robust Security and Optimization: Conducted penetration testing, malware removal, and server hardening.",
      ],
      highlights: [
        "Successfully stabilized critical company servers suffering from downtime and malware issues upon joining.",
        "Delivered a fully functional Web3 platform integrating wallet features, token analytics, and gamification from scratch within strict deadlines.",
        "Recognized for commitment to excellence, often working extended hours to meet project deadlines and address urgent system issues.",
      ],
    },
    {
      title: "Freelance Contract",
      company: "Cams Shop",
      period: "Jun 2022 - Dec 2023",
      location: "Chantepie, France",
      achievements: [
        "Website Rebuilding and Optimization: Transitioned Cams Shop from PrestaShop to WordPress, redesigning the eCommerce site for better performance, usability, and security.",
        "Holistic Platform Management: Took end-to-end ownership of the websites, including server maintenance, bug fixing, SEO optimization, security updates, and marketing campaign execution.",
        "Client-Centric Deliverables: Worked closely with clients to implement custom features, ensuring platforms aligned with their evolving business needs.",
      ],
      highlights: [
        "Enhanced site performance by implementing robust security measures and optimization strategies, leading to increased traffic and reduced downtime.",
      ],
    },
    {
      title: "Freelance Contract",
      company: "Versus Official",
      period: "Dec 2022 - Dec 2023",
      location: "Dhaka, Bangladesh",
      achievements: [
        "Website Rebuilding and Optimization: Transitioned from PrestaShop to WordPress, redesigning the eCommerce site for better performance, usability, and security.",
        "Holistic Platform Management: Took end-to-end ownership of the websites, including server maintenance, bug fixing, SEO optimization, security updates, and marketing campaign execution.",
        "Client-Centric Deliverables: Worked closely with clients to implement custom features, ensuring platforms aligned with their evolving business needs.",
      ],
      highlights: [
        "Maintained and improved Versus Official's web infrastructure, delivering consistent uptime and smooth functionality.",
      ],
    },
    {
      title: "Freelance Projects",
      company: "Contract-Based Projects",
      period: "Apr 2022 - Dec 2023",
      location: "United States",
      achievements: [
        "End-to-End Project Delivery: Developed and delivered multiple platforms, including Trello-like project management tools, eCommerce websites, portfolio sites, and office management systems.",
        "Custom Development Expertise: Leveraged modern frontend and backend technologies to build solutions from scratch, ensuring scalability and user-friendliness.",
        "Social Media-Driven Contracts: Secured and executed projects through professional networks, demonstrating adaptability and resourcefulness.",
      ],
      highlights: [
        "Designed and launched fully operational platforms under tight deadlines while maintaining high standards of quality.",
        "Built long-term relationships with clients through exceptional deliverables and proactive communication.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the impactful projects I've delivered.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <Card className="glass-card hover-effect overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <Badge variant="outline" className="mb-1">
                        {exp.period}
                      </Badge>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

