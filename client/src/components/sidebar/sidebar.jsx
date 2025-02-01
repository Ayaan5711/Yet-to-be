"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { categories } from "@/lib/blog-data";

export default function Sidebar({
  onSearch,
  searchQuery,
  recentPosts,
  popularPosts,
}) {
  return (
    <div className="sidebar">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sidebar__single sidebar__search"
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          className="sidebar__search-form"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search..."
          />
          <button type="submit">
            <Search className="h-5 w-5" />
          </button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="sidebar__single sidebar__categories"
      >
        <h3 className="sidebar__title">Categories</h3>
        <ul className="sidebar__categories-list">
          {categories.map((category, index) => (
            <motion.li
              key={category.name}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Link href={`/category/${category.name.toLowerCase()}`}>
                {category.name}
              </Link>
              <span className="sidebar__categories-list-coount">
                ({category.count})
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <SidebarPosts
        title="Recent Posts"
        posts={recentPosts}
        className="sidebar__post"
        delay={0.4}
      />

      <SidebarPosts
        title="Popular Posts"
        posts={popularPosts}
        className="sidebar__post"
        delay={0.6}
      />
    </div>
  );
}

function SidebarPosts({ title, posts, className, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`sidebar__single ${className}`}
    >
      <h3 className="sidebar__title">{title}</h3>
      <div className="sidebar__post-wrap">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + index * 0.1 }}
            className="sidebar__post__single"
          >
            <div className="sidebar__post__image">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={100}
                height={100}
              />
            </div>
            <div className="sidebar__post__content">
              <span className="sidebar__post__date">{post.date}</span>
              <h3 className="sidebar__post__title">
                <Link href={post.href}>{post.title}</Link>
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
