"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();

      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      const avatarElement = containerRef.current.querySelector(
        ".avatar-container"
      ) as HTMLElement;
      const shapesElement = containerRef.current.querySelector(
        ".shapes-container"
      ) as HTMLElement;

      if (avatarElement) {
        avatarElement.style.transform = `translate(${x * 20 - 10}px, ${
          y * 20 - 10
        }px)`;
      }

      if (shapesElement) {
        shapesElement.style.transform = `translate(${x * -30 + 15}px, ${
          y * -30 + 15
        }px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="shapes-container absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-tertiary/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-tertiary text-glow">
                Shubh Shubhankar
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-foreground/80">
              <span className="relative">
                Full Stack Developer
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-1 bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg mb-8 max-w-xl mx-auto lg:mx-0 text-foreground/70"
          >
            Crafting code that scales and delights. Building modern web
            experiences with React, Next.js, Node.js, and more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <Button size="lg" className="group">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex gap-4 mt-8 justify-center lg:justify-start"
          >
            <Link
              href="https://github.com/Shubhankar-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link
              href="https://linkedin.com/in/shubh-shubhankar-55a312a7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="avatar-container flex-1 flex justify-center items-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-primary/30 bg-background">
              <Image
                src="./main.png"
                alt="Shubh Shubhankar"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>

              {/* Animated coding elements */}
              <motion.div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs md:text-sm font-mono bg-background/80 px-2 py-1 rounded-md border border-primary/30"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  repeatDelay: 5,
                }}
              >
                <span className="text-primary">const</span>{" "}
                <span className="text-accent">developer</span> ={" "}
                <span className="text-tertiary">"awesome"</span>;
              </motion.div>
            </div>

            {/* Floating cartoon elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              ⚛️
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0, 5, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 0.5,
              }}
            >
              🚀
            </motion.div>

            <motion.div
              className="absolute top-1/2 -left-8 w-8 h-8 bg-tertiary rounded-full flex items-center justify-center text-white font-bold text-lg"
              animate={{
                x: [0, -10, 0],
                rotate: [0, 10, 0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1,
              }}
            >
              💻
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: 0.2,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
