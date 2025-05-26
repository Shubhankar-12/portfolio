"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const technologies = {
  frontend: [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Vue.js", icon: "🟢" },
    { name: "Tailwind CSS", icon: "🌊" },
    { name: "TypeScript", icon: "🔷" },
  ],
  backend: [
    { name: "Node.js", icon: "🟩" },
    { name: "Express", icon: "🚂" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "GraphQL", icon: "⬢" },
  ],
  devops: [
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "CI/CD", icon: "🔄" },
    { name: "Git", icon: "🔀" },
  ],
  tools: [
    { name: "VS Code", icon: "📝" },
    { name: "Figma", icon: "🎨" },
    { name: "Postman", icon: "📮" },
    { name: "Jira", icon: "📊" },
  ],
}

export default function TechStackSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -20 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  return (
    <section id="tech-stack" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
              Tech Stack
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              The technologies and tools I use to bring ideas to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Frontend Technologies */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span className="text-primary">Frontend</span>
                <motion.div
                  className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center"
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                >
                  🎭
                </motion.div>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {technologies.frontend.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    whileHover="hover"
                    className="bg-background border border-primary/20 rounded-lg p-4 flex flex-col items-center text-center hover:border-primary/50 hover:shadow-md hover:shadow-primary/10 transition-all duration-300"
                  >
                    <motion.div
                      variants={iconVariants}
                      className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl mb-3"
                    >
                      {tech.icon}
                    </motion.div>
                    <span className="font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Backend Technologies */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span className="text-accent">Backend</span>
                <motion.div
                  className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center"
                  animate={{ rotate: [0, -10, 0, 10, 0] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                >
                  🧠
                </motion.div>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {technologies.backend.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    whileHover="hover"
                    className="bg-background border border-accent/20 rounded-lg p-4 flex flex-col items-center text-center hover:border-accent/50 hover:shadow-md hover:shadow-accent/10 transition-all duration-300"
                  >
                    <motion.div
                      variants={iconVariants}
                      className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-2xl mb-3"
                    >
                      {tech.icon}
                    </motion.div>
                    <span className="font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* DevOps */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span className="text-tertiary">DevOps</span>
                <motion.div
                  className="w-8 h-8 bg-tertiary/10 rounded-full flex items-center justify-center"
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                >
                  ⚙️
                </motion.div>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {technologies.devops.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    whileHover="hover"
                    className="bg-background border border-tertiary/20 rounded-lg p-4 flex flex-col items-center text-center hover:border-tertiary/50 hover:shadow-md hover:shadow-tertiary/10 transition-all duration-300"
                  >
                    <motion.div
                      variants={iconVariants}
                      className="w-12 h-12 bg-tertiary/10 rounded-full flex items-center justify-center text-2xl mb-3"
                    >
                      {tech.icon}
                    </motion.div>
                    <span className="font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span className="text-quaternary">Tools</span>
                <motion.div
                  className="w-8 h-8 bg-quaternary/10 rounded-full flex items-center justify-center"
                  animate={{ rotate: [0, -10, 0, 10, 0] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
                >
                  🛠️
                </motion.div>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {technologies.tools.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    whileHover="hover"
                    className="bg-background border border-quaternary/20 rounded-lg p-4 flex flex-col items-center text-center hover:border-quaternary/50 hover:shadow-md hover:shadow-quaternary/10 transition-all duration-300"
                  >
                    <motion.div
                      variants={iconVariants}
                      className="w-12 h-12 bg-quaternary/10 rounded-full flex items-center justify-center text-2xl mb-3"
                    >
                      {tech.icon}
                    </motion.div>
                    <span className="font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
