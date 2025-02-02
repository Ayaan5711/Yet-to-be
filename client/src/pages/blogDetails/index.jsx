"use client";

import InnerBanner from "@/components/banner/inner-banner";
import BlogContent from "@/components/blog/blog-details/blogContent";
import CommentForm from "@/components/blog/blog-details/comment-form";
import CommentSection from "@/components/blog/blog-details/comment-section";
import Sidebar from "@/components/sidebar/sidebar";
import { blogData, popularPosts, recentPosts } from "@/lib/blog-data";
import React from "react";

export default function BlogDetailsPage() {
  return (
    <React.Fragment>
      <InnerBanner />
      <section className="blog-one blog-page-two blog-details">
        <div className="container">
          <div className="row no-gutters justify-content-between">
            <div className="col-lg-8">
              <BlogContent post={blogData} />
              <CommentSection comments={blogData.comments} />
              <CommentForm />
            </div>
            <div className="col-lg-4">
              <Sidebar recentPosts={recentPosts} popularPosts={popularPosts} />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
