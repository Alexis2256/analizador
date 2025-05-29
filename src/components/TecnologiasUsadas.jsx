import React from "react";

const tecnologias = [
  {
    nombre: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    nombre: "Tailwind CSS",
    img: "https://www.svgrepo.com/show/374118/tailwind.svg",
  },
  {
    nombre: "Vite",
    img: "https://vitejs.dev/logo.svg",
  },
  {
    nombre: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    nombre: "HTML",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    nombre: "CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
];

const TecnologiasUsadas = () => (
  <section className="flex flex-col items-center mt-12 mb-8">
    <h3 className="text-2xl font-bold text-cyan-300 mb-6 drop-shadow-lg">Tecnologías usadas</h3>
    <div className="flex flex-wrap gap-10 bg-[#1a1833]/80 rounded-2xl px-10 py-8 shadow-2xl border border-cyan-900">
      {tecnologias.map((tec) => (
        <div key={tec.nombre} className="flex flex-col items-center w-32">
          <img
            src={tec.img}
            alt={tec.nombre}
            className="h-16 mb-2 drop-shadow-[0_0_10px_#00fff7] transition transform duration-300 ease-in-out hover:scale-150 hover:drop-shadow-xl"
          />
          <span className="text-white font-semibold text-lg text-center">{tec.nombre}</span>
        </div>
      ))}
    </div>

    {/* Nueva sección: Propósito */}
    <section className="w-full max-w-3xl mt-16 flex flex-col items-center">
      <h3 className="text-2xl font-bold text-cyan-300 mb-4 mt-8 drop-shadow-lg">Propósito</h3>
      <div className="bg-[#1a1833]/80 rounded-2xl px-8 py-6 shadow-2xl border border-cyan-900 text-white text-lg mb-4">
        <p className="mb-4">
          <span className="font-bold text-cyan-500">Expresiones Regulares:</span>{" "}
          &nbsp;Son patrones utilizados para buscar y manipular texto. Son fundamentales en la programación para validar datos, realizar búsquedas avanzadas y transformar cadenas de texto. Su importancia radica en la capacidad de automatizar tareas de análisis y procesamiento de información textual de manera eficiente.
        </p>
        <p>
          <span className="font-bold text-cyan-500">Analizador Léxico:</span>{" "}
          &nbsp;Es la primera fase de un compilador o intérprete. Se encarga de leer el código fuente y dividirlo en unidades significativas llamadas tokens. Es esencial porque permite identificar la estructura básica del lenguaje, facilitando la detección de errores y el posterior análisis sintáctico y semántico.
        </p>
      </div>
    </section>
  </section>
);

export default TecnologiasUsadas;