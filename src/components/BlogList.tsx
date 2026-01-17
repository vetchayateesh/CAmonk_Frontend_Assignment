import { useBlogs } from "../hooks/useBlogs";
import BlogCard from "./BlogCard";
import { Skeleton } from "../components/ui/skeleton";

type Props = {
  onSelect: (id: number) => void;
  selectedId: number | null;
  search: string;
  category: string;
};

export default function BlogList({
  onSelect,
  selectedId,
  search,
  category,   
}: Props) {
  const { data, isLoading, isError } = useBlogs();

  if (isLoading)
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-28 rounded-xl" />
        ))}
      </div>
    );

  if (isError) return <p>Error loading blogs</p>;

  // Search,Category Filter
  const filtered = data.filter((b: any) => {
    const matchTitle = b.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCat =
      category === "ALL" || b.category.includes(category);

    return matchTitle && matchCat;
  });

  return (
    <div className="space-y-4">
      {filtered.map((b: any) => (
        <BlogCard
          key={b.id}
          blog={b}
          selected={selectedId === b.id}
          onClick={() => onSelect(b.id)}
        />
      ))}
    </div>
  );
}
