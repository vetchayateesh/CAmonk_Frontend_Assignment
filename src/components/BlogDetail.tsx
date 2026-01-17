import { useBlog } from "../hooks/useBlog";
import { Skeleton } from "../components/ui/skeleton";

type Blog = {
  id: number;
  title: string;
  category: string[];
  description: string;
  date: string;
  coverImage: string;
  content: string;
  tags?: string[];
};

export default function BlogDetail({ blogId }: { blogId: number | null }) {
  const { data, isLoading, isError } = useBlog(blogId);

  if (!blogId)
    return (
      <div className="h-full flex flex-col items-center justify-center text-gray-400">
        <p className="text-lg">Select an article</p>
        <p className="text-sm">Choose from the list to read full blog</p>
      </div>
    );

  if (isLoading)
    return (
      <div className="space-y-4">
        <Skeleton className="h-64 rounded-xl" />
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-24" />
      </div>
    );

  if (isError || !data) return <p>Error loading blog</p>;

  const blog = data as Blog;

  return (
    <section className="bg-white p-6 rounded-2xl shadow-sm flex justify-center">
      <div className="w-full max-w-3xl">
        <article className="space-y-6">

          {/* Cover Image */}
          <img
            src={blog.coverImage}
            className="w-full h-80 object-cover rounded-2xl"
            alt={blog.title}
          />

          {/* Category or Read Time */}
          <div className="flex items-center gap-2 text-sm text-indigo-600">
            <span>{blog.category[0]}</span>
            <span className="text-gray-400">• 5 min read</span>
          </div>

          {/* Blog Title */}
          <h1 className="text-3xl font-bold">{blog.title}</h1>

          {/* Share Button */}
          <button className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg w-fit">
            🔗 Share Article
          </button>

          {/* Meta Boxe */}
          <div className="grid grid-cols-3 gap-4 text-center text-sm bg-slate-50 p-4 rounded-xl">
            <div>
              <p className="text-gray-400 text-xs">CATEGORY</p>
              <p className="font-semibold">{blog.category.join(" & ")}</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">READ TIME</p>
              <p className="font-semibold">5 Mins</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">DATE</p>
              <p className="font-semibold">
                {new Date(blog.date).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Blog Content */}
          <p className="text-gray-700">{blog.content}</p>

          {/* Author Info */}
          <div className="flex items-center gap-3 pt-6 border-t">
            <img
              src="https://i.pravatar.cc/40"
              className="rounded-full"
              alt="Author"
            />
            <div>
              <p className="font-semibold text-sm">Written by Arjun Mehta</p>
              <p className="text-xs text-gray-500">Senior Financial Analyst</p>
            </div>
          </div>

        </article>
      </div>
    </section>
  );
}
