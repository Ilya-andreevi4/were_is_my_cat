import React, { useState } from "react";
import { Link } from "react-router-dom";
import Settings from "../Settings/Settings";

export default function Header() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <nav className="flex justify-between items-center py-2 px-5 shadow-lg bg-blue-500 text-white h-fit w-full">
      <h1 className="font-bold text-2xl font-sans">Где мой кот?</h1>

      <Settings active={modalActive} setActive={setModalActive}>
        <h1>Настройки</h1>
        <Link
          to="./"
          onClick={() => setModalActive(false)}
          className="px-4 py-2 bg-red-500 text-white w-fit mt-2 rounded-md shadow-xl hover:bg-red-600 hover:shadow-sm"
        >Выход
        </Link>
      </Settings>

      <button
        className="h-14 w-14 p-2 bg-orange-600 border-slate-100 border-4 shadow-black shadow-3xl z-10 hover:shadow-sm hover:scale-105 rounded-3xl inline-block"
        onClick={() => setModalActive(true)}
      >
        <img src="./setting.svg" alt="Settings" className="block z-10" />
      </button>
    </nav>
  );
}
