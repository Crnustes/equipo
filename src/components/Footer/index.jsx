import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/Footer.png" }}
    >
      <div className="redes">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <img src="/img/instagram.png" alt="instagram" />
        </a>
        <a href="https://github.com/Crnustes" target="_blank" rel="noreferrer">
          <img src="/img/github.png" alt="Facebook" />
        </a>
        <a
          href="https://www.linkedin.com/in/cristiannustes/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/img/linkedin.png" alt="linkedin" />
        </a>
      </div>
      <div className="logo">
        <img src="/img/logo.png" alt="logo" />
      </div>
      <div className="info">
        <strong>Desarrollado por Cristian Ñustes</strong>
      </div>
    </footer>
  );
};

export default Footer;
