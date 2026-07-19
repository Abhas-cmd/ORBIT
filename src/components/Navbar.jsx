import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.jpeg"
            alt="ORBIT Logo"
            className="h-12 w-12 object-contain"
          />
          <h1 className="text-3xl font-bold tracking-wider">ORBIT</h1>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-10 text-slate-300">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`hover:text-white transition ${
                  location.pathname === item.path ? "text-white font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button className="bg-violet-600 px-6 py-2 rounded-full hover:bg-violet-500 transition">
          Get Started
        </button>

      </div>
    </nav>
  );
}

export default Navbar;