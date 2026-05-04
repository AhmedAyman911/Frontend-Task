"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ChartLine, Users, Bell, CalendarDays, MessageSquare, List, FileText, Moon, Sun, Settings, Menu } from "lucide-react";
import styles from'@/styles/Sidebar.module.css'

const navItems = [
  {
    id: "dashboard",
    icon: <LayoutDashboard size={20} />,
    href: "/dashboard",
    label: "Dashboard",
  },
  {
    id: "analytics",
    icon: <ChartLine size={20} />,
    href: "/analytics",
    label: "Analytics",
  },
  {
    id: "users",
    icon: <Users size={20} />,
    href: "/users",
    label: "Users",
  },
  {
    id: "notifications",
    icon: <Bell size={20} />,
    href: "/notifications",
    label: "Notifications",
  },
  {
    id: "calendar",
    icon: <CalendarDays size={20} />,
    href: "/calendar",
    label: "Calendar",
  },
  {
    id: "messages",
    icon: <MessageSquare size={20} />,
    href: "/messages",
    label: "Messages",
  },
  {
    id: "products",
    icon: <List size={20} />,
    href: "/products",
    label: "Products",
  },
  {
    id: "reports",
    icon: <FileText size={20} />,
    href: "/reports",
    label: "Reports",
  },
  {
    id: "settings",
    icon: <Settings size={20} />,
    href: "/settings",
    label: "Settings",
  },
];
export default function Sidebar() {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={`${styles.menuBtn} d-flex align-items-center justify-content-center`}
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={18} />
      </button>
 
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)} />
      )}
 
      <aside
        className={`${styles.sidebar} ${open ? styles.open : ""} position-fixed top-0 start-0 min-vh-100 d-flex flex-column align-items-center`}
      >
        <nav className="flex-grow-1 d-flex flex-column align-items-center w-100 py-3 gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`${styles.navItem} ${isActive ? styles.active : ""} d-flex align-items-center justify-content-center`}
              >
                {item.icon}
                <span className={styles.navLabel}>{item.label}</span>
                <span className={styles.tooltip}>{item.label}</span>
              </Link>
            );
          })}
        </nav>
 
        <div className={`${styles.sidebarBottom} d-flex flex-column align-items-center w-100 py-3 gap-1`}>
          <button
            className={`${styles.toggleBtn} d-flex align-items-center justify-content-center`}
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span className={styles.tooltip}>{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>
      </aside>
    </>
  );
}