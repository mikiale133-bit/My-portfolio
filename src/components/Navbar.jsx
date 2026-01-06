import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // 1. Initialize state from localStorage or system preference
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || 
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );

  // 2. Update the <html> class whenever the theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 3. Simple toggle function
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 z-50 w-full px-10 text-white transition-colors duration-300 bg-gray-900 pl-7 dark:bg-gray-900 dark:border-gray-800">
        <div className="flex items-center justify-between h-16 mx-auto max-w-7xl">
          
          {/* Logo */}
          <div className="text-xl font-bold dark:text-white">
            MkyDev
          </div>

          {/* Desktop Links */}
          <ul className="items-center hidden gap-8 md:flex dark:text-gray-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="transition hover:text-black dark:hover:text-white"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            
            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 transition-colors rounded hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-white"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 rounded md:hidden hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-white"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Sidebar */}
          <div className="w-64 h-full p-6 bg-white shadow-xl dark:bg-gray-900">
            <div className="flex items-center justify-between mb-8 text-gray-900 dark:text-white">
              <span className="text-lg font-bold">MkyDev</span>
              <button onClick={() => setMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <ul className="flex flex-col gap-6 text-gray-700 dark:text-gray-300">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block transition hover:text-black dark:hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Overlay */}
          <div
            className="flex-1 bg-black/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      )}
    </>
  );
}