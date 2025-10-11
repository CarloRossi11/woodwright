"use client";

import styles from "./about.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HamburgerMenu from "../components/HamburgerMenu";
import useIsMobile from "../hooks/useIsMobile";
import HeroOverlay from "../components/HeroOverlay";
import Image from "next/image";

export default function Page() {
  const isMobile = useIsMobile(850);
  return (
    <div className={styles.wrapper}>
      {isMobile ? <HamburgerMenu /> : <Header />}
      <HeroOverlay
        backgroundSrc="/RC_HomeSlider_Web_2.webp"
        height="500px"
        overlayDarkness={0.5}
        gradientOverlay
        fadeIn
      >
        <h1>ABOUT</h1>
        <p>
          Built on a foundation of hard work and over five years of development
          experience, Tech Wrench is dedicated to delivering high-quality,
          tailored solutions that help small businesses thrive.
        </p>
      </HeroOverlay>
      <div className={styles.main}>
        <div className={styles.company}>
          <h1>About The Company</h1>
          <p>
            At Tech Wrench, we believe technology should empower—not
            overwhelm—small businesses. Our mission is to simplify the digital
            landscape, giving business owners the right tools, strategies, and
            support to grow with confidence. From web development and automation
            to AI-driven solutions, we help transform ideas into scalable
            results.
          </p>
        </div>
        <div className={styles.founder}>
          <div className={styles.founderText}>
            <h1>About The Founder</h1>
            <p>
              Tech Wrench was founded by Carlo Berardelli, a passionate web
              developer with over 5 years of hands-on experience building
              websites, apps, and digital solutions. Driven by a love for
              problem-solving and innovation, Carlo started Tech Wrench to
              bridge the gap between modern technology and small businesses that
              need it most. His goal is to make tech accessible, practical, and
              tailored—so entrepreneurs can focus on what they do best while
              Tech Wrench handles the rest.
            </p>
          </div>
          <div className={styles.founderImage}>
            <Image
              className={styles.logo}
              src="/fabio.webp"
              alt="Founder Image"
              width={200}
              height={300}
              priority
            />
            <p className={styles.caption}>Carlo Berardelli, Founder</p>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.ctas}>
          <a className={styles.primary} href={"/contact"}>
            Contact
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
