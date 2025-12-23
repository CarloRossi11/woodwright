"use client";

import styles from "./services.module.css";
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
        backgroundSrc="/ripped/playroom.webp"
        height="500px"
        overlayDarkness={0.5}
        gradientOverlay
        fadeIn
      >
        <h1>SERVICES</h1>
        <p>
          Tech Wrench provides web development, digital solutions, and
          technology support designed to help small businesses grow and stay
          ahead in a fast-changing world.
        </p>
      </HeroOverlay>
      <div className={styles.main}>
        <div className={styles.establish}>
          <div className={styles.establishText}>
            <h2>
              <i>Starter Package</i>
            </h2>
            <h3>Starting at $1,000*</h3>
            <ul>
              <li>Custom Website + Basic SEO</li>
              <li>Google Business Profile Optimization</li>
              <ul>
                <p>
                  <i>* additional $100/month for hosting and maintenance</i>
                </p>
              </ul>
            </ul>
          </div>
          <div className={styles.establishImage}>
            <Image
              className={styles.logo}
              src="/gptestablish.png"
              alt="Establish Image"
              width={200}
              height={300}
              priority
            />
          </div>
        </div>

        <div className={styles.grow}>
          <div className={styles.growText}>
            <h2>
              <i>Brand Refresh</i>
            </h2>
            <h3>$1,250</h3>
            <ul>
              <li>
                Work with our design expert to create a new brand book,
                including:
              </li>
              <ul>
                <li>Primary and secondary logos</li>
                <li>Color palette</li>
                <li>Fonts</li>
              </ul>
              <li>Create/update social media & google profiles</li>
              <ul>
                <li>Facebok</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
                <ul>
                  <p>
                    <i>* includes 1 initial post for each platform</i>
                  </p>
                </ul>
              </ul>
            </ul>
          </div>
          <div className={styles.growImage}>
            <Image
              className={styles.logo}
              src="/gptgrow.png"
              alt="Grow Image"
              width={200}
              height={300}
              priority
            />
          </div>
        </div>
        <div className={styles.expand}>
          <div className={styles.expandText}>
            <h2>
              <i>Marketing Boost</i>
            </h2>
            <h3>Starting at $1,500</h3>
            <ul>
              <li>Automated E-mail marketing</li>
              <li>SMS (text message) services</li>
              <li>Meta & Google Ads*</li>
              <ul>
                <p>
                  <i>* First campaign free, fees per additional campaign</i>
                </p>
              </ul>
            </ul>
          </div>
          <div className={styles.expandImage}>
            <Image
              className={styles.logo}
              src="/gptexpand.png"
              alt="Expand Image"
              width={200}
              height={300}
              priority
            />
          </div>
        </div>
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
