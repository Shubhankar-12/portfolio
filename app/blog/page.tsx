"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import BlogCard from "@/components/blog/blog-card"
import { blogPosts } from "@/lib/blog-data"
import BlogPagination from "@/components/blog/blog-pagination"

export default function BlogPage() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  // Filter posts based on search query
  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.categories.some((category) => category.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

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

  return (
    <section className="py-32 relative overflow-hidden">
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
            <h1 className="text-3xl md:text-5xl font-bold mb-4 inline-block relative">
              Blog
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-accent"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights on web development, design, and technology.
            </p>
          </motion.div>

          {/* Search and filter */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-6 rounded-full border-primary/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/30"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1) // Reset to first page on new search
                }}
              />

              {/* Cartoon search element */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white"
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                🔍
              </motion.div>
            </div>
          </motion.div>

          {/* Blog posts grid */}
          {currentPosts.length > 0 ? (
            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post, index) => (
                <motion.div key={post.slug} variants={itemVariants}>
                  <BlogCard post={post} index={index} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={itemVariants}
              className="text-center py-12 bg-background/50 rounded-lg border border-primary/10"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">🧐</span>
              </div>
              <h3 className="text-xl font-bold mb-2">No posts found</h3>
              <p className="text-foreground/70">Try adjusting your search or check back later for new content.</p>
            </motion.div>
          )}

          {/* Pagination */}
          {filteredPosts.length > postsPerPage && (
            <motion.div variants={itemVariants} className="mt-12 flex justify-center">
              <BlogPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
