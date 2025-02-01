"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, LinkIcon } from "lucide-react";

export default function BlogList({
  posts,
  currentPage,
  totalPages,
  onPageChange,
}) {
  return (
    <>
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="blog-one__single"
        >
          <motion.div
            className="blog-one__image"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={770}
              height={385}
              className="w-full h-auto"
            />
            <div className="blog-one__image-hover">
              <Link href={post.href} className="blog-three__hvr-link">
                <LinkIcon />
              </Link>
            </div>
          </motion.div>
          <div className="blog-one__content">
            <h3 className="blog-one__title">
              <Link href={post.href}>{post.title}</Link>
            </h3>
            <Link href={post.href} className="blog-one__date">
              <Clock className="h-4 w-4" /> {post.date}
            </Link>
            <p className="blog-one__text">{post.text}</p>
            <Link href={post.href} className="blog-one__btn thm-btn">
              Read More
            </Link>
          </div>
        </motion.div>
      ))}

      <div className="blog-post-pagination text-center">
        <a
          className="prev"
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          style={{ cursor: currentPage === 1 ? "not-allowed" : "pointer" }}
        >
          <i className="fa fa-angle-left"></i>
        </a>
        {/*
         */}
        {[...Array(totalPages)].map((_, index) => (
          <a
            key={index + 1}
            className={currentPage === index + 1 ? "active" : ""}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </a>
        ))}
        {/*
         */}
        <a
          className="next"
          onClick={() =>
            currentPage < totalPages && onPageChange(currentPage + 1)
          }
          style={{
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
          }}
        >
          <i className="fa fa-angle-right"></i>
        </a>
      </div>
    </>
  );
}
