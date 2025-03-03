import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";
import DropdownMenu from "./DropDown";
import Link from "next/link";
// import Logo from "../images/image5.png";

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 left-0 w-full bg-[#EDFCFA]">
      <div className="container mx-auto px-4 py-4 flex justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              className="h-10"
              width="50"
              height="134"
              src="/image5.png"
              alt="Company Logo"
            />
          </Link>
        </div>
        <div className="flex items-center">
          <form className="flex items-center bg-white shadow-md rounded-full pr-1">
            <input
              type="search"
              className="rounded-full bg-white focus:outline-none px-4 py-2 w-96"
              placeholder="Search for products and stores."
            />
            <button type="submit" className=" text-primary rounded-full p-2">
              <Search />
            </button>
          </form>
        </div>
        <div className="flex items-center">
          <DropdownMenu />

          <div className="ml-4">
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
