import React from 'react';
import styles from './Sponsors.module.css';

export const Sponsors = () => {
  return (
    <section className={styles.sponsorsSection}>
      <div className="container" style={{ position: 'relative', zIndex: 50 }}>
        <div className={styles.sponsorsGrid}>
          <div className={styles.sponsorCard}>
            <img src="/logos/aje.webp" alt="AJE" width={180} height={60} style={{ objectFit: 'contain' }} />
          </div>
          <div className={styles.sponsorCard}>
            <img src="/logos/cavali.webp" alt="Cavali" width={180} height={60} style={{ objectFit: 'contain' }} />
          </div>
          <div className={styles.sponsorCard}>
            <img src="/logos/superintendencia.webp" alt="Superintendencia" width={180} height={60} style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    </section>
  );
};
