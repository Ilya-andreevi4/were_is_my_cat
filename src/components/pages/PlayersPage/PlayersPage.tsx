import React from "react";
import { Link } from "react-router-dom";
import { IPlayer } from "../../../services/models/IPlayer";

export default function PlayersPage() {
  const players: IPlayer[] = [
    {
      name: "1 Игрок",
      avatar: "./setting.png",
      turn: true,
      points: 0,
    },
    {
      name: "2 Игрок",
      avatar: "./setting.png",
      turn: false,
      points: 0,
    },
    {
      name: "3 Игрок",
      avatar: "./setting.png",
      turn: false,
      points: 0,
    },
    {
      name: "4 Игрок",
      avatar: "./setting.png",
      turn: false,
      points: 0,
    },
  ];

  return (
    <>
      <div className="fixed left-[65%] -mt-56 mr-min-8 mx-auto w-80 z-0">
        <img src="./ginger_cat.png" alt="Settings" className="block z-0" />
      </div>
      <div className="flex flex-col justify-between left-0 mx-auto my-auto p-11 top-[5%] h-[50%]">
        <h1 className="mx-auto my-5 text-7xl tracking-tighter font-extrabold font-sans text-orange-100">
          Список игроков
        </h1>
        {players.map((player, idx) => {
          return (
            <div key={idx} className="mx-auto my-2 text-center text-xl font-bold font-sans text-blue-700">
              <input value={player.name}/>
            </div>
          );
        })}

        <Link
          to="/GamePage"
          className="px-14 py-4 font-sans text-4xl bg-orange-500 text-white font-extrabold w-fit mx-auto mt-2 rounded-lg shadow-xl hover:bg-orange-600 hover:shadow-sm"
        >
          Играть
        </Link>
        <div className="fixed top-[60%] left-10 h-20 w-fit z-50">
          <img src="./gray_cat.png" className="z-50"></img>
        </div>
      </div>
    </>
  );
}
