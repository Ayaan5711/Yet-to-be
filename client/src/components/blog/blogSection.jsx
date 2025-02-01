"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, Heart, MessageCircle, Share2, ArrowRight } from "lucide-react";



const blogPosts = [
  {
    title: "How to handle your kids' ailments",
    date: "12 January 2023",
    excerpt:
      "Lorem ipsum dolorit amet consectetur adipi scing elit sedo eiusmod incididunt uttom labore et dolore magna aliqua...",
    image: "/images/blog/blog-1-1.jpg",
    href: "/blog/kids-ailments",
    stats: {
      likes: 74,
      comments: 12,
      shares: 35,
    },
  },
  {
    title: "Negative statin stories add to heart",
    date: "14 January 2023",
    excerpt:
      "Lorem ipsum dolorit amet consectetur adipi scing elit sedo eiusmod incididunt uttom labore et dolore magna aliqua...",
    image: "/images/blog/blog-1-2.jpg",
    href: "/blog/statin-stories",
    stats: {
      likes: 74,
      comments: 12,
      shares: 35,
    },
  },
  {
    title: "Lung cancer survival rate improves",
    date: "16 January 2023",
    excerpt:
      "Lorem ipsum dolorit amet consectetur adipi scing elit sedo eiusmod incididunt uttom labore et dolore magna aliqua...",
    image: "/images/blog/blog-1-3.jpg",
    href: "/blog/lung-cancer-survival",
    stats: {
      likes: 74,
      comments: 12,
      shares: 35,
    },
  },
];

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
    transition: {
      duration: 0.5,
    },
  },
};

export default function BlogSection() {
  return (
    <section className="blog-one">
      <div className="container">
        <motion.div
          className="block-title text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 className="block-title__title" variants={itemVariants}>
            Latest News Update
          </motion.h2>
          <motion.p className="block-title__text" variants={itemVariants}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt uttom <br /> labore et dolore magna
            aliqua. Quis ipsum suspendisse ultrices gravida.
          </motion.p>
        </motion.div>

        <motion.div
          className="row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="col-lg-4"
              variants={itemVariants}
            >
              <motion.div
                className="blog-one__single"
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="blog-one__image"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={370}
                    height={247}
                    className="w-full h-auto object-cover"
                  />
                  <motion.div
                    className="blog-one__image-hover"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <Link href={post.href} className="blog-three__hvr-a">
                      <ArrowRight className="h-6 w-6" />
                    </Link>
                  </motion.div>
                </motion.div>
                <div className="blog-one__content">
                  <div className="blog-one__top">
                    <motion.h3
                      className="blog-one__title"
                      whileHover={{ color: "var(--primary-color)" }}
                    >
                      <Link href={post.href}>{post.title}</Link>
                    </motion.h3>
                    <Link href={post.href} className="blog-one__date">
                      <Clock className="h-4 w-4" /> {post.date}
                    </Link>
                    <p className="blog-one__text">{post.excerpt}</p>
                  </div>
                  <div className="blog-one__bottom">
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link href={post.href} className="blog-one__link">
                        Read More
                      </Link>
                    </motion.div>
                    <div className="blog-one__meta">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link href={post.href} className="blog-one__meta-link">
                          <Heart className="material-icons" />
                          {post.stats.likes}
                        </Link>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link href={post.href} className="blog-one__meta-link">
                          <MessageCircle className="material-icons" />
                          {post.stats.comments}
                        </Link>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link href={post.href} className="blog-one__meta-link">
                          <Share2 className="material-icons" />
                          {post.stats.shares}
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
