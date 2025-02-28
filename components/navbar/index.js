import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./header.module.css";
import Logo from "../../public/logo.png";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <Image src={Logo} width={50} height={100} alt="Logo" />
      <ul className={styles.navLinks}>
        {["Home", "About", "Projects"].map((item) => {
          const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
          const isActive = router.pathname === path;

          return (
            <li key={item}>
              <Link href={path}>
                <span className={isActive ? styles.active : ""}>{item}</span>
              </Link>
            </li>
          );
        })}
        {/* Resume Link Styled Like the Other Navigation Links */}
        <li>
          <Link href="/Resume.pdf" target="_blank" download="Nathans Resume">
            <span className={styles.navLink}>Resume</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}






