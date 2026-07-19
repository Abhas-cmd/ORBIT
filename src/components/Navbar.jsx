import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex justify-between items-center">

        <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
                    <img src="/logo.png" alt="ORBIT Logo" className="h-10 w-10 md:h-12 md:w-12 object-contain" />

          <h1 className="text-2xl md:text-3xl font-bold tracking-wider">ORBIT</h1>
        </Link>

        <ul className="hidden md:flex gap-10 text-slate-300">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className={`hover:text-white transition ${location.pathname === item.path ? "text-white font-semibold" : ""}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <ul className="flex flex-col px-6 py-4 gap-4 text-slate-300">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} onClick={closeMenu} className={`block hover:text-white transition ${location.pathname === item.path ? "text-white font-semibold" : ""}`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;