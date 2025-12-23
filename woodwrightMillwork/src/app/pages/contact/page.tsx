"use client";

import styles from "./contact.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HamburgerMenu from "../../components/HamburgerMenu";
import useIsMobile from "../../hooks/useIsMobile";
import ContactForm from "../../components/ContactForm";
import HeroOverlay from "../../components/HeroOverlay";

export default function Page() {
  const isMobile = useIsMobile(850);
  return (
    <div className={styles.wrapper}>
      {isMobile ? <HamburgerMenu /> : <Header />}
      <HeroOverlay
        backgroundSrc="/ripped/tv.webp"
        height="500px"
        overlayDarkness={0.5}
        // gradientOverlay
        fadeIn
      >
        <h1>CONTACT</h1>

        <p>
          Our goal is to gather the most information from you to assist us with
          helping you bring your project to fruition.{" "}
        </p>
        <br />
        <p>
          Please complete the form below and we will get back to you within 1-2
          business days to discuss the next steps for your project.{" "}
        </p>
      </HeroOverlay>
      <div className={styles.main}>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
