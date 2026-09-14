export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 h-24 bg-black text-white flex px-6">
      
      <ul className="flex items-center gap-x-12 text-lg font-medium">
        <li>
          <a href="#overview" className="hover:opacity-60 transition-opacity duration-200">
            Overview
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:opacity-60 transition-opacity duration-200">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:opacity-60 transition-opacity duration-200">
            Projects
          </a>
        </li>
      </ul>

    </nav>
  );
}