"use client";
import { useState, useRef, useEffect } from "react";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef < HTMLDivElement > null;

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Menu
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute mt-2 w-40 bg-white border rounded-lg shadow-lg">
          <ul className="py-2">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-blue-600 hover:bg-gray-100"
              >
                Signup
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-blue-600 hover:bg-gray-100"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
