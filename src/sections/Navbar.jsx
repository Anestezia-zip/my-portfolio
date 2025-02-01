import React, { useState } from "react";
import { navLinks } from "../constatns";

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul" role="menu">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li" role="none">
        <a
          href={item.href}
          className="nav-li_a block min-w-full"
          onClick={onClick}
          role="menuitem"
          aria-current={
            window.location.pathname === item.href ? "page" : undefined
          }
        >
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
            aria-label="Go to homepage"
          >
            Anastasia
          </a>

          <button
            onClick={toggleMenu}
            className="focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <img
              src={isOpen ? "assets/close-menu.png" : "assets/open-menu.png"}
              alt="toggle"
              className="w-8 h-8"
              aria-hidden="true"
            />
          </button>

          <nav
            className="sm:flex hidden"
            role="navigation"
            aria-label="Main navigation"
          >
            <NavItems />
          </nav>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
