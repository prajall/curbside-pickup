"use client";

import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className=" flex gap-1 px-4 py-1 text-primary cursor-pointer"
      >
        Login <ChevronDown />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 w-40 bg-white shadow-lg rounded-md border border-gray-200 p-1">
          <a
            href="/login"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
          >
            Login
          </a>
          <a
            href="/signup"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
          >
            Signup
          </a>
        </div>
      )}
    </div>
  );
}
