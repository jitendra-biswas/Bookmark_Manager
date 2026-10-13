"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CiMenuKebab, CiSettings, CiStar } from "react-icons/ci";
import { MdBookmarkBorder } from "react-icons/md";
import { TbCategory, TbLayoutDashboard } from "react-icons/tb";

const SideBar = () => {
  const sideBarData = [
    {
      icon: TbLayoutDashboard,
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: MdBookmarkBorder,
      name: "All Bookmarks",
      link: "/allbookmarks",
    },
    {
      icon: CiStar,
      name: "Favorites",
      link: "/favorites",
    },
    {
      icon: TbCategory,
      name: "Category",
      link: "/category",
    },
    {
      icon: CiSettings,
      name: "Settings",
      link: "/settings",
    },
  ];

 
  const pathname = usePathname()
  

  return (
    <div className="flex flex-col justify-between p-5 border-r border-r-zinc-200 w-62">
      <div>
        <div className="logo flex items-center gap-2 font-bold text-sm mb-7">
          <div className="logo-container w-7 h-7 rounded-md bg-black flex items-center justify-center">
            <MdBookmarkBorder className="text-white text-xl" />
          </div>{" "}
          Bookmark Manager
        </div>

      {sideBarData.map((data) => {
  const isActive = pathname === data.link;

  return (
    <Link
      key={data.link}
      href={data.link}
      className={`group flex items-center gap-2 h-10 text-sm rounded-md px-3 ${
        isActive
          ? "bg-blue-50 border-2 border-blue-100 text-blue-700"
          : "hover:bg-blue-50 hover:text-blue-700"
      }`}
    >
      <data.icon
        className={`text-xl transition-colors ${
          isActive
            ? "text-blue-400"
            : "text-zinc-400 group-hover:text-blue-400"
        }`}
      />
      {data.name}
    </Link>
  );
})}
      </div>
      <div className="profile flex items-center gap-3">
        <div className="prifile-pic h-8 w-8 rounded-full bg-black"></div>
        <div className="name">
          <h2 className="text-sm font-semibold">John Doe</h2>
          <p className="text-xs text-zinc-400">john@gmail.com</p>
        </div>
        <div className="w-7 h-7 group rounded-full bg-zinc-100 flex items-center justify-center ml-3 hover:bg-zinc-200">
          <CiMenuKebab className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
