import {
  UserIcon,
  MenuIcon,
  X,
  LayoutGridIcon,
  CalendarIcon,
  FileTextIcon,
  DollarSignIcon,
  SettingsIcon,
  ChevronRightIcon,
  LogOutIcon
} from "lucide-react";

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [userName, setUserName] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const dummyProfileData = {
      firstName: "XYZ",
      lastName: "Yadav",
    };
    setUserName(
      dummyProfileData.firstName + " " + dummyProfileData.lastName
    );
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const role = "Admin" || "Employee";

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutGridIcon },
    role === "Admin"
      ? { name: "Employees", href: "/employees", icon: UserIcon }
      : { name: "Attendance", href: "/attendance", icon: CalendarIcon },
    { name: "Leave", href: "/leave", icon: FileTextIcon },
    { name: "Payslips", href: "/payslips", icon: DollarSignIcon },
    { name: "Settings", href: "/settings", icon: SettingsIcon },
  ];
  const handleLogout = ()=>{
    window.location.href ="/login"
  }

  const sidebarcontent = (
    <>
      {/* Header */}
      <div className="px-5 pt-6 pb-5 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <UserIcon className="text-white w-7 h-7" />
            <div>
              <p className="font-semibold text-sm text-white tracking-wide">
                Employee MS
              </p>
              <p className="text-xs text-slate-400">
                Management System
              </p>
            </div>
          </div>

          {/* Close button (mobile) */}
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden text-slate-400 hover:text-white p-1"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* User Card */}
      {userName && (
        <div className="mx-3 mt-4 mb-2 p-3 rounded-lg bg-white/5 border border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center">
              <span className="text-slate-300 text-xs font-semibold">
                {userName.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="text-sm text-slate-200">{userName}</p>
              <p className="text-xs text-slate-400">
                {role === "Admin" ? "Admin" : "Employee"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Section Label */}
      <div className="px-5 pt-4 pb-2">
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Navigation
        </p>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              to={item.href}
              key={item.name}
              className="flex items-center gap-3 px-3 py-2 rounded-lg relative group hover:bg-white/5"
            >
              {/* Active bar */}
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-indigo-500 rounded-r-full" />
              )}

              <Icon
                className={`w-4 h-4 ${isActive
                    ? "text-indigo-400"
                    : "text-slate-400 group-hover:text-white"
                  }`}
              />

              <span className="flex-1 text-sm">{item.name}</span>

              {isActive && (
                <ChevronRightIcon className="w-3 h-3 text-indigo-400" />
              )}
            </Link>
          );
        })}
      </div>
      {/* {logout} */}
      <div className="p-3 border-t border-white/6">
        <button onClick={handleLogout} className="flex items-center gap-3 w-full px-3 py-2.5 rounded-md text-[13px] font-medium text-slate-400 hover:text-rose-400 hover:bg-rose-500/8 transition-all duration-150">
          <LogOutIcon className="w-[17px] h-[17px]" />
          <span>Log out</span>

        </button>

      </div>
    </>
  );

  return (
    <>
      {/* Mobile button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg"
      >
        <MenuIcon size={20} />
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col h-screen w-64 bg-slate-900 text-white">
        {sidebarcontent}
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={`lg:hidden fixed inset-y-0 left-0 w-64 bg-slate-900 text-white z-50 transform transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {sidebarcontent}
      </aside>
    </>
  );
};

export default Sidebar;