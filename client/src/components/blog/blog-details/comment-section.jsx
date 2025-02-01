"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CommentSection({ comments }) {
  return (
    <>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="blog-details__title"
      >
        Comments
      </motion.h3>

      <div className="comment-one">
        {comments.map((comment, index) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="comment-one__single"
          >
            <div className="comment-one__image">
              <div className="inner-block">
                <Image
                  src={comment.image || "/placeholder.svg"}
                  alt={comment.name}
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="comment-one__content">
              <h3 className="comment-one__title">{comment.name}</h3>
              <span className="comment-one__date">
                {comment.date} <span className="sep">-</span>
                {comment.time}
              </span>
              <p className="comment-one__text">{comment.text}</p>
              <Link
                href="#"
                className="thm-btn comment-one__btn scroll-to-target"
                data-target-offset="140"
                data-target=".contact-one__form-comment-form"
              >
                Reply
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
