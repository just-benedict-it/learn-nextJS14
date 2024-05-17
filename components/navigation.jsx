"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css"


export default function Navigation() {
  // interactive한 요소이기 때문에 "use client"를 정의해서 hydration 시켜줘야 함
  const path = usePathname();
  return (
    <nav className={styles.nav} >
      <ul className={styles.list}>
        <li>
          <Link href={"/"}>Home</Link> {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href={"/about-us"}>About Us</Link> {path === "/about-us" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}
