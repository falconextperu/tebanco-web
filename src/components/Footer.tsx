import React from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logo}>
            <ShieldCheck className={styles.logoIcon} size={28} />
            <span>TeBanco</span>
          </Link>
          <p className={styles.description}>
            Transformando el futuro financiero de las empresas con soluciones de factoring ágiles y transparentes.
          </p>
          <div className={styles.socials}>
            <Link href="#" className={styles.socialLink}>FB</Link>
            <Link href="#" className={styles.socialLink}>TW</Link>
            <Link href="#" className={styles.socialLink}>LI</Link>
            <Link href="#" className={styles.socialLink}>IG</Link>
          </div>
        </div>

        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Plataforma</h4>
          <Link href="#" className={styles.link}>Cómo funciona</Link>
          <Link href="#" className={styles.link}>Beneficios</Link>
          <Link href="#" className={styles.link}>Casos de Éxito</Link>
          <Link href="#" className={styles.link}>Calculadora</Link>
        </div>

        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Compañía</h4>
          <Link href="#" className={styles.link}>Sobre nosotros</Link>
          <Link href="#" className={styles.link}>Contacto</Link>
          <Link href="#" className={styles.link}>Carreras</Link>
          <Link href="#" className={styles.link}>Blog</Link>
        </div>

        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Legal</h4>
          <Link href="#" className={styles.link}>Términos y condiciones</Link>
          <Link href="#" className={styles.link}>Privacidad</Link>
          <Link href="#" className={styles.link}>Políticas de cookies</Link>
        </div>

      </div>
      
      <div className={styles.bottom}>
        <div className="container flex-between">
          <p className={styles.copyright}>
            © {new Date().getFullYear()} TeBanco. Todos los derechos reservados.
          </p>
          <div className={styles.disclaimer}>Autorizados por la SBS.</div>
        </div>
      </div>
    </footer>
  );
};
