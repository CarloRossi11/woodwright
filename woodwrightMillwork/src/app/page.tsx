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
          "/ripped/kitchen.webp",
          "/ripped/playroom.webp",
          "/ripped/tv.webp",
          "/ripped/greenroom.webp",
        ]}
        autoPlay
        autoPlayInterval={4000}
      />

      <div className={styles.intro}>
        <div className={styles.introLeft}>
          <h1>Woodwright Millwork LLC</h1>
          <h2>License #87258</h2>
          <p>
            The Woodwright & Millwork LLC mission is to pursue and bring to
            completion professional projects that are both functional and
            beautifully crafted.
          </p>
        </div>
        <div className={styles.introRight}>
          <h4>Phone</h4>
          <p>412-491-7136</p>
          <h4>Location</h4>
          <p>65 Glen Rd. PMB 252 Garner, NC 27529</p>
          <div className={styles.ctas}>
            <a className={styles.primary} href={"/contact"}>
              Contact
            </a>
          </div>
        </div>
      </div>
      <main className={styles.main}>
        <div className={styles.weDo}>
          <div className={styles.weDoLeft}>
            <ImageShuffle
              images={[
                {
                  src: "/drive/ceiling.jpg",
                  alt: "Ceiling Woodwork",
                },
                {
                  src: "/ripped/stairs.webp",
                  alt: "Stairs",
                },
                {
                  src: "/drive/float.jpg",
                  alt: "Floating Shelves",
                }
              ]}
            />
          </div>
          <div className={styles.weDoRight}>
            <h2>What we do</h2>
            <p>
              Woodwright & Millwork offers custom kitchens, bathrooms,
              built-ins, cabinetry, and closets designed to fit your home and
              style. We handle home remodeling, detailed carpentry, and
              specialty woodwork, delivering clean, quality craftsmanship on
              every project.
            </p>
            <ul>
              <li>Custom kitchens and bathrooms</li>
              <li>Built-ins and custom cabinetry</li>
              <li>Home remodeling and detailed carpentry</li>
              <li>Specialty woodwork and custom millwork</li>
            </ul>
            <div className={styles.ctas}>
              <a className={styles.primary} href={"/about"}>
                Services
              </a>
            </div>
          </div>
        </div>
        <HeroOverlay
          backgroundSrc="/ripped/puppy.webp"
          height="500px"
          aspectRatio="16/9"
          overlayDarkness={0.75}
          gradientOverlay
          // parallax
          fadeIn
        >
          <Image
            className={styles.logo}
            src="/woddwrightLogo.webp"
            alt="Woodwright logo"
            width={75}
            height={75}
            priority
          />
          <p>Custom Carpentry | Built Ins | Kitchen & Bathrooms</p>
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
