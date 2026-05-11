"use client";

import styles from "./portfolio.module.css";
import Footer from "../components/Footer";
import ImageViewer from "../components/ImageViewer";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { motion, useTransform, useScroll } from "motion/react";
import HeroOverlay from "../components/HeroOverlay";
import { useRef } from "react";

export default function Page() {
  const MotionLink = motion.create(Link);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className={styles.wrapper} ref={heroRef}>
      <Navbar />

      {/* Hero */}
      <div className={styles.heroArea}>
        <HeroOverlay
          backgroundSrc="/ripped/kitchen.webp"
          height="500px"
          overlayDarkness={0.5}
          gradientOverlay
          fadeIn
        >
          <h1>PORTFOLIO</h1>
          <p>
            Explore a selection of custom kitchens, built-ins, cabinetry, and
            specialty woodwork completed by Woodwright Millwork LLC.
          </p>
        </HeroOverlay>
      </div>

      <div className={styles.main}>
        <ImageViewer
          images={[
            { src: "/drive/bench.jpg", alt: "Shower Bench" },
            { src: "/drive/cubby.jpg", alt: "Cubby" },
            { src: "/drive/toilet.jpg", alt: "Toilet" },
            { src: "/drive/deck.jpg", alt: "Deck" },
            { src: "/drive/mount.jpg", alt: "Fireplace" },
            { src: "/drive/shadow.jpg", alt: "Kitchen" },
          ]}
        />
        <div className={styles.buttonContainer}>
          <div className={styles.ctas}>
            <MotionLink
              className={styles.primary}
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              Contact
            </MotionLink>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
