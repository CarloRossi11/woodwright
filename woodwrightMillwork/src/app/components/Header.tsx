import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.links}>
        <div  className={styles.linkGroup}>
          <Link className={styles.button} href={"/"}>
            <h3>Home</h3>
          </Link>
          <Link className={styles.button} href={"/about"}>
            <h3>About</h3>
          </Link>
          <Link className={styles.button} href={"/services"}>
            <h3>Services</h3>
          </Link>
        </div>
        <div className={styles.logoContainer}>
          <Link href={"/"}>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </Link>
        </div>
        <div className={styles.linkGroup}>
          <Link className={styles.button} href={"/portfolio"}>
            <h3>Portfolio</h3>
          </Link>
          <Link className={styles.button} href={"/contact"}>
            <h3>Contact</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
