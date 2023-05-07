import BlogPage from "@/components/blogs-sections/BlogPage";
import RecentPosts from "@/components/blogs-sections/RecentPosts";
import CallUs from "@/components/common/CallUs";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import React from "react";

const Blog = () => {
  return (
    <>
      <Header />
      <BlogPage />

      <RecentPosts />
      <CallUs />
      <Footer />
    </>
  );
};

export default Blog;
