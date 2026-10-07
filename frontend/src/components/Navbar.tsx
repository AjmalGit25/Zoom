import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Navbar appearance
      setScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 inset-x-0
        transition-all duration-300 px-4 md:px-6
         
        ${scrolled ? "bg-white backdrop-blur-md b shadow-md" : "bg-transparent shadow-none"}
      `}
    >
      <div className="flex justify-between container mx-auto py-3">
        <Link to={"/"} className="flex items-center gap-2">
          <img src="/favicon.png" alt="Logo" className="w-8 h-8" />
          <span className="text-lg font-bold text-black uppercase">Zevia</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link to={"/login"} className="text-violet-600 text-sm font-medium border border-gray-300 shadow rounded-md px-4 py-2">
            Login
          </Link>
          <Link to={"/signup"}
            className="bg-linear-to-l from-indigo-500 via-blue-600 to-sky-700 hover:bg-orange-400 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:text-cyan-900 hover:bg-linear-to-r transition-colors duration-300">
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  )
}
