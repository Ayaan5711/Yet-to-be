"use client";

import React, { useState } from "react";

import InnerBanner from "@/components/banner/inner-banner";
import BlogList from "@/components/blog/blogList";
import Sidebar from "@/components/sidebar/sidebar";
import { blogPosts, recentPosts, popularPosts } from "@/lib/blog-data";

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const postsPerPage = 3;

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <React.Fragment>
      <InnerBanner />
      <section className="blog-one blog-page-two">
        <div className="container">
          <div className="row no-gutters justify-content-between">
            <div className="col-lg-8">
              <BlogList
                posts={currentPosts}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
            <div className="col-lg-4">
              <Sidebar
                onSearch={setSearchQuery}
                searchQuery={searchQuery}
                recentPosts={recentPosts}
                popularPosts={popularPosts}
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
