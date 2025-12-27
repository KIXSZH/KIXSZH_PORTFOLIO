// @flow strict
import blogs from "@/utils/data/blogs";
import Image from "next/image";

export default function BlogDetails({ params }) {
  const { slug } = params;

  const blog = blogs.find(
    (b) =>
      b.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "") === slug
  );

  if (!blog) {
    return (
      <div className="py-20 text-center text-white">
        Blog not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 text-white">
      <h1 className="text-3xl font-roboto-mono mb-6">
        {blog.title}
      </h1>

      <div className="mb-6 rounded-lg overflow-hidden">
        <Image
          src={blog.cover_image}
          alt={blog.title}
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </div>

      <p className="text-sm text-gray-400 mb-4">
        {blog.published_at} · {blog.reading_time_minutes} min read
      </p>

      <p className="text-lg text-[#d3d8e8]">
        {blog.description}
      </p>

      <div className="mt-6 text-sm text-gray-400">
        ❤️ {blog.public_reactions_count} reactions · 💬{" "}
        {blog.comments_count} comments
      </div>
    </div>
  );
}
