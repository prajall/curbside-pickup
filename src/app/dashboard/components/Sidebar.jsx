"use client";

import {
  ChevronDown,
  CircleHelp,
  Heart,
  Home,
  Milk,
  Package,
  ShoppingBasket,
  UserRound,
  Wallet,
  Wine,
} from "lucide-react";
import { TiTags } from "react-icons/ti";

import Link from "next/link";
import { useRef } from "react";

const menuItems = [
  {
    name: "Home",
    icon: Home,
    link: "#",
    title: "Dashboard",
    module: "dashboard",
    action: "view",
  },
  {
    name: "Offers",
    icon: TiTags,
    link: "#",
  },
  {
    name: "Grocery",
    icon: Milk,
    link: "#",
  },
  {
    name: "Convenience",
    icon: ShoppingBasket,
    link: "#",
  },
  {
    name: "Alcohol",
    icon: Wine,
    link: "#",
  },
];

const menuItems2 = [
  {
    name: "Orders",
    icon: Package,
    link: "#",
  },
  {
    name: "Favourites",
    icon: Heart,
    link: "#",
  },
  {
    name: "Wallet",
    icon: Wallet,
    link: "#",
  },
  {
    name: "Help & Support",
    icon: CircleHelp,
    link: "#",
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const trigger = useRef(null);
  const sidebar = useRef(null);

  // close on click outside

  return (
    <aside
      ref={sidebar}
      className={`fixed p-4 border-r left-0 top-0 z-9999 flex h-[90vh] w-64 flex-col border border-gray-200 overflow-y-auto duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="no-scrollbar flex flex-col overflow-y-auto h-full justify-between text-primary">
        <div>
          <ul className="mb-6 flex flex-col gap-1.5">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="group relative flex items-center gap-2.5 rounded-full py-1 px-2 font-medium text-bodydark1 ease-in-out hover:bg-primary hover:text-white dark:hover:bg-meta-4"
                >
                  <div className="group-hover:text-white p-2 rounded-md">
                    <item.icon className="w-5 h-5" />
                  </div>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <button className="flex gap-1 font-semibold hover:underline cursor-pointer mx-auto text-primary">
            Show More <ChevronDown />
          </button>
          <ul className="mt-6 flex flex-col gap-1.5">
            {menuItems2.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="group relative flex items-center gap-2.5 rounded-full py-1 px-2 font-medium text-bodydark1 ease-in-out hover:bg-primary hover:text-white dark:hover:bg-meta-4"
                >
                  <div className="group-hover:text-white p-2 rounded-md">
                    <item.icon className="w-5 h-5" />
                  </div>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto w-full border-t pt-2 border-gray-300">
          <button className="flex gap-1">
            <UserRound /> My Account
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
