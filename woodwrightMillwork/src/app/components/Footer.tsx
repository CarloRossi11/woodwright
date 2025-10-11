import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.main}>
      <footer className={styles.footer}>
        <div className={styles.socials}>
          <h6>Follow Us:</h6>
          <div className={styles.socialLinks}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/FB.png"
                alt="Facebook icon"
                width={16}
                height={16}
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/IG.png"
                alt="Instagram icon"
                width={16}
                height={16}
              />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/LI.png"
                alt="LinkedIn icon"
                width={16}
                height={16}
              />
            </a>
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
          <p>© 2024 Tech Wrench. All rights reserved.</p>
          <p>
            Development & Website by{" "}
            <a href="https://techwrench.co/" target="_blank">
              Tech Wrench
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
