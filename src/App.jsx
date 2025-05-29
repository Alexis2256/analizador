import React, { useState } from "react";
import Header from "./components/Header";
import TecnologiasUsadas from "./components/TecnologiasUsadas";
import ExpresionesRegularesModal from "./components/ExpresionesRegularesModal";
import AnalizadorLexico from "./components/AnalizadorLexico";

function App() {
  const [view, setView] = useState("home");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-blue-900 to-blue-600">
      <Header />
      <main className="flex-1 flex items-center justify-center mt-[-7vh]">
        {view === "home" && (
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-black border border-blue-700 p-10 rounded-2xl text-center shadow-2xl mt-24">
            <h2 className="text-3xl mb-8 font-bold text-white drop-shadow-lg">
              Selecciona una opción
            </h2>
            <div className="flex justify-center gap-8">
              <button
                className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-8 py-3 rounded-xl shadow-lg font-semibold text-lg transition transform hover:scale-105"
                onClick={() => setModalOpen(true)}
              >
                Expresiones Regulares
              </button>
              <button
                className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-8 py-3 rounded-xl shadow-lg font-semibold text-lg transition transform hover:scale-105"
                onClick={() => setView("analizador")}
              >
                Analizador Léxico
              </button>
            </div>
          </div>
        )}
        {view === "expresiones" && (
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-black border border-blue-700 p-10 rounded-2xl text-center shadow-2xl">
            <h2 className="text-3xl mb-6 font-bold text-white drop-shadow-lg">
              Expresiones Regulares
            </h2>
            <p className="mb-6 text-blue-100">
              Aquí va el contenido de Expresiones Regulares.
            </p>
            <button
              className="mt-4 bg-gradient-to-r from-gray-700 to-blue-700 hover:from-gray-800 hover:to-blue-800 text-white px-6 py-2 rounded-xl shadow font-semibold transition"
              onClick={() => setView("home")}
            >
              Volver
            </button>
          </div>
        )}
        {view === "analizador" && (
          <div className="w-full flex flex-col items-center">
            <AnalizadorLexico />
            <button
              className="mt-6 bg-gradient-to-r from-gray-700 to-blue-700 hover:from-gray-800 hover:to-blue-800 text-white px-6 py-2 rounded-xl shadow font-semibold transition"
              onClick={() => setView("home")}
            >
              Volver
            </button>
          </div>
        )}
        <ExpresionesRegularesModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </main>
      <TecnologiasUsadas />
    </div>
  );
}

export default App;