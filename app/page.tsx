"use client"

import { useEffect } from "react"
import AnimatedBackground from "@/components/animated-background"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import SkillsSection from "@/components/skills-section"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  // Ensure dark mode is applied
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  return (
    <main>
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

