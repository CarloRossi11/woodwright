import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import { getMapsLink } from "../utils/maps";

const address = "65 Glen Rd. PMB 252, Garner, NC 27529";

export default function Footer() {
  const mapsLink = getMapsLink(address);
  return (
    <div className={styles.main}>
      <footer className={styles.footer}>
        <div className={styles.address}>
          <div className={styles.addressContainer}>
            <address>
              <strong>Woodwright & Millwork LLC</strong>
              <a className={styles.wrench} href={mapsLink} target="_blank" rel="noopener noreferrer">
                <br />
              65 Glen Rd. PMB 252
              <br />
              Garner, NC 27529
              <br />
              </a>
              <a className={styles.wrench} href="tel:+14124917136">(412) 491-7136</a>
            </address>
          </div>
        </div>
        <div className={styles.logoContainer}>
          <Link href={"/"}>
            <Image
              className={styles.logo}
              src="/woddwrightLogo.webp"
              alt="Woodwright logo"
              width={75}
              height={75}
              priority
            />
          </Link>
        </div>
        <div className={styles.copyright}>
          <div className={styles.socials}>
            <h6>Follow Us:</h6>
            <div className={styles.socialLinks}>
              <a
                href="https://www.facebook.com/profile.php?id=100068296598237"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={styles.icon}
                  aria-hidden
                  src="/FB.png"
                  alt="Facebook icon"
                  width={16}
                  height={16}
                />
              </a>
              <a
                href="https://www.instagram.com/woodwrightandmillwork/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={styles.icon}
                  aria-hidden
                  src="/IG.png"
                  alt="Instagram icon"
                  width={16}
                  height={16}
                />
              </a>
            </div>
          </div>
          <p>©2019 Woodwright & Millwork LLC. All rights reserved.</p>
          <p>
            Website developed by{" "}
            <a
              href="https://techwrench.co/"
              target="_blank"
              className={styles.wrench}
            >
              Tech Wrench
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
