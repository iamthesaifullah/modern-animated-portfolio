"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Typed from "typed.js"
import PlaceholderProfile from "./placeholder-profile"

export default function HeroSection() {
  const typedRef = useRef<HTMLSpanElement>(null)
  const typedAdvancedRef = useRef<HTMLSpanElement>(null)
  const [thunderActive, setThunderActive] = useState(false)

  useEffect(() => {
    if (!typedRef.current) return

    const typed = new Typed(typedRef.current, {
      strings: ["Full Stack Engineer", "Web3 Developer", "WordPress Expert", "Security Specialist"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  useEffect(() => {
    if (!typedAdvancedRef.current) return

    const typedAdvanced = new Typed(typedAdvancedRef.current, {
      strings: ["the most advanced dev", "web3 innovator", "security expert", "full stack wizard"],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
    })

    return () => {
      typedAdvanced.destroy()
    }
  }, [])

  // Thunder effect for the image border
  useEffect(() => {
    const thunderInterval = setInterval(() => {
      setThunderActive(true)
      setTimeout(() => setThunderActive(false), 150)
    }, 3000)

    return () => clearInterval(thunderInterval)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h3 className="text-xl md:text-2xl font-medium text-muted-foreground mb-2">Hello, I'm</h3>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Md Saifullah
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              I'm a <span ref={typedRef} className="text-primary"></span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Results-driven Full Stack Engineer with expertise in Web3 technologies, API integration, and secure web
              solutions. Building scalable, optimized, and dynamic web platforms.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 hover-effect"
                size="lg"
                onClick={() => {
                  window.open("/Md_Saifullah_Resume.pdf", "_blank")
                }}
              >
                Download CV
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 hover-effect"
                onClick={scrollToAbout}
              >
                Learn More
              </Button>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/iamthesaifullah"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-effect"
              >
                <Github className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/iamthesaifullah"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-effect"
              >
                <Linkedin className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://twitter.com/iamthesaifullah"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-effect"
              >
                <Twitter className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="mailto:kaisarsaiful@gmail.com" className="hover-effect">
                <Mail className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex flex-col items-center"
          >
            <div className="relative mb-6">
              {/* Thunder border effect */}
              <div
                className="absolute -inset-1 rounded-full transition-all duration-200"
                style={{
                  background: thunderActive
                    ? "linear-gradient(45deg, rgba(99, 102, 241, 0.8), rgba(168, 85, 247, 0.8))"
                    : "linear-gradient(45deg, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.3))",
                  boxShadow: thunderActive
                    ? "0 0 30px 5px rgba(168, 85, 247, 0.8), 0 0 60px 10px rgba(99, 102, 241, 0.4)"
                    : "0 0 15px 2px rgba(168, 85, 247, 0.3)",
                  filter: thunderActive ? "brightness(1.5)" : "none",
                }}
              ></div>
              <div className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 relative">
                <PlaceholderProfile className="w-full h-full" />
              </div>
            </div>

            {/* Advanced dev typewriter text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-center"
            >
              <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                Md Saifullah <span ref={typedAdvancedRef}></span>
              </h3>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
          <ArrowDown className="w-5 h-5 text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}

