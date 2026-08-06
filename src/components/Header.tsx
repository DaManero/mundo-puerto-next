"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import styles from "./Header.module.css";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Nosotros" },
  { href: "/investigaciones", label: "Investigaciones" },
  { href: "/consultivo", label: "Consejo Consultivo" },
  { href: "/noticias", label: "Noticias" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const headerClass = `${styles.header} ${scrolled ? styles.headerScrolled : ""}`;

  return (
    <header className={headerClass}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Ir al inicio">
          <img className={styles.logoImg} src="/images/mp_img/logoMP.png" alt="Fundación Mundo Puerto" />
        </Link>

        <nav className={styles.nav} aria-label="Navegación principal">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${isActive(pathname, item.href) ? styles.navLinkActive : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className={styles.navCta}>
            Contacto
          </Link>
        </nav>

        <button
          type="button"
          className={`${styles.toggle} ${open ? styles.toggleOpen : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobilePanel} ${open ? styles.mobilePanelOpen : ""}`}
        aria-hidden={!open}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.mobileLink} ${isActive(pathname, item.href) ? styles.mobileLinkActive : ""}`}
          >
            {item.label}
          </Link>
        ))}
        <Link href="/contact" className={styles.mobileCta}>
          Contactanos
        </Link>
      </div>
    </header>
  );
}
