"use client";

import { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';
import blogs from "@/utils/data/blogs";
import BlogCard from "./BlogCard";

function Blog() {
  const [cardCount, setCardCount] = useState(4);
  const [showAll, setShowAll] = useState(false);

  const topRef = useRef(null);
  const allRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setCardCount(3);
      } else {
        setCardCount(4);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleViewMore = () => {
    setShowAll(true);
    setTimeout(() => {
      allRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  const handleViewLess = () => {
    setShowAll(false);
    setTimeout(() => {
      topRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div
      id="blogs"
      ref={topRef}
      className="relative z-50 my-12 lg:my-24"
    >
      {/* ===== TITLE (NO LINE ABOVE) ===== */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center text-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <span
            className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl font-roboto-mono rounded-md
              sm:text-lg md:text-xl lg:text-2xl
              sm:whitespace-normal lg:whitespace-nowrap"
          >
          Certifications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      {/* ===== INITIAL GRID ===== */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {blogs.slice(0, cardCount).map(
          (blog, i) =>
            blog.cover_image && <BlogCard blog={blog} key={i} />
        )}
      </div>

      {/* ===== VIEW MORE ===== */}
      {!showAll && (
        <div className="flex justify-center mt-5 lg:mt-12">
          <button
            onClick={handleViewMore}
            className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-8 py-3 md:py-4 text-center md:text-base font-medium font-roboto-mono tracking-wider text-white transition-all duration-300 ease-out"
          >
            <span>View More</span>
            <FaArrowRight size={16} />
          </button>
        </div>
      )}

      {/* ===== EXPANDED GRID ===== */}
      <div
        ref={allRef}
        className={`mt-10
          grid
          grid-cols-2 sm:grid-cols-2 md:grid-cols-3
          gap-3 md:gap-5 lg:gap-8 xl:gap-10
          transition-all duration-700 ease-in-out
          ${
            showAll
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-6 pointer-events-none"
          }
        `}
      >
        {showAll &&
          blogs.slice(cardCount).map(
            (blog, i) =>
              blog.cover_image && (
                <BlogCard blog={blog} key={`all-${i}`} />
              )
          )}
      </div>

      {/* ===== VIEW LESS ===== */}
      {showAll && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleViewLess}
            className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-8 py-3 md:py-4 text-center md:text-base font-medium font-roboto-mono tracking-wider text-white transition-all duration-300 ease-out"
          >
            <span>View Less</span>
            <FaArrowRight className="rotate-180" size={16} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Blog;
