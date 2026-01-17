import { Badge } from "../components/ui/badge";

export default function SideBlogCard({
  blog,
  selected,
  onClick,
}: any) {
  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-xl border cursor-pointer transition
      ${selected ? "border-indigo-500 bg-indigo-50" : "hover:bg-slate-50"}`}
    >

      <div className="flex justify-between text-xs text-gray-400 mb-1">
        <span className="uppercase text-indigo-600">{blog.category[0]}</span>
        <span>2 days ago</span>
      </div>

      <h3 className="font-semibold text-sm mb-1">{blog.title}</h3>

      <p className="text-xs text-gray-500 line-clamp-2">
        {blog.description}
      </p>

      {blog.tag && (
        <Badge variant="secondary" className="mt-2 text-xs">
          {blog.tag}
        </Badge>
      )}
    </div>
  );
}
