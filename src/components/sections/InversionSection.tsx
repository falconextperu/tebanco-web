"use client";

import React from "react";

export const InversionSection = () => {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        backgroundImage: "url('/images/fondoseccion.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#EBE7FD"
      }}
    >
      <div
        className="inversion-content"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* Grid dos columnas */}
        <div
          style={{ display: "grid", alignItems: "center" }}
          className="inversion-grid"
        >
          {/* Columna izquierda */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Icono */}
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                background: "#ffffff",
                boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <img
                src="/images/crecer.png"
                alt=""
                aria-hidden="true"
                style={{ width: "40px", height: "40px", objectFit: "contain" }}
              />
            </div>

            {/* Título */}
            <h2
              style={{
                fontSize: "clamp(2rem, 3vw, 2.8rem)",
                fontWeight: 400,
                color: "#1e2359",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Haz crecer tu capital
              <br />
              con inversiones{" "}
              <strong style={{ fontWeight: 700 }}>
                respaldadas por
                <br />
                operaciones reales
              </strong>
            </h2>

            {/* Descripción */}
            <p
              style={{
                color: "#4a4e6b",
                fontSize: "1rem",
                lineHeight: 1.7,
                margin: 0,
                maxWidth: "480px",
              }}
            >
              Accede a oportunidades de inversión con rentabilidad proyectada,
              seguimiento transparente y gestión 100% digital. Beneficios rápidos
            </p>

            {/* Bullets */}
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                "Rentabilidad proyectada",
                "Diversificación inteligente",
                "Plataforma segura y transparente",
              ].map((item) => (
                <li
                  key={item}
                  style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#4a4e6b", fontSize: "1rem" }}
                >
                  <span style={{ color: "#4a4e6b", fontWeight: 700 }}>·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Columna derecha — foto señora */}
          <div className="inversion-image" style={{ display: "flex" }}>
            <img
              src="/svg/senora.svg"
              alt="Inversora Fluxa Finance"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                borderRadius: "20px",
                objectFit: "cover",
                boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
              }}
            />
          </div>
        </div>

        {/* Botón centrado abajo */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}>
          <a
            href="/inversionistas"
            style={{
              display: "inline-block",
              background: "#8b2fc9",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "1rem",
              padding: "15px 56px",
              borderRadius: "50px",
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(139,47,201,0.35)",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#7420b3")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#8b2fc9")}
          >
            Explorar inversiones
          </a>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        .inversion-grid { grid-template-columns: 1fr; gap: 2rem; }
        @media (min-width: 1024px) { .inversion-grid { grid-template-columns: 1fr 1fr; gap: 3.5rem; } }
        .inversion-content { padding: 3rem 1.25rem; }
        @media (min-width: 1024px) { .inversion-content { padding: 5rem 2.5rem; } }
        .inversion-image { justify-content: center; }
        @media (min-width: 1024px) { .inversion-image { justify-content: flex-end; } }
      `}</style>
    </section>
  );
};
