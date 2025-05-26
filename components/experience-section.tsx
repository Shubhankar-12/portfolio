"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Junior Full Stack Developer",
    company: "Stylabs Technologies",
    period: "Aug'24 - Present",
    description:
      "Developed and optimized robust APIs to streamline data storage and manipulation using Node.js, TypeScript, MongoDB, and Next.js. Elevated website SEO, enhancing discoverability and performance across 30+ pages, resulting in a 40% increase in traffic. Built dynamic, CMS-powered landing pages using PayloadCMS and Next.js.",
    skills: [
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Next.js",
      "PayloadCMS",
      "REST APIs",
      "SEO",
    ],
    icon: "👨‍💻",
  },
  {
    title: "Technical Intern",
    company: "Stylabs Technologies",
    period: "Feb'24 - Aug'24",
    description:
      "Architected a high-performance startup landing page using Nuxt.js and PayloadCMS, achieving an 85+ Lighthouse score. Designed and deployed scalable REST APIs using Node.js, TypeScript, and MongoDB, integrating seamlessly with a Next.js-based admin panel.",
    skills: [
      "Nuxt.js",
      "PayloadCMS",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Next.js",
      "REST APIs",
    ],
    icon: "🖥️",
  },
  {
    title: "MERN Developer Intern",
    company: "Com.Bot",
    period: "Nov'22 - Feb'23",
    description:
      "Engineered backend APIs using Node.js, significantly enhancing platform connectivity and functionality. Seamlessly integrated 500+ third-party applications, automating workflows and boosting efficiency by 30%.",
    skills: [
      "Node.js",
      "MongoDB",
      "Express.js",
      "React",
      "REST APIs",
      "Third-party Integrations",
    ],
    icon: "🚀",
  },
];

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

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
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-tertiary/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-quaternary/5 blur-3xl"></div>
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
              Work Experience
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-tertiary"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              My professional journey and the companies I've had the pleasure to
              work with.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-tertiary transform md:-translate-x-1/2"></div>

            {/* Experience cards */}
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`mb-12 md:mb-24 relative ${
                  index % 2 === 0
                    ? "md:pr-12 md:text-right md:ml-auto md:mr-1/2"
                    : "md:pl-12 md:ml-1/2"
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <motion.div
                  className=" md:block absolute top-6 w-10 h-10 rounded-full bg-background border-4 border-primary z-10 flex items-center justify-center text-xl"
                  style={{
                    left: index % 2 === 0 ? "-20px" : "auto",
                    right: index % 2 === 1 ? "auto" : "-20px",
                    transform: "translateX(-50%)",
                  }}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  {exp.icon}
                </motion.div>

                <Card className="border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="md:hidden w-10 h-10 rounded-full bg-primary/10 text-xl grid place-items-center">
                      {exp.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {exp.title}
                      </CardTitle>
                      <div className="text-foreground/70 flex items-center gap-2 mt-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="text-foreground/60 flex items-center gap-2 mt-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    {/* <motion.div
                      className="mt-4 flex items-center gap-1 text-primary font-medium"
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <span>View Details</span>
                      <ChevronRight className="h-4 w-4" />
                    </motion.div> */}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
