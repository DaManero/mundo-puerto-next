'use client';

import Link from 'next/link';

const navigationItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Nosotros' },
  { href: '/investigaciones', label: 'Investigación' },
  { href: '/consultivo', label: 'Consejo Consultivo' },
  { href: '/noticias', label: 'Noticias' },
  { href: '/contact', label: 'Contacto' },
];

export default function Navigation() {
  return (
    <nav id="menu">
      <ul id="menu-main-menu" className="menu menu-main">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
