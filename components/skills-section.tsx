"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function SkillsSection() {
  const frontendSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "React Query",
    "React Router",
    "Styled Components",
    "Framer Motion",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "SASS/SCSS",
    "jQuery",
    "Webpack",
    "Vite",
  ]

  const backendSkills = [
    "PHP",
    "Laravel",
    "Python",
    "Flask",
    "Node.js",
    "Express.js",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "SQLAlchemy",
    "RESTful APIs",
    "GraphQL",
    "Firebase",
    "Supabase",
    "Prisma",
    "Sequelize",
  ]

  const cmsSkills = [
    "WordPress",
    "WordPress Elementor",
    "WordPress Plugin Development",
    "WordPress Theme Development",
    "WooCommerce",
    "ACF",
    "Webdesign in WIX",
    "PrestaShop",
    "Shopify",
    "Magento",
  ]

  const securitySkills = [
    "Web Pentesting",
    "OWASP Top 10",
    "Pentesting Tools",
    "Malware Removal",
    "Server Load Balancing",
    "modsecurity",
    "SSL/TLS",
    "Authentication Systems",
    "OAuth",
    "JWT",
    "XSS Prevention",
    "CSRF Protection",
    "SQL Injection Prevention",
  ]

  const devOpsSkills = [
    "Server Maintenance",
    "DNS Setup",
    "SSL",
    "cPanel",
    "Git Version Control",
    "GitHub Actions",
    "CI/CD Pipelines",
    "Docker",
    "AWS",
    "Vercel",
    "Netlify",
    "Digital Ocean",
    "Linux Server Administration",
    "Nginx",
    "Apache",
  ]

  const otherSkills = [
    "API Integration",
    "Web3 Integration",
    "SEO Optimization",
    "Team Leadership",
    "Problem Solving",
    "Agile Methodologies",
    "Blockchain",
    "Smart Contracts",
    "Wallet Integration",
    "UI/UX Design",
    "Figma",
    "Adobe XD",
    "Responsive Design",
  ]

  const SkillCategory = ({ skills }: { skills: string[] }) => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, amount: 0.3 })

    return (
      <div ref={ref} className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
          >
            <Badge
              variant="outline"
              className="py-2 px-3 text-sm bg-secondary/30 hover:bg-primary/20 transition-colors hover-effect"
            >
              {skill}
            </Badge>
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="glass-card">
            <CardContent className="p-6">
              <Tabs defaultValue="frontend">
                <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
                  <TabsTrigger value="frontend" className="hover-effect">
                    Frontend
                  </TabsTrigger>
                  <TabsTrigger value="backend" className="hover-effect">
                    Backend
                  </TabsTrigger>
                  <TabsTrigger value="cms" className="hover-effect">
                    CMS
                  </TabsTrigger>
                  <TabsTrigger value="security" className="hover-effect">
                    Security
                  </TabsTrigger>
                  <TabsTrigger value="devops" className="hover-effect">
                    DevOps
                  </TabsTrigger>
                  <TabsTrigger value="other" className="hover-effect">
                    Other
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="frontend" className="pt-4">
                  <SkillCategory skills={frontendSkills} />
                </TabsContent>

                <TabsContent value="backend" className="pt-4">
                  <SkillCategory skills={backendSkills} />
                </TabsContent>

                <TabsContent value="cms" className="pt-4">
                  <SkillCategory skills={cmsSkills} />
                </TabsContent>

                <TabsContent value="security" className="pt-4">
                  <SkillCategory skills={securitySkills} />
                </TabsContent>

                <TabsContent value="devops" className="pt-4">
                  <SkillCategory skills={devOpsSkills} />
                </TabsContent>

                <TabsContent value="other" className="pt-4">
                  <SkillCategory skills={otherSkills} />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

