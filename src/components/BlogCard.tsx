import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export default function BlogCard({
  blog,
  onClick,
  selected,
}: {
  blog: any;
  onClick: () => void;
  selected: boolean;
}) {
  return (
    <Card
  onClick={onClick}
  className={`w-full cursor-pointer transition border
    ${selected
      ? "border-indigo-500 bg-indigo-50"
      : "hover:border-indigo-300 hover:shadow-md"}
  `}
>

      {/* Container padding */}
      <CardContent className="p-3 space-y-2">
        <div className="flex justify-between items-center">
          <Badge variant="secondary">{blog.category[0]}</Badge>
          <span className="text-xs text-gray-400">
            {new Date(blog.date).toLocaleDateString()}
          </span>
        </div>
        

        {/* Updated Title */}
        <h3 className="font-semibold text-sm leading-snug line-clamp-2">
          {blog.title}
        </h3>

        {/* Updated Description */}
        <p className="text-xs text-gray-500 line-clamp-2">
          {blog.description}
        </p>

      </CardContent>
  
    </Card>
  );
}
