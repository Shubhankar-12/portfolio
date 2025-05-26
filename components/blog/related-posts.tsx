"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

interface RelatedPostsProps {
  posts: Array<{
    title: string
    slug: string
    excerpt: string
    coverImage: string
    categories: string[]
    emoji: string
  }>
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  const [imageError, setImageError] = useState<boolean[]>(posts.map(() => false))

  return (
    <div className="border-t border-primary/10 pt-12">
      <h3 className="text-2xl font-bold mb-8 relative inline-block">
        Related Posts
        <motion.span
          className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.div key={post.slug} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className="overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-md hover:shadow-primary/10 h-full">
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={
                    imageError[index]
                      ? "/placeholder.svg?height=200&width=400"
                      : post.coverImage || "/placeholder.svg?height=200&width=400"
                  }
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={() => {
                    const newImageError = [...imageError]
                    newImageError[index] = true
                    setImageError(newImageError)
                  }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>

                {/* Cartoon element */}
                <motion.div
                  className="absolute top-2 right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-sm"
                  animate={{
                    rotate: [0, 10, 0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: index * 0.2,
                  }}
                >
                  {post.emoji}
                </motion.div>
              </div>

              <CardContent className="p-4">
                <div className="flex flex-wrap gap-1 mb-2">
                  {post.categories.slice(0, 1).map((category) => (
                    <Badge key={category} variant="outline" className="text-xs bg-primary/5">
                      {category}
                    </Badge>
                  ))}
                </div>

                <Link href={`/blog/${post.slug}`} className="group">
                  <h4 className="font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h4>
                </Link>

                <div className="flex items-center justify-end mt-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary text-sm font-medium flex items-center gap-1 group"
                  >
                    Read more
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
