import React from "react";
import BlogCard from "../uncommon/BlogCard/BlogCard";
import { useState, useEffect } from "react";
import axios from "axios";
const BlogList = () => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  const [blogData, setBlogData] = useState([]);

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

  return (
    <>
      <div className="w-full flex flex-wrap justify-around items-center px-10 sm:px-36">
        <div className="divide-y flex justify-around items-center divide-gray-300">
          {blogData &&
            blogData.map((el, index) => {
              return (
                <>
                  <BlogCard el={el} />
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default BlogList;
