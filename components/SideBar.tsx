"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ChartLine, Users, Bell, CalendarDays, MessageSquare, List, FileText, Moon, Sun, Settings, Menu } from "lucide-react";

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
      <style>{`
        .q-sidebar {
          width: 64px;
          min-height: 100vh;
          background: #f3f4f8;
          border-right: 1px solid #f0f0f5;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 72px 0 0 0;
          position: fixed;
          left: 0;
          top:0px ;
          z-index: 100;
        }
        
        @media (max-width: 768px) {
          .q-sidebar {
            width: 72px;             
            align-items: flex-start;   
            padding: 72px 12px;
            transform: translateX(-100%); 
          }

          .q-sidebar.open {
            transform: translateX(0);  /* show */
          }
        }

        .q-sidebar__nav {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 12px 0;
          gap: 2px;
          width: 100%;
        }

        .q-sidebar__nav-item {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 25px;
          color: #808080;
          text-decoration: none;
          transition: all 0.18s ease;
          position: relative;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .q-sidebar__nav {
            align-items: flex-start;
            width: 100%;
          }

          .q-sidebar__nav-item {
            width: 100%;
            justify-content: flex-start;
            padding: 0 12px;
            gap: 12px;
            border-radius: 12px;
          }
        }

        .q-sidebar__nav-item:hover {
          background: #808070;
          color: #fff;
        }

        .q-sidebar__nav-item.active {
          background: #000;
          color: #fff;
        }

        .q-sidebar__nav-item.active::before {
          content: '';
          position: absolute;
          left: -10px;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 24px;
          background: #000;
          border-radius: 0 3px 3px 0;
        }

       
        .q-sidebar__nav-item .q-tooltip {
          position: absolute;
          left: calc(100% + 12px);
          top: 50%;
          transform: translateY(-50%);
          background: #1a1a2e;
          color: #fff;
          font-size: 12px;
          font-weight: 500;
          padding: 5px 10px;
          border-radius: 6px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.15s ease;
          z-index: 999;
          font-family: 'DM Sans', sans-serif;
        }

        .q-sidebar__nav-item .q-tooltip::before {
          content: '';
          position: absolute;
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 5px solid transparent;
          border-right-color: #1a1a2e;
        }

        .q-sidebar__nav-item:hover .q-tooltip {
          opacity: 1;
        }

        .q-sidebar__bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 12px 0 16px;
          gap: 2px;
          width: 100%;
          border-top: 1px solid #f0f0f5;
        }

        .q-sidebar__toggle-btn {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 25px;
          color: #808080;
          background: none;
          border: none;
          cursor: pointer;
          transition: all 0.18s ease;
          position: relative;
        }

        .q-sidebar__toggle-btn:hover {
          background: #808070;
          color: #fff;
        }

        .q-sidebar__toggle-btn .q-tooltip {
          position: absolute;
          left: calc(100% + 12px);
          top: 50%;
          transform: translateY(-50%);
          background: #1a1a2e;
          color: #fff;
          font-size: 12px;
          font-weight: 500;
          padding: 5px 10px;
          border-radius: 6px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.15s ease;
          z-index: 999;
          font-family: 'DM Sans', sans-serif;
        }

        .q-sidebar__toggle-btn .q-tooltip::before {
          content: '';
          position: absolute;
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 5px solid transparent;
          border-right-color: #1a1a2e;
        }

        .q-sidebar__toggle-btn:hover .q-tooltip {
          opacity: 1;
        }

        .q-sidebar-overlay {
          display: none;
        }

        @media (max-width: 768px) {
          .q-sidebar-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.3);
            z-index: 90;
            display: block;
          }
        }

        .q-menu-btn {
          position: fixed;
          top: 64px;
          left: 12px;
          width: 36px;
          height: 36px;
          z-index: 10;
        }

        @media (min-width: 769px) {
          .q-menu-btn {
            display: none;
          }
        }
      `}</style>

      <button
        className="q-pill q-icon-btn q-menu-btn"
        onClick={() => setOpen(true)}
      >
        <Menu size={18} />
      </button>

      <aside className={`q-sidebar ${open ? "open" : ""}`}>
        <nav className="q-sidebar__nav">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`q-sidebar__nav-item${isActive ? " active" : ""}`}
              >
                {item.icon}
                <span className="q-tooltip">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="q-sidebar__bottom">
          <button
            className="q-sidebar__toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span className="q-tooltip">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}