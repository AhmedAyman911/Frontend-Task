"use client";

import { useState } from "react";
import Link from "next/link";
import { Scan, MessagesSquare, Bell, ChevronDown } from "lucide-react";
import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
  const [lang, setLang] = useState("EN");

   return (
    <header className={`${styles.navbar} navbar fixed-top px-3 px-md-4`}>
 
      <Link href="/dashboard" className={`${styles.brand} me-auto`}>
        Dashboard
      </Link>
 
      <div className="d-flex align-items-center gap-2 gap-md-3">
 
        <div className="dropdown">
          <button
            className={`${styles.pill} ${styles.langToggle} btn dropdown-toggle d-flex align-items-center gap-2 px-3`}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {lang}
            <ChevronDown size={13} strokeWidth={2.5} />
          </button>
          <ul className={`dropdown-menu dropdown-menu-end ${styles.langMenu}`}>
            <li>
              <button
                className={`dropdown-item ${styles.langItem} d-flex align-items-center gap-2 ${lang === "EN" ? "active" : ""}`}
                onClick={() => setLang("EN")}
              >
                {lang === "EN" && <span className={styles.langDot} />}
                English
              </button>
            </li>
            <li>
              <button
                className={`dropdown-item ${styles.langItem} d-flex align-items-center gap-2 ${lang === "AR" ? "active" : ""}`}
                onClick={() => setLang("AR")}
              >
                {lang === "AR" && <span className={styles.langDot} />}
                العربية
              </button>
            </li>
          </ul>
        </div>
 
        <button
          className={`${styles.pill} ${styles.iconBtn} btn p-0 d-flex align-items-center justify-content-center`}
          aria-label="Fullscreen"
        >
          <Scan size={17} />
        </button>
 
        <button
          className={`${styles.pill} ${styles.iconBtn} btn p-0 d-flex align-items-center justify-content-center`}
          aria-label="Messages"
        >
          <MessagesSquare size={17} />
        </button>
 
        <button
          className={`${styles.pill} ${styles.iconBtn} btn p-0 d-flex align-items-center justify-content-center position-relative`}
          aria-label="Notifications"
        >
          <Bell size={17} />
          <span className={`${styles.badge} position-absolute`} />
        </button>
 
        <div
          className={`${styles.avatar} d-flex align-items-center justify-content-center`}
          role="button"
          tabIndex={0}
          aria-label="User menu"
        >
          AY
        </div>
 
      </div>
    </header>
  );
}