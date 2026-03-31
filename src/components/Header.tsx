"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { ChevronRight, Menu, X } from 'lucide-react';

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

  const navLinks = [
    { name: 'Nosotros', href: '/#nosotros' },
    { name: 'Beneficios', href: '/#beneficios' },
    { name: 'Cómo Funciona', href: '/#como-funciona' },
    { name: 'Plataforma', href: '/#plataforma' },
    { name: 'Preguntas', href: '/#faq' },
    { name: 'Inversionistas', href: '/inversionistas' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <div className={styles.logoIcon}>
            <div className={styles.innerCircle}></div>
          </div>
          TeBanco
        </Link>

        {/* Navbar Desktop */}
        <nav className={styles.navDesktop}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={styles.navLink}>
              {link.name}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href="http://localhost:5174/registro" className={styles.btnPrimary}>
            <span>Comenzar</span>
            <div className={styles.btnIconBox}>
              <ChevronRight size={16} strokeWidth={3} />
            </div>
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
              Comenzar
              <ChevronRight size={18} strokeWidth={2.5} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
