// components/EntornoVirtual.js
import React from 'react';
import './virtual.css'
const EntornoVirtual = () => {
  return (
    <div>
      <h2 class="titulo">Entorno Virtual con React</h2>
      <p>
        Trabajar con un entorno virtual es una buena práctica para aislar las dependencias de tu proyecto.
        Aquí hay algunos pasos para trabajar con un entorno virtual en un proyecto React:
      </p>
      <ol>
        <li>
          <strong>Instalación de Node.js:</strong> Asegúrate de tener Node.js instalado en tu máquina.
        </li>
        <li>
          <strong>Crear un nuevo proyecto:</strong> Utiliza el siguiente comando para crear un nuevo proyecto React.
          <pre class="pre">npx create-react-app mi-proyecto</pre>
        </li>
        <li>
          <strong>Navegar al directorio del proyecto:</strong> Cambia al directorio del proyecto recién creado.
          <pre class="pre">cd mi-proyecto</pre>
        </li>
        <li>
          <strong>Crear un entorno virtual:</strong> Utiliza un gestor de entornos virtuales como `npm` o `yarn` para instalar dependencias del proyecto.
          <pre class="pre">npm install</pre>
          o
          <pre class="pre">yarn install</pre>
        </li>
        <li>
          <strong>Ejecutar la aplicación:</strong> Inicia tu aplicación React.
          <pre class="pre">npm start</pre>
          o
          <pre class="pre">yarn start</pre>
        </li>
      </ol>
    </div>
  );
}

export default EntornoVirtual;
