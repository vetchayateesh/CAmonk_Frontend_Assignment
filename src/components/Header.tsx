import { Button } from "../components/ui/button";

export default function Header() {
  return (
    <header className="border-b bg-white">
     <div className="w-screen px-10 py-4 flex items-center justify-between">


        <div className="flex items-center gap-2 font-bold text-indigo-600">
          CA MONK
        </div>

        <nav className="hidden md:flex gap-6 text-sm text-gray-600">
          <span className="hover:text-black cursor-pointer">Tools</span>
          <span className="hover:text-black cursor-pointer">Practice</span>
          <span className="hover:text-black cursor-pointer">Events</span>
          <span className="hover:text-black cursor-pointer">Job Board</span>
          <span className="hover:text-black cursor-pointer">Points</span>
        </nav>

        <Button size="sm" className="rounded-full">Profile</Button>

      </div>
    </header>
  );
}
