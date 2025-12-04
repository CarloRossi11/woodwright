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
        backgroundSrc="/ripped/greenroom.webp"
        height="500px"
        overlayDarkness={0.5}
        gradientOverlay
        fadeIn
      >
        <h1>ABOUT</h1>
        <p>
          The Woodwright & Millwork LLC mission is to pursue and bring to completion professional projects that are both functional and beautifully crafted.
        </p>
      </HeroOverlay>
      <div className={styles.main}>
        <div className={styles.founder}>
          <div className={styles.founderText}>
            <h1>Services</h1>
            <p>
              Woodwright & Millwork provides custom kitchens and bathrooms,
              built-ins, cabinetry, and tailored closet systems designed to
              elevate your home’s function and style. We offer full-service
              remodeling and detailed carpentry work, from trim and storage
              solutions to complete room transformations. Our specialty woodwork
              and custom millwork add unique character and craftsmanship to any
              space, giving each project a refined, handcrafted finish.
            </p>
          </div>
          <div className={styles.founderImage}>
            <ul>
              <li>Custom kitchens and bathrooms</li>
              <li>Built-ins and custom cabinetry</li>
              <li>Home remodeling and detailed carpentry</li>
              <li>Specialty woodwork and custom millwork</li>
            </ul>
          </div>
        </div>
        <div className={styles.company}>
          <h1>About The Company</h1>
          <p>
            We believe every home renovation deserves
            craftsmanship, care, and personalized design. From kitchens and
            bathrooms to closets, built-ins and custom carpentry, we specialize
            in transforming your vision into beautifully functional spaces. With
            meticulous attention to detail, transparent pricing, and a
            commitment to doing the job right, we aim to deliver quality and
            trust on every project. Our goal is simple: to make your home more
            comfortable, more beautiful, and uniquely yours — one crafted wood
            detail at a time.
          </p>
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
