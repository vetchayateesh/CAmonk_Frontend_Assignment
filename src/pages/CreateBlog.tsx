import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "../api/blogs";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function CreateBlog() {
  const qc = useQueryClient();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["blogs"] });
      alert("Blog Created Successfully");
      setTitle("");
      setDescription("");
      setContent("");
    },
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    mutation.mutate({
      title,
      description,
      content,
      category: ["TECH"],
      coverImage: "https://picsum.photos/800/400",
      date: new Date().toISOString(),
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center items-start pt-12">
      <form
        onSubmit={submit}
        className="bg-white p-6 rounded-xl shadow w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-bold">Create New Blog</h2>

        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <Input
          placeholder="Short Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <textarea
          className="w-full border rounded-md p-2 h-32"
          placeholder="Full Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <Button type="submit" disabled={mutation.isPending} className="w-full">
          {mutation.isPending ? "Saving..." : "Create Blog"}
        </Button>
      </form>
    </div>
  );
}

