// components/Inicio.js
import React from 'react';
import Imagen1 from '../../assets/imagen1.png';
import Imagen2 from '../../assets/imagen2.jpeg';
import './inicio.css'

const Inicio = () => {
  return (
    <div>
      <h2 class="titulo">Programación en React</h2>
      <p>
        React es una biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas.
        Es mantenido por Facebook y la comunidad de desarrolladores. Aquí encontrarás información
        útil sobre React y sus mejores prácticas.
      </p>
      <div className="imagenes">
        <img src={Imagen1} alt="Imagen 1" />
        <img src={Imagen2} alt="Imagen 2" />
      </div>
    </div>
  );
}

export default Inicio;
