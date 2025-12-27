// @flow strict
import { timeConverter } from "@/utils/time-converter";
import Image from "next/image";
import Link from "next/link";
import { BsHeartFill } from "react-icons/bs";
import { FaCommentAlt } from "react-icons/fa";

function BlogCard({ blog }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-36 sm:h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={blog.cover_image}
          height={1080}
          width={1920}
          alt={blog.title}
          className="h-full w-full group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-xs sm:text-sm font-roboto-mono">
          <p>{timeConverter(blog.published_at)}</p>
        </div>
        <Link target="_blank" href={blog.url}>
          <p className="my-1 sm:my-2 lg:my-3 cursor-pointer text-xl sm:text-2xl font-roboto-mono text-white font-large hover:text-violet-500">
            {blog.title}
          </p>
        </Link>
        <p className="text-xs sm:text-sm font-roboto-mono lg:text-base text-[#d3d8e8] pb-2 sm:pb-3 lg:pb-6 line-clamp-3">
          {blog.description}
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
