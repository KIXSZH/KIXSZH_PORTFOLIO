// @flow strict
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import blogs from '@/utils/data/blogs';
import BlogCard from './BlogCard';

function Blog() {
  const [cardCount, setCardCount] = useState(4);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) { // Change to the breakpoint where you want to switch layouts
        setCardCount(3);
      } else {
        setCardCount(4);
      }
    }

    // Set initial card count
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id='blogs' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 uppercase text-xl font-roboto-mono rounded-md">
            Certification
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          blogs.slice(0, cardCount).map((blog, i) => (
            blog.cover_image &&
            <BlogCard blog={blog} key={i} />
          ))
        }
      </div>

      <div className="flex justify-center mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-8 py-3 md:py-4 text-center md:text-base font-medium font-roboto-mono tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          href="/blog"
        >
          <span>View More</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Blog;
