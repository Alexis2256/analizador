import React, { useState } from "react";

const patrones = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  telefono: /^\d{10}$/,
  curp: /^[A-Z]{4}\d{6}[HM][A-Z]{5}[0-9A-Z]{2}$/,
  rfc: /^[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{3}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  fecha: /^(?:\d{4}-\d{2}-\d{2}|(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4})$/,
  url: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
  ip: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
  hex: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
};

const ejemplos = {
  email: "Ejemplo: usuario@nelfri.com",
  telefono: "Ejemplo: 5512345678",
  curp: "Ejemplo: ABCD123456HDFLRST9",
  rfc: "Ejemplo: ABCD123456TZ5",
  password: "Ejemplo: ClaveSegura1",
  fecha: "Ejemplo: 2023-12-01 o 01/12/2023",
  url: "Ejemplo: https://www.alexis.com",
  ip: "Ejemplo: 192.168.0.1",
  hex: "Ejemplo: #a3c113"
};

const tipos = [
  { value: "email", label: "Email" },
  { value: "telefono", label: "Teléfono (10 dígitos)" },
  { value: "curp", label: "CURP" },
  { value: "rfc", label: "RFC" },
  { value: "password", label: "Contraseña (mín. 8, letras y números)" },
  { value: "fecha", label: "Fecha (YYYY-MM-DD o DD/MM/YYYY)" },
  { value: "url", label: "URL" },
  { value: "ip", label: "Dirección IP" },
  { value: "hex", label: "Color HEX" }
];

const ExpresionesRegularesModal = ({ open, onClose }) => {
  const [tipo, setTipo] = useState("email");
  const [cadena, setCadena] = useState("");
  const [resultados, setResultados] = useState([]);
  const [historial, setHistorial] = useState([]);

  const handleTipoChange = (e) => {
    setTipo(e.target.value);
    setCadena("");
    setResultados([]);
  };

  const validar = () => {
    const regex = patrones[tipo];
    const esValido = regex.test(cadena);
    setResultados([
      { cadena, esValido }
    ]);
    if (esValido) {
      setHistorial([
        ...historial,
        { regex: regex.toString(), cadena }
      ]);
    }
  };

  const borrarHistorial = () => setHistorial([]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-black border-2 border-cyan-700 rounded-2xl shadow-2xl p-8 w-full max-w-lg relative">
        <button
          className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-cyan-400"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-white mb-4 text-center">Validador de Expresiones Regulares</h2>
        <div className="mb-4">
          <label className="block mb-2 text-white font-semibold">Tipo de expresión:</label>
          <select
            id="tipo"
            value={tipo}
            onChange={handleTipoChange}
            className="w-full p-2 rounded bg-white text-black font-semibold"
          >
            {tipos.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
          <div className="mt-2 text-cyan-200" id="ejemplo">{ejemplos[tipo]}</div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-white font-semibold">Cadena a validar:</label>
          <input
            id="cadena"
            value={cadena}
            onChange={e => setCadena(e.target.value)}
            className="w-full p-2 rounded bg-white text-black"
            placeholder="Introduce la cadena"
          />
        </div>
        <button
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 rounded transition mb-4"
          onClick={validar}
        >
          Validar
        </button>
        <ul id="resultados" className="mb-4">
          {resultados.map((res, idx) => (
            <li
              key={idx}
              className={res.esValido ? "text-green-400 font-bold" : "text-red-400 font-bold"}
            >
              {res.cadena}: {res.esValido ? "Válido" : "Inválido"}
            </li>
          ))}
        </ul>
        <div className="mb-2 flex justify-between items-center">
          <span className="text-white font-semibold">Historial:</span>
          <button
            id="borrarHistorial"
            className="text-sm text-white hover:underline"
            onClick={borrarHistorial}
          >
            Borrar historial
          </button>
        </div>
        <ul id="historial" className="max-h-24 overflow-y-auto text-white text-sm list-disc pl-5">
          {historial.map((item, idx) => (
            <li key={idx}>
              Expresión: <span className="font-mono ">{item.regex}</span> | Cadena: <span className="font-mono">{item.cadena}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpresionesRegularesModal;