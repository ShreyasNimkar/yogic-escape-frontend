import React from "react";
import BlogCard from "../uncommon/BlogCard/BlogCard";

const BlogList = () => {
  return (
    <>
      <div className="w-full flex flex-wrap justify-around items-center px-10 sm:px-36">
        <div className="divide-y divide-gray-300">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </>
  );
};

export default BlogList;
