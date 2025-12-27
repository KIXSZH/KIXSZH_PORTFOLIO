// @flow strict
import blogs from "@/utils/data/blogs";
import BlogCard from "@/app/components/homepage/blog/BlogCard";

function BlogPage() {
  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center text-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span
            className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl font-roboto-mono rounded-md 
            sm:text-lg md:text-xl lg:text-2xl 
            sm:whitespace-normal lg:whitespace-nowrap"
          >
            Certifications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="font-roboto-mono grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {blogs.map(
          (blog, i) => blog.cover_image && <BlogCard blog={blog} key={i} />
        )}
      </div>
    </div>
  );
}

export default BlogPage;
