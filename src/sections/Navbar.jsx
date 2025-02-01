import React, { useState } from "react";
import { navLinks } from "../constatns";

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li border border-green-400">
        <a href={item.href} className="nav-li_a block border border-red-400 min-w-full" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/100 shadow-inner-header">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-4 mx-auto c-space">
          <a
            href="/"
            className="font-bold text-xl hover:text-teal-700 transition-colors"
          >
            Anastasia
          </a>

          <button
            onClick={toggleMenu}
            className="focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "assets/close-menu.png" : "assets/open-menu.png"}
              alt="toggle"
              className="w-8 h-8"
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
