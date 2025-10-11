"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./heroOverlay.module.css";

interface HeroOverlayProps {
  backgroundSrc: string;
  backgroundAlt?: string;
  children: React.ReactNode;

  /** Layout options */
  height?: string; // e.g. "400px", "50vh"
  aspectRatio?: string; // e.g. "16/9", "4/3"

  /** Overlay options */
  overlayDarkness?: number; // 0 to 1 (for solid dark overlay)
  gradientOverlay?: boolean; // instead of solid dark

  /** Effects */
  parallax?: boolean; // *BUGGY ON MOBILE*
  fadeIn?: boolean;
}

export default function HeroOverlay({
  backgroundSrc,
  backgroundAlt = "",
  children,
  height = "400px",
  aspectRatio,
  overlayDarkness = 0.4,
  gradientOverlay = false,
  parallax = false,
  fadeIn = false,
}: HeroOverlayProps) {
  const [offset, setOffset] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Parallax effect *BUGGY ON MOBILE*
  useEffect(() => {
    if (!parallax) return;
    const handleScroll = () => {
      setOffset(window.scrollY * 0.4);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [parallax]);

  // Fade-in effect (IntersectionObserver)
  useEffect(() => {
    if (!fadeIn || !contentRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, [fadeIn]);

  return (
    <div
      className={styles.wrapper}
      style={{
        height: aspectRatio ? "auto" : height,
        aspectRatio: aspectRatio || undefined,
      }}
    >
      <Image
        src={backgroundSrc}
        alt={backgroundAlt}
        fill
        className={styles.bgImage}
        style={{
          objectFit: "cover",
          transform: parallax ? `translateY(${offset * 0.2}px)` : "none",
        }}
      />

      {/* Overlay */}
      {(overlayDarkness > 0 || gradientOverlay) && (
        <div
          className={styles.overlay}
          style={{
            background: gradientOverlay
              ? `linear-gradient(rgba(0,0,0,${overlayDarkness}), rgba(0,0,0,0))`
              : `rgba(0,0,0,${overlayDarkness})`,
          }}
        />
      )}

      <div
        ref={contentRef}
        className={`${styles.content} ${fadeIn ? styles.fade : ""} ${
          isVisible ? styles.visible : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
