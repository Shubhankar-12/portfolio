"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-primary/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-primary/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Image
                  priority
                  src="/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </div>
              <span className="font-bold text-xl">Shubh</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-6"
            >
              <Link
                href="/#home"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/#projects"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Projects
              </Link>
              {/* blog */}
              <Link
                href="/blog"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Blogs
              </Link>
              <Link
                href="/#contact"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4"
            >
              <motion.a
                href="https://github.com/Shubhankar-12"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/shubh-shubhankar-55a312a7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>

              <motion.a
                href="mailto:shubhankar719@gmail.com"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 text-center text-foreground/60 text-sm"
          >
            <p>© {currentYear} Shubh Shubhankar. All rights reserved.</p>
            <p className="mt-1">
              Designed and built with ❤️ using Next.js and Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
