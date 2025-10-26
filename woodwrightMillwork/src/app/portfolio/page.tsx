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
          Explore our collection of projects that showcase our passion for web
          development, problem-solving, and delivering quality solutions for
          small businesses.
        </p>
      </HeroOverlay>
      <div className={styles.main}>
        <ImageViewer
          images={[
            { src: "/RC_HomeSlider_Web.webp", alt: "Home Slider 1" },
            { src: "/RC_HomeSlider_Web_2.webp", alt: "Home Slider 2" },
            { src: "/RC_HomeSlider_Web_3.webp", alt: "Home Slider 3" },
            { src: "/RC_HomeSlider_Web_4.webp", alt: "Home Slider 4" },
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
