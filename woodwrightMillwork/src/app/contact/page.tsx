"use client";

import styles from "./contact.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HamburgerMenu from "../components/HamburgerMenu";
import useIsMobile from "../hooks/useIsMobile";
import ContactForm from "../components/ContactForm";
import HeroOverlay from "../components/HeroOverlay";

export default function Page() {
  const isMobile = useIsMobile(850);
  return (
    <div className={styles.wrapper}>
      {isMobile ? <HamburgerMenu /> : <Header />}
      <HeroOverlay backgroundSrc="/RC_HomeSlider_Web_2.webp" height="500px"
        overlayDarkness={.5}
        gradientOverlay
        fadeIn
      >
      <h1>CONTACT</h1>
      <p>Lets connect— whether you are ready to start a project or just exploring ideas, we would love to hear from you.</p>
    </HeroOverlay>
      <div className={styles.main}>
      <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
