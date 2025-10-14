// components/HamburgerMenu.tsx
"use client";

import { useState } from "react";
import styles from "./hamburgerMenu.module.css";
import Link from "next/link";
import Image from "next/image";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo (always visible) */}
      <div className={styles.logo}><Link href={"/"}>
            <Image
              className={styles.logo}
              src="/woddwrightLogo.webp"
              alt="Woodwright logo"
              width={75}
              height={75}
              priority
            />
          </Link></div>

      {/* Hamburger icon */}
      <button
        className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile menu */}
      <ul className={`${styles.menu} ${isOpen ? styles.show : ""}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );Link
};

export default HamburgerMenu;
