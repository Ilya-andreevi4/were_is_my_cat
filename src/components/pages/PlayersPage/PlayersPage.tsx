import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useActions } from "../../../services/hooks/actions";
import { useAppSelector } from "../../../services/hooks/redux";
import { IPlayer } from "../../../services/models/IPlayer";
import PlayerInput from "./PlayerInput";

export default function PlayersPage() {
  const [warning, setWarning] = useState<boolean>(false);
  const { addPlayer } = useActions();
  const { players } = useAppSelector((state) => state.gameReducers);

  const addNewPlayer = () => {
    if (players.length === 6) {
      setWarning(true);
      return;
    } else if (players.length > 0) {
      const last = players[players.length - 1];
      last &&
        addPlayer({
          id: last.id + 1,
          name: "Игрок " + (last.id + 2),
          avatar: "./setting.png",
          turn: false,
          points: 0,
        });
    } else {
      addPlayer({
        id: 0,
        name: "Игрок 1",
        avatar: "./setting.png",
        turn: true,
        points: 0,
      });
    }
  };

  useEffect(() => {}, [warning, players]);

  return (
    <div className="flex flex-col justify-between left-0 mx-auto my-auto p-11 top-[5%] h-[50%]">
      <h1 className="mx-auto my-5 text-7xl tracking-tighter font-extrabold font-sans text-orange-100">
        Список игроков
      </h1>

      {warning ? (
        <h1 className="px-4 py-4 font-sans text-3xl text-red-600 font-extrabold w-fit mx-auto mt-2">
          Максимальное количество игроков - 6
        </h1>
      ) : (
        <button
          onClick={addNewPlayer}
          className="px-4 py-4 font-sans text-4xl bg-green-500 text-white font-extrabold w-fit mx-auto mt-2 rounded-lg shadow-xl hover:bg-green-600 hover:shadow-sm"
        >
          Добавить игрока
        </button>
      )}
      <ul className="List-none my-4 mx-auto ">
        {players.map((player: IPlayer, id: number) => {
          return (
            <li
              key={id}
              className="flex justify-center flex-row mx-auto my-4 text-center text-xl font-bold font-sans text-blue-700"
            >
              <PlayerInput p={player} />
            </li>
          );
        })}
      </ul>
      <Link
        to="/GamePage"
        className="px-14 py-4 z-10 font-sans text-4xl bg-orange-500 text-white font-extrabold w-fit mx-auto mt-2 rounded-lg shadow-xl hover:bg-orange-600 hover:shadow-sm"
      >
        Играть
      </Link>

      <div className="fixed bottom-[5%] left-[5%] h-80 w-200 z-0">
        <img src="./gaming_cats.png" className="z-0 h-80 w-200 -scale-x-110 scale-y-110"></img>
      </div>
    </div>
  );
}
