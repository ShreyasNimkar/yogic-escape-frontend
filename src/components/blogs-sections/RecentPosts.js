import React from "react";
import BlogCard from "../uncommon/BlogCard/BlogCard";
const RecentPosts = () => {
  return (
    <>
      <div className="hidden sm:block w-full h-full  flex-col bg-paleIvory py-10  justify-around items-center px-10 sm:px-36">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </>
  );
};

export default RecentPosts;
