"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { ChevronDown, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Evitar scroll del body cuando el menu está abierto
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  const [isServiciosOpen, setIsServiciosOpen] = useState(false);
  const serviciosRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Inversionistas', href: '/inversionistas' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <div className={styles.logoIcon}>
            <img src="/logos/fluxalogo.svg" alt="Fluxa Finance Logo" className={styles.fluxaImage} />
          </div>
          FLUXA FINANCE
        </Link>

        {/* Navbar Desktop */}
        <nav className={styles.navDesktop}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={styles.navLink}>
              {link.name}
            </Link>
          ))}
          {/* Servicios Dropdown */}
          <div
            className={styles.navDropdown}
            ref={serviciosRef}
            onMouseEnter={() => setIsServiciosOpen(true)}
            onMouseLeave={() => setIsServiciosOpen(false)}
          >
            <button className={`${styles.navLink} ${styles.navDropdownTrigger}`}>
              Servicios
              <ChevronDown size={14} strokeWidth={2.5} className={`${styles.dropChevron} ${isServiciosOpen ? styles.dropChevronOpen : ''}`} />
            </button>
            {isServiciosOpen && (
              <div className={styles.dropMenu}>
                <div className={styles.dropMenuInner}>
                  <Link href="/servicios/factoring" className={styles.dropItem} onClick={closeMenu}>
                    <div className={styles.dropItemIcon}>📄</div>
                    <div>
                      <div className={styles.dropItemTitle}>Factoring</div>
                      <div className={styles.dropItemDesc}>Adelanta el cobro de tus facturas</div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className={styles.actions}>
          <a href="/inversionistas#simulador" className={styles.btnPrimary}>
            Solicitar financiación
          </a>

          <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu overlays full screen para móvil */}
      <div className={`${styles.mobileNavOverlay} ${isMobileMenuOpen ? styles.open : ''}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          <div className={styles.mobileCtaWrapper}>
            <a href="http://localhost:5174/registro" className={styles.btnPrimaryMobile} onClick={closeMenu}>
              Solicitar financiación
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
