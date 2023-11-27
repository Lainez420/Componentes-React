// components/Navbar.js
import React from 'react';
import Logo from '../../assets/react.png';
import './navbar.css' // Asegúrate de tener la imagen en una carpeta llamada 'assets'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="links">
        <a href="/">Inicio</a>
        <a href="/productos">Productos</a>
        <a href="/servicios">Servicios</a>
        <a href="/contacto">Contacto</a>
      </div>
    </nav>
  );
}

export default Navbar;
