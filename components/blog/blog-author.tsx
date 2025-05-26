"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

interface BlogAuthorProps {
  author: {
    name: string
    avatar: string
    role: string
    bio?: string
  }
  fallbackImage?: string
}

export default function BlogAuthor({
  author,
  fallbackImage = "/placeholder.svg?height=200&width=200",
}: BlogAuthorProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <Card className="border border-primary/20 overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <motion.div whileHover={{ scale: 1.05, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Avatar className="h-24 w-24 border-2 border-primary/30">
              <AvatarImage
                src={imageError ? fallbackImage : author.avatar || fallbackImage}
                alt={author.name}
                onError={() => setImageError(true)}
              />
              <AvatarFallback className="text-2xl">{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </motion.div>

          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-1">{author.name}</h3>
            <p className="text-foreground/70 mb-3">{author.role}</p>
            <p className="text-foreground/80">
              {author.bio ||
                "Full-stack developer passionate about creating beautiful and functional web experiences. Loves sharing knowledge through writing and coding tutorials."}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
