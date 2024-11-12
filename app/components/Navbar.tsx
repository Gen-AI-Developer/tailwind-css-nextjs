import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <section className="sticky top-0 bg-[#2F312D]">
      <nav className="flex justify-between items-center mb-8 w-full h-11 py-8">
        <div className="text-stone-200 text-xl font-serif">Safdar Ali Shah</div>

        <div className="space-x-4 text-stone-200">
          <Link
            href="#about"
            className="hover:text-stone-300 hover:text-3xl transition-all duration-300"
          >
            ABOUT
          </Link>
          <Link
            href="#weddings"
            className="hover:text-stone-300 hover:text-3xl transition-all duration-300"
          >
            PROJECTS
          </Link>
          <Link
            href="#contact"
            className="hover:text-stone-300 hover:text-3xl transition-all duration-300"
          >
            CONTACT
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
