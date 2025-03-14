"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"

export default function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Science",
      field: "Computer Science and Engineering",
      institution: "Port City International University",
      location: "Chattogram, Bangladesh",
      period: "Jan 2019 - Feb 2023",
      website: "portcity.edu.bd",
      level: "EQF level 6",
    },
    {
      degree: "Full Stack Web Development",
      field: "",
      institution: "Udemy",
      location: "",
      period: "Oct 2020 - Jan 2022",
      website: "udemy.com",
      level: "EQF level 6",
    },
    {
      degree: "WordPress Website Developer",
      field: "",
      institution: "Udemy",
      location: "",
      period: "Oct 2020 - Jan 2021",
      website: "udemy.com",
      level: "EQF level 6",
    },
    {
      degree: "Microsoft AI",
      field: "",
      institution: "Microsoft",
      location: "India",
      period: "Jan 2021 - Feb 2021",
      website: "",
      level: "EQF level 3",
    },
    {
      degree: "Internet of Things",
      field: "",
      institution: "Stanford University (Stanford Center Professional Development)",
      location: "",
      period: "Jan 2021 - Jan 2021",
      website: "scpd.stanford.edu",
      level: "EQF level 4",
    },
    {
      degree: "WordPress Development",
      field: "",
      institution: "Dreamland IT",
      location: "Dhaka, Bangladesh",
      period: "May 2021 - Dec 2021",
      website: "dreamlandit.com",
      level: "EQF level 4",
    },
    {
      degree: "Pen Tester",
      field: "",
      institution: "Eduonix Learning Solution",
      location: "",
      period: "Aug 2020 - Jan 2021",
      website: "eduonix.com",
      level: "EQF level 5",
    },
  ]

  return (
    <section id="education" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Training</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My academic background and professional certifications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card hover-effect h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 mt-1">
                      {index === 0 ? (
                        <GraduationCap className="w-6 h-6 text-primary" />
                      ) : (
                        <Award className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                      {edu.field && <p className="text-primary mb-2">{edu.field}</p>}
                      <p className="mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="outline">{edu.period}</Badge>
                        {edu.level && <Badge variant="outline">{edu.level}</Badge>}
                      </div>
                      {edu.location && <p className="text-sm text-muted-foreground">{edu.location}</p>}
                      {edu.website && (
                        <a
                          href={`https://${edu.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          {edu.website}
                        </a>
                      )}
                    </div>
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

