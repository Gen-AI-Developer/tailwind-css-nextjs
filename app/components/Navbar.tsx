import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <section className="sticky top-0 rounded shadow my-3 mx-4">
      <nav className="flex bg-slate-700 rounded justify-between py-6 px-2 ">
        <div className="">
          <div>
            <span className="hover:text-4xl font-extrabold text-2xl text-gray-100">
              B
            </span>
            <span className="hover:text-4xl font-extrabold text-2xl text-gray-100">
              u
            </span>
            <span className="hover:text-4xl font-extrabold text-2xl text-gray-100">
              k
            </span>
            <span className="hover:text-4xl font-extrabold text-2xl text-gray-100">
              h
            </span>
            <span className="hover:text-4xl font-extrabold text-2xl text-gray-100">
              a
            </span>
            <span className="hover:text-4xl font-extrabold text-2xl text-gray-100">
              r
            </span>
            <span className="hover:text-4xl font-extrabold text-2xl text-gray-100">
              i
            </span>
          </div>
        </div>
        <div className=" mx-5 px-5 flex justify-around gap-4">
          <Link
            className="hover:text-4xl font-bold text-gray-100"
            href={"/contacts"}
          >
            {" "}
            Contacts
          </Link>
          <Link
            className="hover:text-4xl font-bold text-gray-100 text-center"
            href={"/contacts"}
          >
            {" "}
            About
          </Link>
          <Link
            className="hover:text-4xl font-bold text-gray-100 text-center"
            href={"/contacts"}
          >
            {" "}
            Persona
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
