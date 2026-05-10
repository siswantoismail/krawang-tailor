import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-xl sm:text-2xl font-bold">Krawang Tailor</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-sm uppercase font-semibold tracking-widest">
            <Link to="/home" className="hover:text-yellow-700">
              Home
            </Link>

            <Link to="/services" className="hover:text-yellow-700">
              Services
            </Link>

            <Link to="/gallery" className="hover:text-yellow-700">
              Gallery
            </Link>

            <Link to="/contact" className="hover:text-yellow-700">
              Contact
            </Link>
          </nav>

          {/* Desktop Button */}
          <button className="hidden sm:block bg-black text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg hover:bg-yellow-700 transition text-sm">
            Consultation
          </button>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Blur Background */}
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Sidebar Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-lg font-bold">Menu</h2>

            <button onClick={() => setIsOpen(false)} className="text-3xl">
              ✕
            </button>
          </div>

          {/* Menu */}
          <nav className="flex flex-col p-6 gap-6 text-sm uppercase font-semibold tracking-widest">
            <Link
              to="/home"
              className="hover:text-yellow-700"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/services"
              className="hover:text-yellow-700"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>

            <Link
              to="/gallery"
              className="hover:text-yellow-700"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className="hover:text-yellow-700"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <button className="mt-4 bg-black text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition">
              Consultation
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
