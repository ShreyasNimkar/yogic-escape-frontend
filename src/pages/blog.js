import BlogPage from "@/components/blogs-sections/BlogPage";
import RecentPosts from "@/components/blogs-sections/RecentPosts";
import CallUs from "@/components/common/CallUs";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
const Blog = () => {
  const router = useRouter();
  const props = router.query;
  const keys = parseInt(Object.keys(props));
  console.log(keys);
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  const [blogData, setBlogData] = useState(null);
  const [sortedBlogs, setSortedBlogs] = useState([]);
  const blogsController = async () => {
    const headers = {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": true,
    };
    const URL = `https://${domain}/api/blogs?populate=*`;
    const res = await axios.get(URL, { headers });
    const blogs = res.data.data;
    setBlogData(blogs);
  };
  useEffect(() => {
    blogsController();
  }, []);
  useEffect(() => {
    if (blogData !== null) {
      const sorted = [...blogData].sort((a, b) => {
        return (
          new Date(a.attributes.createdAt) - new Date(b.attributes.createdAt)
        );
      });
      setSortedBlogs(sorted.slice(0, 2));
    }
  }, [blogData]);
  return (
    <>
      <Header />
      {blogData !== null && <BlogPage props={blogData[keys - 1]} />}
      <RecentPosts sortedBlogs={sortedBlogs} />
      <CallUs />
      <Footer />
    </>
  );
};

export default Blog;
