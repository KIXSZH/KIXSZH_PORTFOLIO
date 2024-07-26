// @flow strict
import { useRouter } from 'next/navigation';
import blogs from '@/utils/data/blogs';

function BlogDetails() {
  const router = useRouter();
  const { slug } = router.query;
  const blog = blogs.find(b => b.title.toLowerCase().replace(/ /g, '-') === slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <img src={blog.cover_image} alt={blog.title} />
      <p>{blog.description}</p>
      <p>{blog.published_at}</p>
      <p>{blog.reading_time_minutes} min read</p>
      <p>{blog.public_reactions_count} reactions</p>
      <p>{blog.comments_count} comments</p>
    </div>
  );
};

export default BlogDetails;
