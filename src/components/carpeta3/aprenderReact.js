// components/AprenderReact.js
import React from 'react';
import './aprenderReact.css';
const AprenderReact = () => {
  return (
    <div class="div">
      <h2>Empezando con React</h2>
      <p class="p">
        React es una biblioteca de JavaScript para construir interfaces de usuario. Aquí hay algunos pasos para empezar:
      </p>
      <ul>
        <li>
          <strong>Instalación:</strong> Utiliza el comando siguiente para crear una nueva aplicación React.
          <pre> npx create-react-app mi-aplicacion-react</pre>
        </li>
        <li>
          <strong>Componentes:</strong> React funciona con componentes. Crea componentes reutilizables para tu aplicación.
        </li>
        <li>
          <strong>Estado y Propiedades:</strong> Aprende a manejar el estado interno y las propiedades para gestionar datos.
        </li>
        <li>
          <strong>Enrutamiento:</strong> Explora el enrutamiento con React Router para navegar entre páginas.
        </li>
        <li>
          <strong>Gestión de Estado:</strong> Considera el uso de Context API o herramientas de gestión de estado como Redux.
        </li>
      </ul>
    </div>
  );
}

export default AprenderReact;
