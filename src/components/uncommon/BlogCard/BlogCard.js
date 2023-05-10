import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import MarkdownRenderer from "@/components/common/MarkDownRenderer";
import postHandler from "@/request-handlers/postHandler";
const BlogCard = ({ el }) => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const likeURL = `https://${domain}/api/likes`;
  const router = useRouter();
  const blogId = el.id;
  const newDatePublished = new Date(el.attributes.createdAt).toLocaleDateString(
    "en-US",
    { day: "numeric", month: "short", year: "numeric" }
  );

  const [commentArray, setCommentArray] = useState(el.attributes.comments.data);
  const [likeArray, setLikeArray] = useState(el.attributes.likes.data);
  const [likesCount, setLikesCount] = useState(likeArray.length);
  const [commentsCount, setCommentsCount] = useState(commentArray.length);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const likedBlogs = JSON.parse(Cookies.get("likedBlogs") || "[]");
    setIsLiked(likedBlogs.includes(blogId));
  }, []);

  const likeHandler = async () => {
    if (!isLiked) {
      const formData = {
        data: {
          blog: {
            connect: [blogId],
          },
        },
      };

      const res = await postHandler(likeURL, formData, false);

      if (res.status === 1) {
        // Update the likedBlogs cookie
        const likedBlogs = JSON.parse(Cookies.get("likedBlogs") || "[]");
        likedBlogs.push(blogId);
        Cookies.set("likedBlogs", JSON.stringify(likedBlogs), { expires: 365 });
        setIsLiked(true);
        setLikesCount(likesCount + 1);
      }
    }
  };

  const blogOnClickHandler = () => {
    router.push({
      pathname: "/blog",
      query: el.id,
    });
  };
  return (
    <>
      <div className="drop-shadow-lg group w-[90%] cursor-pointer pt-6 sm:px-6 my-5 h-max bg-white">
        <div className="sm:h-[10%] flex flex-col sm:flex-row  justify-start gap-2 items-start sm:items-center">
          <div className="w-full sm:w-[30%] h-full flex justify-start gap-2 items-center">
            <div className="h-full w-[16%] flex justify-start  items-center">
              <Image
                src={"/ourStory.png"}
                alt="Team"
                height={10000}
                width={10000}
                className="object-cover h-full w-[100%]"
              />
            </div>
            <div className="text-center text-sm flex justify-around items-center">
              {el.attributes.author}
            </div>
          </div>

          <div className="text-center text-textGray text-xs flex justify-around items-center">
            {newDatePublished}&nbsp; | &nbsp;{el.attributes.readTime}
          </div>
        </div>
        <div
          onClick={() => {
            blogOnClickHandler();
          }}
          className="h-[15%] text-xl text-mahogany text-center  flex justify-start items-center"
        >
          {el.attributes.name}
        </div>
        <div className="h-[50%] flex justify-around items-center">
          <div className="w-[80%] h-full">
            <div className="text-[#181818] h-max line-clamp-[4]  text-xs sm:text-sm">
              <MarkdownRenderer content={el.attributes.content} />
            </div>

            <div className="flex border-t-2 border-t-[#C4C4C4] py-2 justify-between gap-1 items-center h-[25%]">
              <div className="flex  justify-start gap-1 items-center h-full">
                <div className="flex text-xs text-textGray  justify-start items-center">
                  {el.attributes.views} views | &nbsp;{commentArray.length}
                  &nbsp;comments |&nbsp;
                  {likeArray.length}
                </div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 19 19"
                  fill={isLiked ? "#9F2420" : "none"}
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    likeHandler();
                  }}
                  className="cursor-pointer"
                >
                  <path
                    d="M15.7408 3.52204C15.355 3.13602 14.8969 2.82981 14.3927 2.62089C13.8885 2.41197 13.3481 2.30444 12.8023 2.30444C12.2565 2.30444 11.7161 2.41197 11.2119 2.62089C10.7077 2.82981 10.2496 3.13602 9.86373 3.52204L9.063 4.32277L8.26226 3.52204C7.48291 2.74268 6.42588 2.30485 5.32371 2.30485C4.22154 2.30485 3.16451 2.74268 2.38516 3.52204C1.6058 4.30139 1.16797 5.35842 1.16797 6.46059C1.16797 7.56276 1.6058 8.61979 2.38516 9.39914L3.18589 10.1999L9.063 16.077L14.9401 10.1999L15.7408 9.39914C16.1268 9.01331 16.4331 8.5552 16.642 8.051C16.8509 7.54679 16.9584 7.00636 16.9584 6.46059C16.9584 5.91481 16.8509 5.37438 16.642 4.87018C16.4331 4.36597 16.1268 3.90787 15.7408 3.52204Z"
                    stroke="#9F2420"
                    strokeWidth="1.51082"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <g clipPath="url(#clip0_805_8029)">
                    <path
                      d="M3.98047 9.10498V15.1133C3.98047 15.5117 4.13872 15.8937 4.42042 16.1754C4.70211 16.4571 5.08417 16.6154 5.48254 16.6154H14.495C14.8934 16.6154 15.2754 16.4571 15.5571 16.1754C15.8388 15.8937 15.9971 15.5117 15.9971 15.1133V9.10498"
                      stroke="#9F2420"
                      strokeWidth="1.50208"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.9927 4.59888L9.98853 1.59473L6.98438 4.59888"
                      stroke="#9F2420"
                      strokeWidth="1.50208"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.98828 1.59473V11.3582"
                      stroke="#9F2420"
                      strokeWidth="1.50208"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_805_8029">
                      <rect
                        width="18.0249"
                        height="18.0249"
                        fill="white"
                        transform="translate(0.976562 0.0925293)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="w-[55%] sm:w-[20%] h-[60%] sm:h-[90%] p-2">
            <Image
              onClick={() => {
                blogOnClickHandler();
              }}
              src={`http://${domain}${el.attributes.image.data.attributes.url}`}
              alt="Team"
              height={10000}
              width={10000}
              className="object-cover sm:h-[16vh] h-[10vh] w-full"
            />
          </div>
        </div>
        <div className="h-max ">
          <span
            onClick={() => {
              blogOnClickHandler();
            }}
            className="hover:cursor-pointer text-lg group-hover:text-mahogany hover:text-mahogany group-hover:underline"
          >
            Read More
          </span>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
