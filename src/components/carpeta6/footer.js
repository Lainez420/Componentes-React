// components/Footer.js
import React from 'react';
import './footer.css'
const Footer = () => {
  return (
    <footer class="footer">
      <div className="contenedor">
        <p>&copy; 2023 Mi Aplicación React. Todos los derechos reservados.</p>
        <div className="enlaces">
          <a href="/privacidad">Política de privacidad</a>
          <a href="/terminos">Términos de servicio</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
