"use client";

import { useState } from "react";
import Link from "next/link";
import { Scan , MessagesSquare, Bell, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [lang, setLang] = useState("EN");

  return (
    <>
      <style>{`
        .q-navbar {
          height: 64px;
          background: #f3f4f8;
          border-bottom: 1px solid #e8e9f0;
          display: flex;
          align-items: center;
          padding: 0 24px;
          position: fixed;
          top: 0;
          left: 64px;
          right: 0;
          z-index: 99;
        }
        
        @media (max-width: 768px) { 
        .q-navbar {
          left: 0;           
           padding: 0 12px;     
          }
        }

        .q-navbar__brand {
          font-size: 16px;
          font-weight: 700;
          color: #1a1a2e;
          text-decoration: none;
          letter-spacing: -0.3px;
          flex-shrink: 0;
        }

        .q-navbar__spacer { flex: 1; }

        .q-navbar__actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        @media (max-width: 768px) {
        .q-navbar__actions {
          gap: 8px;            
        }
      }

        .q-pill {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          border: none;
          border-radius: 50px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.08);
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: box-shadow 0.15s ease, color 0.15s ease;
          color: #6b7280;
          flex-shrink: 0;
        }

        .q-pill:hover {
          box-shadow: 0 4px 12px rgba(79,70,229,0.15);
          color: #3b82f6;
        }

        .q-icon-btn {
          width: 42px;
          height: 42px;
          position: relative;
        }

        .q-badge {
          position: absolute;
          top: -3px;
          right: -3px;
          width: 14px;
          height: 14px;
          background: #3b82f6;
          border-radius: 50%;
          border: 2.5px solid #f3f4f8;
        }

        .q-lang-toggle {
          height: 42px;
          padding: 0 14px;
          gap: 5px;
          font-size: 13px;
          font-weight: 600;
          color: #000 !important;
          background: #fff !important;
          border: none !important;
          border-radius: 50px !important;
          box-shadow: 0 1px 4px rgba(0,0,0,0.08) !important;
        }

        .q-lang-toggle:hover,
        .q-lang-toggle:focus,
        .q-lang-toggle:active,
        .q-lang-toggle.show {
          color: #3b82f6 !important;
          box-shadow: 0 4px 12px rgba(20,70,229,0.15) !important;
          background: #fff !important;
        }

        .q-lang-toggle::after { display: none !important; }

        .q-lang-menu {
          border-radius: 12px !important;
          border: 1.5px solid #ececf5 !important;
          box-shadow: 0 8px 24px rgba(0,0,0,0.09) !important;
          padding: 4px !important;
          min-width: 120px !important;
        }


        .q-lang-item {
          border-radius: 8px !important;
          font-size: 13px !important;
          font-weight: 500 !important;
          font-family: 'DM Sans', sans-serif !important;
          padding: 8px 12px !important;
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
          color: #808080 !important;
        }

        .q-lang-item:hover,
        .q-lang-item:focus {
          background: #f5f5ff !important;
          color: #3b82f6 !important;
        }

        .q-lang-item.active {
          background: #eff0ff !important;
          color: #3b82f6 !important;
        }

        .q-lang-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #3b82f6;
          flex-shrink: 0;
        }

        .q-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #3b82f6;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
          flex-shrink: 0;
          box-shadow: 0 1px 4px rgba(0,0,0,0.08);
          transition: box-shadow 0.15s ease;
        }

        .q-avatar:hover {
          box-shadow: 0 4px 12px rgba(99,102,241,0.3);
        }

        @media (max-width: 768px) {
            .q-icon-btn {
              width: 36px;
              height: 36px;
            }

            .q-avatar {
              width: 36px;
              height: 36px;
              font-size: 12px;
            }

            .q-lang-toggle {
              height: 36px;
              padding: 0 10px;
              font-size: 12px;
            }
          }
      `}</style>

      <header className="q-navbar">
        <Link href="/dashboard" className="q-navbar__brand">
          Dashboard
        </Link>

        <div className="q-navbar__spacer" />

        <div className="q-navbar__actions">
          <div className="dropdown">
            <button
              className="q-lang-toggle btn dropdown-toggle d-flex align-items-center gap-2"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {lang}
              <ChevronDown size={13} strokeWidth={2.5} />
            </button>
            <ul className="dropdown-menu dropdown-menu-end q-lang-menu">
              <li>
                <button
                  className={`dropdown-item q-lang-item${lang === "EN" ? " active" : ""}`}
                  onClick={() => setLang("EN")}
                >
                  {lang === "EN" && <span className="q-lang-dot" />}
                  English
                </button>
              </li>
              <li>
                <button
                  className={`dropdown-item q-lang-item${lang === "AR" ? " active" : ""}`}
                  onClick={() => setLang("AR")}
                >
                  {lang === "AR" && <span className="q-lang-dot" />}
                  العربية
                </button>
              </li>
            </ul>
          </div>
          <button className="q-pill q-icon-btn" aria-label="Fullscreen">
            <Scan  size={17} />
          </button>
          <button className="q-pill q-icon-btn" aria-label="Messages">
            <MessagesSquare  size={17} />
          </button>
          <button className="q-pill q-icon-btn" aria-label="Notifications">
            <Bell size={17} />
            <span className="q-badge" />
          </button>

          <div className="q-avatar" role="button" tabIndex={0} aria-label="User menu">
            AY
          </div>

        </div>
      </header>
    </>
  );
}