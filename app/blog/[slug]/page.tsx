"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import Link from "next/link";
import Image from "next/image";
import BlogAuthor from "@/components/blog/blog-author";
import RelatedPosts from "@/components/blog/related-posts";
import FloatingElements from "@/components/floating-elements";

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const { slug } = params;
  // const ref = useRef<HTMLDivElement>(null);
  // const isInView = useInView(ref, {
  //   once: false,
  //   amount: 0.1,
  //   margin: "-100px 0px -100px 0px",
  // });
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Find the post with the matching slug
    const foundPost = blogPosts.find((p) => p.slug === slug);

    if (foundPost) {
      setPost(foundPost);
    }
    setLoading(false);
  }, [slug]);

  // useEffect(() => {
  //   console.log(`Post is in view: ${isInView}`);
  // }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  if (loading) {
    return (
      <div className="py-32 container mx-auto px-4 flex justify-center items-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-20 h-20 bg-primary/20 rounded-full mb-4 flex items-center justify-center">
            <span className="text-3xl">⏳</span>
          </div>
          <div className="h-6 bg-primary/10 rounded w-48 mb-4"></div>
          <div className="h-4 bg-primary/10 rounded w-64"></div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="py-32 container mx-auto px-4 flex flex-col items-center">
        <div className="w-32 h-32 bg-primary/10 rounded-full mb-6 flex items-center justify-center">
          <span className="text-5xl">😢</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="text-foreground/70 mb-8">
          The blog post you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
    );
  }

  // Find related posts (same category)
  const relatedPosts = blogPosts
    .filter(
      (p) =>
        p.slug !== post.slug &&
        p.categories.some((category) => post.categories.includes(category))
    )
    .slice(0, 3);

  return (
    <section className="py-32 relative overflow-hidden">
      <FloatingElements />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-quaternary/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={"visible"}
          className="max-w-4xl mx-auto"
        >
          {/* Back button */}
          <motion.div variants={itemVariants} className="mb-8">
            <Button
              variant="ghost"
              className="group"
              onClick={() => router.push("/blog")}
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Button>
          </motion.div>

          {/* Post header */}
          <motion.div variants={itemVariants} className="mb-8 text-center">
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {post.categories.map((category: string) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="bg-primary/10 hover:bg-primary/20"
                >
                  {category}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-foreground/70 text-sm">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </motion.div>

          {/* Featured image */}
          <motion.div
            variants={itemVariants}
            className="mb-12 rounded-xl overflow-hidden relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={
                imageError
                  ? "/placeholder.svg?height=500&width=900"
                  : post.coverImage || "/placeholder.svg?height=500&width=900"
              }
              alt={post.title}
              width={900}
              height={500}
              className="w-full h-auto object-cover"
              onError={() => setImageError(true)}
              priority
            />

            {/* Cartoon element */}
            <motion.div
              className="absolute top-4 right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl"
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
              {post.emoji}
            </motion.div>
          </motion.div>

          {/* Author info */}
          <motion.div variants={itemVariants} className="mb-12">
            <BlogAuthor
              author={post.author}
              fallbackImage="/placeholder.svg?height=200&width=200"
            />
          </motion.div>

          {/* Post content */}
          <motion.div
            variants={itemVariants}
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share buttons */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center justify-center gap-4">
              <span className="text-foreground/70">Share this post:</span>
              <Button size="icon" variant="outline" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </Button>
            </div>
          </motion.div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <motion.div variants={itemVariants}>
              <RelatedPosts posts={relatedPosts} />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
