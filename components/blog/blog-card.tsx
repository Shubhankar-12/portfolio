"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

interface BlogCardProps {
  post: {
    title: string
    slug: string
    excerpt: string
    date: string
    coverImage: string
    categories: string[]
    readTime: number
    author: {
      name: string
      avatar: string
      role: string
    }
    emoji: string
  }
  index: number
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col">
        <div className="relative h-48 overflow-hidden group">
          <Image
            src={imageError ? "/placeholder.svg?height=400&width=600" : post.coverImage}
            alt={post.title}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImageError(true)}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>

          {/* Categories */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {post.categories.slice(0, 2).map((category) => (
              <Badge key={category} variant="outline" className="bg-background/80 backdrop-blur-sm">
                {category}
              </Badge>
            ))}
            {post.categories.length > 2 && (
              <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                +{post.categories.length - 2}
              </Badge>
            )}
          </div>

          {/* Cartoon element */}
          <motion.div
            className="absolute top-3 right-3 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg"
            animate={{
              rotate: [0, 10, 0, -10, 0],
              scale: [1, 1.1, 1],
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

        <CardContent className="flex-grow p-6">
          <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>

          <Link href={`/blog/${post.slug}`} className="group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
              {post.title}
            </h3>
          </Link>

          <p className="text-foreground/70 mb-4 line-clamp-3">{post.excerpt}</p>
        </CardContent>

        <CardFooter className="px-6 pb-6 pt-0 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={post.author.avatar || "/placeholder.svg?height=100&width=100"}
                alt={post.author.name}
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg?height=100&width=100"
                }}
              />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{post.author.name}</span>
          </div>

          <Link href={`/blog/${post.slug}`} className="text-primary font-medium flex items-center gap-1 group">
            Read
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
