"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Code, Lightbulb, Rocket, Zap } from "lucide-react";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

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

  useEffect(() => {
    console.log(`About is in view: ${isInView}`);
  }, [isInView]);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
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
              About Me
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-accent"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Get to know the person behind the code. A journey through my
              professional path and personal interests.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="relative">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-primary/20 glass">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
                <Image
                  src="./Banner.png"
                  alt="Shubh Shubhankar"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />

                {/* Comic-style speech bubble */}
                <motion.div
                  className="absolute top-4 left-4 bg-white dark:bg-background p-3 rounded-lg shadow-lg max-w-[200px] border-2 border-primary"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    isInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.5, delay: 0.8 }}
                  style={{
                    clipPath:
                      "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 85% 100%, 50% 75%, 0% 75%)",
                  }}
                >
                  <p className="text-sm font-medium text-foreground mb-2">
                    Hello there! I'm Shubh, a Full Stack Developer who loves
                    building amazing web experiences!
                  </p>
                </motion.div>

                {/* Floating cartoon elements */}
                <motion.div
                  className="absolute -bottom-5 -left-5 w-16 h-16 bg-tertiary rounded-full flex items-center justify-center text-white font-bold text-2xl"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, 0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  🧠
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -right-5 w-12 h-12 bg-quaternary rounded-full flex items-center justify-center text-white font-bold text-xl"
                  animate={{
                    x: [0, 10, 0],
                    rotate: [0, -5, 0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 0.5,
                  }}
                >
                  🛠️
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">
                Full Stack Developer from India
              </h3>
              <p className="text-foreground/70 mb-6">
                I'm a passionate developer with expertise in building modern web
                applications. With a strong foundation in both frontend and
                backend technologies, I create seamless, user-friendly
                experiences that solve real-world problems.
              </p>
              <p className="text-foreground/70 mb-6">
                My journey in tech started with a curiosity about how things
                work on the web. That curiosity evolved into a career where I
                get to build innovative solutions every day using cutting-edge
                technologies.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-md hover:shadow-primary/10">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Clean Code</h4>
                      <p className="text-sm text-foreground/70">
                        Writing maintainable, efficient code
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-md hover:shadow-accent/10">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="bg-accent/10 p-2 rounded-lg">
                      <Zap className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium">Fast Learner</h4>
                      <p className="text-sm text-foreground/70">
                        Quickly adapting to new technologies
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-tertiary/20 hover:border-tertiary/50 transition-all duration-300 hover:shadow-md hover:shadow-tertiary/10">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="bg-tertiary/10 p-2 rounded-lg">
                      <Lightbulb className="h-5 w-5 text-tertiary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Problem Solver</h4>
                      <p className="text-sm text-foreground/70">
                        Finding creative solutions to challenges
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-quaternary/20 hover:border-quaternary/50 transition-all duration-300 hover:shadow-md hover:shadow-quaternary/10">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="bg-quaternary/10 p-2 rounded-lg">
                      <Rocket className="h-5 w-5 text-quaternary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Team Player</h4>
                      <p className="text-sm text-foreground/70">
                        Collaborating effectively with others
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <blockquote className="italic text-foreground/80 border-l-4 border-primary pl-4 py-2">
                  "Code is like humor. When you have to explain it, it's bad."
                  <footer className="text-sm mt-2">— Cory House</footer>
                </blockquote>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
