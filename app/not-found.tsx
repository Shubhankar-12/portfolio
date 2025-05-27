"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        // repeatType: "reverse",
      },
    },
  };

  if (!mounted) {
    return null;
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-tertiary/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Animated 404 */}
          <motion.div variants={itemVariants} className="mb-8 relative">
            <div className="text-8xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-tertiary mb-4">
              404
            </div>

            {/* Floating cartoon elements around 404 */}
            <motion.div
              className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl"
              variants={floatingVariants}
              animate="animate"
            >
              😵
            </motion.div>

            <motion.div
              className="absolute -top-8 -right-8 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white text-xl"
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: "1s" }}
            >
              🔍
            </motion.div>

            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-tertiary rounded-full flex items-center justify-center text-white text-xl"
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: "2s" }}
            >
              🤔
            </motion.div>
          </motion.div>

          {/* Error message */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-6">
              The page you're looking for seems to have vanished into the
              digital void. It might have been moved, deleted, or perhaps it
              never existed in the first place.
            </p>
            <div className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-sm text-foreground/60">
                <strong>Error Code:</strong> 404 - Page Not Found
              </p>
            </div>
          </motion.div>

          {/* Glitch effect text */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative inline-block">
              <span className="text-xl font-mono text-primary">
                {">"} Page not found in database...
              </span>
              <motion.span
                className="absolute inset-0 text-xl font-mono text-accent"
                animate={{
                  opacity: [0, 1, 0],
                  x: [0, 2, 0],
                }}
                transition={{
                  duration: 0.1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 3,
                }}
              >
                {">"} Page not found in database...
              </motion.span>
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button size="lg" className="group" onClick={() => router.back()}>
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Go Back
            </Button>

            <Button size="lg" variant="outline" asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <Link href="/blog">
                <Search className="mr-2 h-4 w-4" />
                Browse Blog
              </Link>
            </Button>
          </motion.div>

          {/* Fun suggestions */}
          <motion.div variants={itemVariants} className="mt-12">
            <h3 className="text-lg font-semibold mb-4">
              While you're here, you might want to:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <Link href="/#about" className="group">
                <div className="bg-background/30 backdrop-blur-sm border border-primary/20 rounded-lg p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-md hover:shadow-primary/10">
                  <div className="text-2xl mb-2">👨‍💻</div>
                  <h4 className="font-medium group-hover:text-primary transition-colors">
                    Learn About Me
                  </h4>
                  <p className="text-sm text-foreground/60">
                    Discover my journey and skills
                  </p>
                </div>
              </Link>

              <Link href="/#projects" className="group">
                <div className="bg-background/30 backdrop-blur-sm border border-accent/20 rounded-lg p-4 hover:border-accent/50 transition-all duration-300 hover:shadow-md hover:shadow-accent/10">
                  <div className="text-2xl mb-2">🚀</div>
                  <h4 className="font-medium group-hover:text-accent transition-colors">
                    View Projects
                  </h4>
                  <p className="text-sm text-foreground/60">
                    Check out my latest work
                  </p>
                </div>
              </Link>

              <Link href="/#contact" className="group">
                <div className="bg-background/30 backdrop-blur-sm border border-tertiary/20 rounded-lg p-4 hover:border-tertiary/50 transition-all duration-300 hover:shadow-md hover:shadow-tertiary/10">
                  <div className="text-2xl mb-2">📧</div>
                  <h4 className="font-medium group-hover:text-tertiary transition-colors">
                    Get In Touch
                  </h4>
                  <p className="text-sm text-foreground/60">
                    Let's start a conversation
                  </p>
                </div>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}
