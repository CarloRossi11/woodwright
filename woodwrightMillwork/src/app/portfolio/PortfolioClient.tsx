"use client";

import styles from "./portfolio.module.css";
import Footer from "../components/Footer";
import ImageViewer from "../components/ImageViewer";
import HeroOverlay from "../components/HeroOverlay";
import Navbar from "../components/Navbar";

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
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
            <a className={styles.primary} href={"/pages/contact"}>
              Contact
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
