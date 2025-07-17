import React from 'react';

function Header() {
  return (
    <header>
      <div className="container">
        <a href="#" className="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          Soluciones Mike
        </a>
        <nav className="nav-menu">
          <ul>
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;