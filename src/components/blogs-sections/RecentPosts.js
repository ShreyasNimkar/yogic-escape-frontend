import React from "react";
import BlogCard from "../uncommon/BlogCard/BlogCard";
const RecentPosts = ({ sortedBlogs }) => {
  return (
    <>
      <div className="hidden sm:flex w-full h-full  flex-col bg-paleIvory py-10  justify-around items-center px-10 sm:px-36">
        {sortedBlogs &&
          sortedBlogs.map((el, index) => {
            return (
              <>
                <BlogCard el={el} />
              </>
            );
          })}
      </div>
    </>
  );
};

export default RecentPosts;
