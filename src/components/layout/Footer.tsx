import React from 'react';
import Link from 'next/link';

const socials = [
  { src: '/svg/fb.svg',       href: '#',                         label: 'Facebook'  },
  { src: '/svg/twiter.svg',   href: '#',                         label: 'Twitter'   },
  { src: '/svg/lindkein.svg', href: '#',                         label: 'LinkedIn'  },
  { src: '/svg/ig.svg',       href: '#',                         label: 'Instagram' },
  { src: '/svg/wsp.svg',      href: 'https://wa.me/51947542277', label: 'WhatsApp'  },
];

const navColumns = [
  {
    title: 'Plataforma',
    links: [
      { label: 'Cómo funciona', href: '#' },
      { label: 'Beneficios',    href: '#' },
      { label: 'Casos de Éxito',href: '#' },
      { label: 'Calculadora',   href: '#calculadora-liquidez' },
    ],
  },
  {
    title: 'Compañía',
    links: [
      { label: 'Sobre nosotros', href: '/nosotros' },
      { label: 'Contacto',       href: '/contacto' },
      { label: 'Carreras',       href: '#' },
      { label: 'Blog',           href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Términos y condiciones', href: '#' },
      { label: 'Privacidad',             href: '#' },
      { label: 'Políticas de cookies',   href: '#' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-[#11152a] pt-14 border-t border-white/5">
      <style>{`
        .footer-grid { grid-template-columns: 1fr; }
        @media (min-width: 640px)  { .footer-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1024px) { .footer-grid { grid-template-columns: 1.6fr 1fr 1fr 1fr; } }
      `}</style>
      <div className="container">

        {/* ── Main grid ── */}
        <div className="footer-grid grid gap-8 mb-10 lg:gap-12 lg:mb-14">
          {/* Brand column */}
          <div className="flex flex-col gap-5 lg:pr-6">
            <Link href="/">
              <img
                src="/svg/fluxalogo.svg"
                alt="Fluxa Finance"
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="text-white/50 text-[0.88rem] leading-[1.65]">
              Transformando el futuro financiero de las empresas con soluciones de factoring ágiles y transparentes.
            </p>

            {/* Social icons */}
            <div className="flex gap-[10px] mt-1">
              {socials.map(({ src, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center transition-all duration-200 hover:bg-[#583e9b]"
                >
                  <img src={src} alt={label} className="w-[17px] h-[17px] object-contain" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h4 className="text-[0.95rem] font-semibold text-white mb-1">{col.title}</h4>
              {col.links.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-white/50 text-[0.88rem] transition-colors duration-200 hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/5 py-5">
          <p className="text-white/35 text-[0.8rem] text-center lg:text-left">
            © {new Date().getFullYear()} Fluxa Finance. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};
