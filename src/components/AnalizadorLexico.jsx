import React, { useState } from "react";

const palabrasReservadas = [
  "abstract","assert","boolean","break","byte","case","catch","char","class","const","continue",
  "default","do","double","else","enum","extends","final","finally","float","for","goto","if",
  "implements","import","instanceof","int","interface","long","native","new","package","private",
  "protected","public","return","short","static","strictfp","super","switch","synchronized","this",
  "throw","throws","transient","try","void","volatile","while"
];

const operadores = [
  "==", "!=", "<=", ">=", "++", "--", "&&", "||", "+=", "-=", "*=", "/=", "%=", "&=", "|=", "^=", "<<=", ">>=", ">>>=",
  "+", "-", "*", "/", "%", "=", "<", ">", "!", "~", "&", "|", "^", "?", ":", "->", "::"
];

const delimitadores = [
  "(", ")", "{", "}", "[", "]", ";", ",", ".", "@"
];

function tokenizar(texto) {
  const regex = new RegExp(
    [
      ...operadores.map(op => op.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")),
      ...delimitadores.map(d => d.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"))
    ].join('|') + '|\\w+|\\d+|"(?:[^"\\\\]|\\\\.)*"|\'(?:[^\'\\\\]|\\\\.)*\'', 'g'
  );
  return texto.match(regex) || [];
}

function analizarTokens(tokens) {
  return tokens.map((token, i) => {
    let tipo = '';
    let patron = '';

    if (palabrasReservadas.includes(token)) {
      tipo = 'Palabra reservada';
      patron = 'Palabra reservada';
    } else if (/^"(?:[^"\\]|\\.)*"$/.test(token) || /^'(?:[^'\\]|\\.)*'$/.test(token)) {
      tipo = 'Cadena';
      patron = '/^"(?:[^"\\\\]|\\\\.)*"$/ o /^\'(?:[^\'\\\\]|\\\\.)*\'$/';
    } else if (/^\d+$/.test(token)) {
      tipo = 'Número';
      patron = '/^\\d+$/';
    } else if (operadores.includes(token)) {
      tipo = 'Operador';
      patron = 'Operador';
    } else if (delimitadores.includes(token)) {
      tipo = 'Delimitador';
      patron = 'Delimitador';
    } else if (/^[a-zA-Z_]\w*$/.test(token)) {
      tipo = 'Identificador';
      patron = '/^[a-zA-Z_]\\w*$/';
    } else {
      tipo = 'Desconocido';
      patron = '';
    }

    return {
      numero: i + 1,
      lexema: token,
      patron,
      tipo
    };
  });
}

const AnalizadorLexico = () => {
  const [input, setInput] = useState("");
  const [tabla, setTabla] = useState([]);

  const analizar = () => {
    const tokens = tokenizar(input);
    setTabla(analizarTokens(tokens));
  };

  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-black border-2 border-cyan-700 rounded-2xl shadow-2xl p-8 w-full max-w-3xl mx-auto mt-12 mb-8">
      <h2 className="text-2xl font-bold text-cyan-300 mb-6 text-center">Analizador Léxico</h2>
      <textarea
        id="inputText"
        value={input}
        onChange={e => setInput(e.target.value)}
        className="w-full h-32 p-3 rounded bg-white text-black mb-4 resize-none"
        placeholder="Escribe aquí el código Java a analizar..."
      />
      <div className="flex gap-4 mb-6">
        <button
          onClick={analizar}
          className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 rounded transition border-2 border-cyan-400"
        >
          Analizar
        </button>
        <button
          onClick={() => setTabla([])}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded transition border-2 border-red-400"
        >
          Borrar
        </button>
      </div>
      {tabla.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-[#1a1833]/80 rounded-xl text-white">
            <thead>
              <tr>
                <th className="px-3 py-2 border-b border-cyan-700">Número</th>
                <th className="px-3 py-2 border-b border-cyan-700">Lexema</th>
                <th className="px-3 py-2 border-b border-cyan-700">Patrón Regex</th>
                <th className="px-3 py-2 border-b border-cyan-700">Tipo de Token</th>
              </tr>
            </thead>
            <tbody>
              {tabla.map((fila, idx) => (
                <tr key={idx} className="even:bg-[#23244a]/60">
                  <td className="px-3 py-1 text-center">{fila.numero}</td>
                  <td className="px-3 py-1 text-center">{fila.lexema}</td>
                  <td className="px-3 py-1 text-center font-mono">{fila.patron}</td>
                  <td className="px-3 py-1 text-center">{fila.tipo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AnalizadorLexico;