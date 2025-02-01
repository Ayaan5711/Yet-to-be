"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function InnerBanner() {
  return (
    <section
      className="inner-banner"
      style={{ backgroundImage: "url(/images/resources/inner-banner-1-1.jpg)" }}
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inner-banner__title"
        >
          Our Blog Posts
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="thm-breadcrumb"
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <span className="sep">/</span>
          </li>
          <li>
            <span className="page-title">Blogs</span>
          </li>
        </motion.ul>
      </div>
    </section>
  );
}
