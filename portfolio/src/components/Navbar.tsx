export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 h-24 bg-white flex px-6">
      
      <ul className="flex items-center gap-x-12 text-lg font-medium">
        <li>
          <a href="#overview" className="hover:text-gray-400 transition-colors duration-100">
            Overview
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-400 transition-colors duration-100">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-gray-400 transition-colors duration-100">
            Projects
          </a>
        </li>
      </ul>

    </nav>
  );
}