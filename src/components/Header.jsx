import React from "react";

const Header = () => (
  <header className="mb-12">
    <nav className="bg-[#181a2a] bg-opacity-95 shadow-lg">
      <ul className="flex gap-14 list-none justify-center py-6">
        <li className="relative group cursor-pointer text-cyan-300 font-extrabold tracking-widest text-2xl transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_10px_#00fff7]">
          <span className="transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_#00fff7]">
            EQUIPO
          </span>
          <span className="absolute left-1/2 top-full mt-4 -translate-x-1/2 min-w-max px-8 py-6 bg-[#06202b]/90 rounded-2xl shadow-2xl text-cyan-300 font-extrabold text-xl tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-10 drop-shadow-[0_0_20px_#00fff7] text-center">
            ALEXIS JULIAN BALAM BALAM<br />NELFRI JAVIER BAEZ MAZARIEGOS
          </span>
        </li>
        <li className="relative group cursor-pointer text-cyan-300 font-extrabold tracking-widest text-2xl transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_10px_#00fff7]">
          <span className="transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_#00fff7]">
            CARRERA
          </span>
          <span className="absolute left-1/2 top-full mt-4 -translate-x-1/2 min-w-max px-8 py-6 bg-[#06202b]/90 rounded-2xl shadow-2xl text-cyan-300 font-extrabold text-xl tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-10 drop-shadow-[0_0_20px_#00fff7] text-center">
            SISTEMAS COMPUTACIONALES
          </span>
        </li>
        <li className="relative group cursor-pointer text-cyan-300 font-extrabold tracking-widest text-2xl transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_10px_#00fff7]">
          <span className="transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_#00fff7]">
            MATERIA
          </span>
          <span className="absolute left-1/2 top-full mt-4 -translate-x-1/2 min-w-max px-8 py-6 bg-[#06202b]/90 rounded-2xl shadow-2xl text-cyan-300 font-extrabold text-xl tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-10 drop-shadow-[0_0_20px_#00fff7] text-center">
            LENGUAJES Y AUTÓMATAS
          </span>
        </li>
        <li className="relative group cursor-pointer text-cyan-300 font-extrabold tracking-widest text-2xl transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_10px_#00fff7]">
          <span className="transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_#00fff7]">
            MAESTRO
          </span>
          <span className="absolute left-1/2 top-full mt-4 -translate-x-1/2 min-w-max px-8 py-6 bg-[#06202b]/90 rounded-2xl shadow-2xl text-cyan-300 font-extrabold text-xl tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-10 drop-shadow-[0_0_20px_#00fff7] text-center">
            ING. LUIS GILBERTO TEC CETZ
          </span>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;