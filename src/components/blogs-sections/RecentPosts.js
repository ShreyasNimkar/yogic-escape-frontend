import React from "react";
import BlogCard from "../uncommon/BlogCard/BlogCard";
import Title from "../common/Title";
const RecentPosts = ({ sortedBlogs }) => {
  return (
    <>
      <Title value={"RECENT POSTS"} color={"paleIvory"} />
      <div className="hidden sm:flex w-full h-full  flex-col bg-paleIvory pb-10  justify-around items-center px-10 sm:px-36">
        {sortedBlogs &&
          sortedBlogs.map((el) => {
            return (
              <React.Fragment key={el.id}>
                <BlogCard el={el} />
              </React.Fragment>
            );
          })}
      </div>
    </>
  );
};

export default RecentPosts;
