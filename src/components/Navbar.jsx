function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <h1 className="text-3xl font-bold tracking-wider">
          ORBIT
        </h1>

        <ul className="hidden md:flex gap-10 text-slate-300">

          <li className="hover:text-white cursor-pointer transition">
            Home
          </li>

          <li className="hover:text-white cursor-pointer transition">
            Features
          </li>

          <li className="hover:text-white cursor-pointer transition">
            About
          </li>

          <li className="hover:text-white cursor-pointer transition">
            Contact
          </li>

        </ul>

        <button
          className="bg-violet-600 px-6 py-2 rounded-full hover:bg-violet-500 transition">
          Get Started
        </button>

      </div>
    </nav>
  )
}

export default Navbar