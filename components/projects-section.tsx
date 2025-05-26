"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Maximize2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "Resume Rocket App",
    description:
      "An AI-powered resume grading and tailoring tool with PDF parsing, S3 integration, and job-matching logic.",
    image: "./resume-rocket-img.png",
    tags: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "AWS S3"],
    github: "https://github.com/Shubhankar-12/resume-grader-frontend",

    longDescription:
      "Resume Rocket is a full-stack application that allows users to upload resumes, get AI-based feedback, and tailor resumes for specific job descriptions. It includes login with GitHub, resume upload to S3, intelligent resume parsing, grading, and cover letter generation using GPT.",
    icon: "🚀",
  },
  {
    title: "Shopezy 2.0",
    description:
      "An open-source invoicing and analytics solution tailored for small businesses.",
    image: "./shopezy-img.png",
    tags: ["Electron.js", "JavaScript", "SQLite3", "WebGL", "Barcode Scanner"],
    github: "https://github.com/Jatin2672/Shopezy2.0",

    longDescription:
      "Shopezy 2.0 is a comprehensive desktop and mobile application designed to assist small businesses, such as grocery and fashion stores, in managing invoices, stock, and analytics. The platform offers features like automatic GST calculations, profit analysis, and a built-in barcode scanner powered by Google Machine Learning. Developed using Electron.js for cross-platform desktop support and Android Studio for mobile deployment, it ensures real-time graph plotting with WebGL and operates efficiently without the need for an active internet connection.",
    icon: "🧾",
  },
  {
    title: "Quizzy App",
    description:
      "A fun quiz application with authentication, leaderboard, and responsive UI.",
    image: "./quizzy-img.png",
    tags: ["React", "Redux", "Firebase", "Tailwind CSS"],
    github: "https://github.com/Shubhankar-12/quizzy-frontend",

    longDescription:
      "Quizzy is a React-based app where users can take topic-wise quizzes. It features Firebase Authentication, user profiles, leaderboards, a quiz timer, and smooth navigation. Built with Tailwind CSS for a mobile-first experience.",
    icon: "🧠",
  },
  {
    title: "Crown Clothing Store",
    description:
      "A full-stack e-commerce app with Google OAuth, cart state, and Stripe checkout.",
    image: "./CrownProject-img.png",
    tags: ["React", "Redux", "Firebase", "Stripe", "TypeScript", "Sass"],
    github: "https://github.com/Shubhankar-12/e-commerce-capstone",
    demo: "https://crown-clothing-shubh.netlify.app/",
    longDescription:
      "Crown Clothing is an e-commerce platform using React and Redux for frontend state management, Firebase for authentication and Firestore database, Stripe for payments, and TypeScript for type safety. Styled with Sass and deployed on Netlify.",
    icon: "🛍️",
  },
];

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-quaternary/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
              Featured Projects
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-quaternary"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              A showcase of my recent work and the technologies I've been
              working with.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden group">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="w-full"
                          onClick={() => setSelectedProject(project)}
                        >
                          <Maximize2 className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </div>

                    {/* Cartoon element */}
                    <motion.div
                      className="absolute top-2 right-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg"
                      animate={{
                        rotate: [0, 10, 0, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        delay: index * 0.5,
                      }}
                    >
                      {project.icon || "🚀"}
                    </motion.div>
                  </div>
                  <CardContent className="flex-grow p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="bg-primary/5"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-6 pt-0">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="gap-2">
                        <Github className="h-4 w-4" />
                        Code
                      </Button>
                    </Link>
                    {project.demo && (
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" className="gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </Button>
                      </Link>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-3xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="flex flex-wrap gap-2 mt-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="bg-primary/5">
                      {tag}
                    </Badge>
                  ))}
                </DialogDescription>
              </DialogHeader>
              <div className="relative h-64 overflow-hidden rounded-md my-4">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-foreground/80 mb-6">
                {selectedProject.longDescription}
              </p>
              <div className="flex justify-end gap-4">
                <Link
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="gap-2">
                    <Github className="h-4 w-4" />
                    View Code
                  </Button>
                </Link>
                {selectedProject.demo && (
                  <Link
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                  </Link>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
