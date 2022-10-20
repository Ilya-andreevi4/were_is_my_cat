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
    if (players.length > 5) {
      setWarning(true);
      return;
    } else if (players.length > 0) {
      setWarning(false);
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
      setWarning(false);
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
    <>
      <div className="grid grid-cols-1 gap-10 place-content-center z-10 left-0 mx-auto p-5 h-full max-h-full">
        <h1 className="mx-auto text-4xl tracking-tighter font-extrabold font-sans text-white">
          Список игроков
        </h1>
        <button
          onClick={addNewPlayer}
          className="px-2 py-1 z-10 font-sans text-xl bg-green-500 text-white font-bold w-fit mx-auto rounded-lg shadow-xl hover:bg-green-600 hover:shadow-sm"
        >
          Добавить игрока
        </button>

        <ul className="List-none mx-auto z-10">
          {players.map((player: IPlayer, id: number) => {
            return (
              <li
                key={id}
                className="flex z-10 justify-center flex-row mx-auto my-4 text-center text-xl font-bold font-sans text-blue-700"
              >
                <PlayerInput p={player} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="grid grid-cols-1">
        {warning && (
          <h1 className="px-4 py-0 z-10 font-sans text-xl text-red-600 font-extrabold w-fit mx-auto">
            Максимальное количество игроков - 6
          </h1>
        )}
        <Link
          to="/GamePage"
          className="px-8 py-1 z-10 font-sans text-3xl bg-orange-500 text-white font-extrabold w-fit mx-auto rounded-lg shadow-xl hover:bg-orange-600 hover:shadow-sm"
        >
          Играть
        </Link>
      </div>

      <img
        src="./gaming_cats.png"
        className="z-0 w-100 -scale-x-110 scale-y-110 absolute bottom-0 right-1"
      />
    </>
  );
}
