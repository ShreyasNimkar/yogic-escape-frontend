import BlogHeroSection from "@/components/blogs-sections/BlogHeroSection";
import BlogList from "@/components/blogs-sections/BlogList";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import React from "react";

const Blogs = () => {
  return (
    <>
      <Header />
      <BlogHeroSection />
      <BlogList />
      <Footer />
    </>
  );
};

export default Blogs;
