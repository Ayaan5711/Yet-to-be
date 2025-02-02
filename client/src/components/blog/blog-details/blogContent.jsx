"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import {
  Facebook,
  Twitter,
  PinIcon as Pinterest,
  PhoneIcon as WhatsApp,
  Mail,
} from "lucide-react";

export default function BlogContent({ post }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="blog-details__content">
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="blog-one__title"
        >
          <Link href="#">{post.title}</Link>
        </motion.h3>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="blog-details__meta flex items-center space-x-4"
        >
          <Link href="#" className="flex items-center space-x-2">
            <Image
              src={post.author.image || "/placeholder.svg"}
              alt={post.author.name}
              width={70}
              height={40}
            />
            <span>{post.author.name}</span>
          </Link>
          <Link href="#" className="flex items-center space-x-2">
            <Clock className="h-4 w-4" color="red" />
            <span>{post.date}</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Image
            src={post.mainImage || "/placeholder.svg"}
            alt={post.title}
            width={770}
            height={385}
            className="blog-details__image"
          />
        </motion.div>

        {post.content.map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="blog-one__text"
          >
            {paragraph}
          </motion.p>
        ))}

        {post.secondaryImage && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Image
              src={post.secondaryImage || "/placeholder.svg"}
              alt={post.title}
              width={770}
              height={385}
              className="blog-details__image"
            />
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="blog-details__post-nav"
      >
        <Link href="#" className="blog-details__post-nav-btn">
          Prev
        </Link>
        <Link href="#" className="blog-details__post-nav-btn">
          Next
        </Link>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="blog-details__share"
      >
        <span className="blog-details__share-text">Share Now:</span>
        {[
          { icon: Facebook, href: "#" },
          { icon: Twitter, href: "#" },
          { icon: Pinterest, href: "#" },
          { icon: WhatsApp, href: "#" },
          { icon: Mail, href: "#" },
        ].map((social, index) => (
          <motion.a
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={social.href}
            className="blog-details__share-link"
          >
            <social.icon className="h-4 w-4" />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
