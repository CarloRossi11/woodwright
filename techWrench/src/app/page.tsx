"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import HamburgerMenu from "./components/HamburgerMenu";
import useIsMobile from "./hooks/useIsMobile";
import ImageShuffle from "./components/ImageShuffle";
import HeroOverlay from "./components/HeroOverlay";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const isMobile = useIsMobile(850);

  return (
    <div className={styles.page}>
      {isMobile ? <HamburgerMenu /> : <Header />}
      <Carousel
        images={[
          "/RC_HomeSlider_Web.webp",
          "/RC_HomeSlider_Web_2.webp",
          "/RC_HomeSlider_Web_3.webp",
          "/RC_HomeSlider_Web_4.webp",
        ]}
        autoPlay
        autoPlayInterval={4000}
      />
      <main className={styles.main}>
        <div className={styles.intro}>
          <div className={styles.introLeft}>
            <h1>Tech Wrench</h1>
            <h2>
              We build, optimize, and modernize your business operations with
              smart, scalable digital solutions.
            </h2>
            <p>
              At Tech Wrench, we believe in the power of craftsmanship — whether
              it is built by hand or coded in the cloud. We help small and
              mid-sized businesses modernize their operations, harness digital
              tools, and streamline workflows through practical, scalable
              technology. Inspired by the Pittsburgh legacy of grit and
              innovation, we are dedicated to building stronger, smarter
              businesses equipped for the modern digital economy.
            </p>
          </div>
          <div className={styles.introRight}>
            <h4>Phone</h4>
            <p>412-867-5309</p>
            <h4>Location</h4>
            <p>Pittsburgh, PA</p>
            <div className={styles.ctas}>
              <a className={styles.primary} href={"/contact"}>
                Contact
              </a>
            </div>
          </div>
        </div>

        <HeroOverlay 
        backgroundSrc="/RC_HomeSlider_Web_2.webp" 
        height="500px"
        aspectRatio="16/9"
        overlayDarkness={0.5}
        gradientOverlay
        // parallax
        fadeIn
        >
          <h2>SUPERIOR CRAFTSMANSHIP</h2>
          <p>
            We provide our clients with years of experience working with
            hardwoods, exotic wood veneers, and more.
          </p>
        </HeroOverlay>

        <div className={styles.weDo}>
          <div className={styles.weDoLeft}>
            <ImageShuffle
              images={[
                {
                  src: "/RC_HomeSlider_Web_4.webp",
                  alt: "Carpentry Project 4",
                },
                {
                  src: "/RC_HomeSlider_Web_3.webp",
                  alt: "Carpentry Project 3",
                },
                {
                  src: "/RC_HomeSlider_Web_2.webp",
                  alt: "Carpentry Project 2",
                },
                { src: "/RC_HomeSlider_Web.webp", alt: "Carpentry Project 1" },
              ]}
            />
          </div>
          <div className={styles.weDoRight}>
            <h2>What we do</h2>
            <p>
              At Tech Wrench, we believe in the power of craftsmanship — whether
              it is built by hand or coded in the cloud. We help small and
              mid-sized businesses modernize their operations, harness digital
              tools, and streamline workflows through practical, scalable
              technology. Inspired by the Pittsburgh legacy of grit and
              innovation, we are dedicated to building stronger, smarter
              businesses equipped for the modern digital economy.
            </p>
            <ul>
              <li>Websites</li>
              <li>SEO</li>
              <li>Branding</li>
              <li>Email & SMS Marketing</li>
              <li>Online Ads</li>
            </ul>
            <div className={styles.ctas}>
              <a className={styles.primary} href={"/services"}>
                Services
              </a>
            </div>
          </div>
        </div>
        <HeroOverlay backgroundSrc="/RC_HomeSlider_Web_3.webp" 
        height="500px"
        aspectRatio="16/9"
        overlayDarkness={0.5}
        gradientOverlay
        // parallax
        fadeIn
        >
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <p>- Establish | Grow | Expand -</p>
        </HeroOverlay>
        <div className={styles.contact}>
          <h1> Get In Touch</h1>
          <ContactForm />
        </div>
        
      </main>
      <Footer />
    </div>
  );
}
