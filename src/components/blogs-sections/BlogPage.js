import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";
import MarkdownRenderer from "../common/MarkDownRenderer";
import postHandler from "@/request-handlers/postHandler";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BlogPage = ({ props }) => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const [commentArray, setCommentArray] = useState(
    props.attributes.comments.data
  );
  const likeURL = `https://${domain}/api/likes`;
  const commentURL = `https://${domain}/api/comments`;
  const blogId = props.id;
  const [likeArray, setLikeArray] = useState(props.attributes.likes.data);
  const [likesCount, setLikesCount] = useState(likeArray.length);
  const [commentsCount, setCommentsCount] = useState(commentArray.length);
  const [isLiked, setIsLiked] = useState(false);
  const [commentText, setCommentText] = useState("");
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

  const commentHandler = async () => {
    const formData = {
      data: {
        content: commentText,
        blog: {
          connect: [blogId],
        },
      },
    };
    const res = await postHandler(commentURL, formData, true);
    console.log(res);
    if (res.status === 0) {
      toast.info("You must be logged in to comment !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success("Commented Successfully :)", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      const newComment = {
        id: res.data.id,
        attributes: {
          content: commentText,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      };
      setCommentArray([...commentArray, newComment]);
      setCommentText(""); // Clear the comment text input
    }
  };

  const newDatePublished = new Date(
    props.attributes.createdAt
  ).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const [liked, setliked] = useState("none");

  //

  return (
    <>
      <ToastContainer />
      <div className="w-full h-[7vh] sm:h-[5vh] flex-col sm:flex-row px-10 sm:px-44 flex justify-start gap-0 items-start sm:items-center mt-14">
        <div className="flex justify-start sm:gap-x-3 items-start sm:h-full sm:w-[28%]">
          <div className="h-full w-[30%] sm:w-[20%] flex justify-start  items-center">
            <Image
              src={"/ourStory.png"}
              alt="Team"
              height={10000}
              width={10000}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="text-center h-full w-full sm:ml-0 ml-2 sm:w-fit text-sm flex justify-start items-center">
            {props.attributes.author}
          </div>
        </div>
        <div className="text-center text-textGray sm:text-xs flex justify-around items-center">
          {newDatePublished} | {props.attributes.readTime}
        </div>
      </div>
      <div className="w-full h-max py-2 px-10 sm:px-44 text-xl text-mahogany text-center  flex justify-start items-center">
        {props.attributes.name}
      </div>
      <div className=" w-full h-full flex justify-start items-center flex-col px-10 sm:px-44">
        <Image
          src={`http://${domain}${props.attributes.image.data.attributes.url}`}
          alt="Team"
          height={10000}
          width={10000}
          className="object-cover h-[25vh] sm:h-[40vh] w-full"
        />
      </div>
      <div className="h-full w-full py-2 px-10 sm:px-44">
        {/* content */}
        <MarkdownRenderer content={props.attributes.content} />
      </div>
      <div className="px-10 sm:px-44 h-[10vh] text-textGray ">
        <div className="flex justify-between gap-1 items-center h-full">
          <div className="flex justify-start gap-1 items-center h-full">
            <div className="flex text-lg text-textGray  justify-start items-center">
              {props.attributes.views} views | &nbsp;{commentArray.length}
              &nbsp;comments |&nbsp;
              {likesCount}
            </div>
            <svg
              width="17"
              height="17"
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
              width="17"
              height="17"
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
      <div className="px-10 sm:px-44 text-textGray sm:mb-2">
        <label
          htmlFor="large-input"
          className="block text-sm font-medium "
        ></label>
        <input
          onChange={(el) => {
            setCommentText(el.target.value);
          }}
          onKeyDown={(el) => {
            if (el.key === "Enter") {
              commentHandler();
            }
          }}
          type="text"
          id="large-input"
          value={commentText}
          placeholder="Write a comment ..."
          className="block w-full p-3 border-[#C4C4C4]  border-[1.5px] sm:text-md  "
        />
      </div>
      <div className="flex justify-start flex-col  sm:mb-16 items-center px-10 sm:px-44 py-1">
        <div className="text-base tracking-widest font-medium">
          - Comments -
        </div>
        {commentArray &&
          commentArray.map((el) => {
            return (
              <React.Fragment key={el.id}>
                <div className="w-full text-xs text-textGray py-[0.1rem]">
                  &quot;{el.attributes.content}&quot;
                </div>
              </React.Fragment>
            );
          })}
      </div>
    </>
  );
};

export default BlogPage;
