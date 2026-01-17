export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">

        <div>
          <p className="text-white font-semibold mb-2">CA MONK</p>
          <p>Empowering the next generation of financial leaders.</p>
        </div>

        <div>
          <p className="text-white mb-2">Resources</p>
          <p>Blog</p><p>Webinars</p><p>Case Studies</p>
        </div>

        <div>
          <p className="text-white mb-2">Platform</p>
          <p>Job Board</p><p>Practice Tests</p><p>Mentorship</p>
        </div>

        <div>
          <p className="text-white mb-2">Connect</p>
          <p>LinkedIn</p><p>Twitter</p><p>Instagram</p>
        </div>

      </div>

      <div className="w-screen px-10 py-10 grid ...">


        © 2026 CA Monk. All rights reserved.
      </div>
    </footer>
  );
}
