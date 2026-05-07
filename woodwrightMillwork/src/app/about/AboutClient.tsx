"use client";

import { useState } from "react";
import styles from "./about.module.css";
import Footer from "../components/Footer";
import HeroOverlay from "../components/HeroOverlay";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Page() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <HeroOverlay
        backgroundSrc="/ripped/greenroom.webp"
        height="500px"
        overlayDarkness={0.5}
        gradientOverlay
        fadeIn
      >
        <h1>ABOUT</h1>
        <p>
          Woodwright Millwork LLC is dedicated to delivering high-quality custom
          carpentry and millwork with a focus on craftsmanship, durability, and
          timeless design.
        </p>
      </HeroOverlay>
      <div className={styles.main}>
        <div className={styles.services}>
          <div className={styles.servicesText}>
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
          <div className={styles.serviceList}>
            <ul>
              <li>Custom kitchens and bathrooms</li>
              <li>Built-ins and custom cabinetry</li>
              <li>Home remodeling and detailed carpentry</li>
              <li>Specialty woodwork and custom millwork</li>
            </ul>
          </div>
        </div>
        <div className={styles.company}>
          <div className={styles.companyText}>
            <h1>Company</h1>
            <p>
              Woodwright & Millwork LLC blends time-honored craftsmanship with
              modern residential remodeling, drawing inspiration from the
              historic term “Woodwright”—once used to describe skilled
              carpenters dedicated to their trade. Founded by Andrew Schafer,
              whose passion for building began in childhood and evolved into a
              professional career in 2011, the company reflects over a decade of
              hands-on experience and growth in the industry. Today, Woodwright
              & Millwork is committed to delivering thoughtfully crafted
              projects rooted in quality, integrity, and exceptional customer
              service—creating spaces that bring lasting value and enjoyment to
              every home.
            </p>
            {expanded && (
              <p className={styles.expandedText}>
                Woodwright &amp; Millwork LLC is a historic nod to residential
                construction and professional carpenters of old. The name
                Woodwright &amp; Millwork finds its roots from the esteemed name
                for a carpenter. In the early 1500s before the term carpenter
                became the modern title. The old English term “Wuduwyrhta” or
                “Woodwright” was commonly used. The first record of the term
                Woodwright was recorded in the 1530’s. In the pre- industrial
                society Woodwright’s were respected and the name “Wright”
                implied a skilled craftsman.
                <br /> Before Woodwright &amp; Millwork LLC came to be. We must
                step back in time to the early 1990’s. As a kid I found joy and
                fulfillment from disassembling things, connecting things, fixing
                things. Often not being able to repair or reassemble most of
                them but ultimately getting personal fulfillment from seeing
                people’s reactions and the feeling of accomplishment when I
                built something. Discovering my joy and interest in building at
                a young age was further fueled by the projects I did, as a kid,
                to build my first bird house and help build a picnic table, as
                well as watching my grandfather carve wooden ducks. No one knew
                what kind of impact this would have on my future. <br /> After
                graduating high school and completing two years of college I
                discovered that I was headed in the wrong direction with my
                career. <br /> In 2011 I decided to shift gears and pursue my
                love for building in the residential remodeling industry by
                becoming a full-time carpenter in western Pennsylvania. Ten
                years later, after working, working my way up from a laborer to
                carpenter to lead carpenter to a project supervisor to a duly
                licensed/insured General Contractor. Woodwright &amp; Millwork
                LLC was formed with the singular goal of building beautifully
                crafted projects with a focus on three things: Quality,
                Integrity, and Customer Service. <br /> My Name is Andrew
                Schafer. I am the owner/operator of Woodwright &amp; Millwork
                LLC. Thank you for taking a look at our website. We look forward
                to the opportunity to create a home project that will bring joy
                and value to you and your family for years to come.
              </p>
            )}

            <a
              className={styles.moreButton}
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Show less" : "...more"}
            </a>
          </div>
          <div className={styles.founderImage}>
            <Image
              src="/woddwrightLogo.webp"
              alt="Woodwright logo"
              width={250}
              height={250}
              priority
            />
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
