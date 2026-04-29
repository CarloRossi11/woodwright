"use client";

import { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "motion/react";
import Image from "next/image";

const MotionLink = motion.create(Link);

const menuVariants: Variants = {
  hidden: {
    y: -40,
    opacity: 0,
    transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: -15, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Desktop Nav */}
      <div className={styles.desktopLinks}>
        {/* Left Links */}
        <div className={styles.navLeft}>
          <MotionLink
            className={styles.button}
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h4>Home</h4>
          </MotionLink>
          <MotionLink
            className={styles.button}
            href="/about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h4>About</h4>
          </MotionLink>
        </div>
      </div>

      {/* Logo — Center */}
      <div className={styles.logo}>
        <Link href="/">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Image
              src="/woddwrightLogo.webp"
              alt="Woodwright logo"
              width={75}
              height={75}
              priority
            />
          </motion.div>
        </Link>
      </div>

      <div className={styles.desktopLinks}>
        {/* Right Links */}
        <div className={styles.navRight}>
          <MotionLink
            className={styles.button}
            href="/portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h4>Portfolio</h4>
          </MotionLink>
          <MotionLink
            className={styles.button}
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h4>Contact</h4>
          </MotionLink>
        </div>
      </div>

      {/* Hamburger Button */}
      <button
        className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className={styles.mobileMenu}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.li variants={itemVariants}>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="/portfolio" onClick={() => setIsOpen(false)}>
                Portfolio
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
