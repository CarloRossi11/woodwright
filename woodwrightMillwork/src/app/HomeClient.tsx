"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import HamburgerMenu from "./components/HamburgerMenu";
import useIsMobile from "./hooks/useIsMobile";
import ImageShuffle from "./components/ImageShuffle";
import HeroOverlay from "./components/HeroOverlay";
import ContactForm from "./components/ContactForm";
import { getMapsLink } from "./utils/maps";

const address = "65 Glen Rd. PMB 252, Garner, NC 27529";

export default function HomeClient() {
  const isMobile = useIsMobile(850);
  const mapsLink = getMapsLink(address);

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

      <section className={styles.intro}>
        <div className={styles.introLeft}>
          <h1>Woodwright Millwork LLC</h1>
          <h2>Licensed & Insured · License #87258</h2>
          <p>
            Woodwright Millwork LLC specializes in custom carpentry and
            millwork, delivering beautifully crafted, functional spaces for
            homes across North Carolina.
          </p>
        </div>

        <div className={styles.introRight}>
          <h3>Phone</h3>
          <p>
            <a className={styles.linkHover} href="tel:14124917136">412-491-7136</a>
          </p>

          <h3>Location</h3>
          <a className={styles.linkHover} href={mapsLink} target="_blank" rel="noopener noreferrer">
              65 Glen Rd. PMB 252
              <br />
              Garner, NC 27529
              <br />
              </a>

          <div className={styles.ctas}>
            <Link className={styles.primary} href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </section>

      <main className={styles.main}>
        <section className={styles.weDo}>
          <div className={styles.weDoLeft}>
            <ImageShuffle
              images={[
                { src: "/drive/ceiling.jpg", alt: "Custom wood ceiling" },
                { src: "/ripped/stairs.webp", alt: "Custom wood stairs" },
                { src: "/drive/float.jpg", alt: "Floating wood shelves" },
              ]}
            />
          </div>

          <div className={styles.weDoRight}>
            <h2>Custom Carpentry & Millwork Services</h2>
            <p>
              We design and build custom kitchens, bathrooms, cabinetry,
              built-ins, and specialty millwork tailored to your home and style.
            </p>

            <ul>
              <li>Custom kitchens and bathrooms</li>
              <li>Built-ins and custom cabinetry</li>
              <li>Home remodeling and detailed carpentry</li>
              <li>Specialty woodwork and millwork</li>
            </ul>

            <div className={styles.ctas}>
              <Link className={styles.primary} href="/about">
                View Services
              </Link>
            </div>
          </div>
        </section>

        <HeroOverlay
          backgroundSrc="/ripped/puppy.webp"
          height="500px"
          aspectRatio="16/9"
          overlayDarkness={0.75}
          gradientOverlay
          fadeIn
        >
          <Image
            className={styles.logo}
            src="/woddwrightLogo.webp"
            alt="Woodwright Millwork logo"
            width={75}
            height={75}
            priority
          />
          <p>Custom Carpentry · Built-Ins · Kitchens & Bathrooms</p>
        </HeroOverlay>

        <section className={styles.contact}>
          <h2>Get In Touch</h2>
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}
