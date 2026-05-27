import React from 'react';

export const Sponsors = () => {
  return (
    <section className="bg-white py-12 relative z-50 border-b border-black/5">
      <div className="container" style={{ position: 'relative', zIndex: 50 }}>
        <div className="flex justify-center items-center gap-16 flex-wrap">
          {[
            { src: '/logos/aje.webp', alt: 'AJE' },
            { src: '/logos/cavali.webp', alt: 'Cavali' },
            { src: '/logos/superintendencia.webp', alt: 'Superintendencia' },
          ].map(({ src, alt }) => (
            <div
              key={alt}
              className="opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <img src={src} alt={alt} width={180} height={60} style={{ objectFit: 'contain' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
