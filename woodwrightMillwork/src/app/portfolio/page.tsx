"use client";

import styles from "./portfolio.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HamburgerMenu from "../components/HamburgerMenu";
import useIsMobile from "../hooks/useIsMobile";
import ImageViewer from "../components/ImageViewer";
import HeroOverlay from "../components/HeroOverlay";

export default function Page() {
  const isMobile = useIsMobile(850);
  return (
    <div className={styles.wrapper}>
      {isMobile ? <HamburgerMenu /> : <Header />}
      <HeroOverlay
        backgroundSrc="/ripped/kitchen.webp"
        height="500px"
        overlayDarkness={0.5}
        gradientOverlay
        fadeIn
      >
        <h1>PORTFOLIO</h1>
        <p>
          Explore our portfolio to see the custom woodwork and home transformations we’ve completed for our clients.
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
            <a className={styles.primary} href={"/contact"}>
              Contact
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
