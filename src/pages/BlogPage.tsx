import { useState } from "react";
import BlogList from "../components/BlogList";
import BlogDetail from "../components/BlogDetail";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import Header from "../components/Header";
import BlogHero from "../components/BlogHero";
import Footer from "../components/Footer";

export default function BlogPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");

  return (
    <>
      {/* Header,Hero */}
      <Header />
      <BlogHero />

      {/* Main Layout */}
      <main className="bg-slate-50 min-h-screen w-screen overflow-x-hidden">
  <div className="w-screen px-6 py-8 flex gap-8">



          {/* LEFT PANEL */}
         <aside className="w-[360px] shrink-0">


            {/* HEADING,CREATE BUTTON */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold">Latest Articles</h2>

              <Link to="/create">
                <Button size="sm">+ New</Button>
              </Link>
            </div>

            {/* Search Input */}
            <input
              className="w-full mb-4 px-3 py-2 border rounded-md text-sm"
              placeholder="Search blogs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* Category Buttons */}
            <div className="flex gap-2 mb-4">
              {["ALL", "TECH", "FINANCE"].map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-3 py-1 text-sm rounded-full border
                    ${
                      category === c
                        ? "bg-indigo-600 text-white"
                        : "bg-white text-gray-600"
                    }
                  `}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Updated BlogList */}
            <BlogList
              onSelect={setSelectedId}
              selectedId={selectedId}
              search={search}
              category={category}
            />
          </aside>

          {/* RIGHT PANEL */}
         <section className="flex-1 bg-white p-6 rounded-2xl shadow-sm">
            <BlogDetail blogId={selectedId} />
          </section>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
