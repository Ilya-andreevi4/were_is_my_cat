import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useActions } from "../../../services/hooks/actions";
import { useAppSelector } from "../../../services/hooks/redux";
import { IPlayer } from "../../../services/models/IPlayer";

export default function PlayersPage() {
  const { addPlayer, removePlayer, changePlayer } = useActions();
  const { players } = useAppSelector((state) => state.gameReducers);
  const [warning, setWarning] = useState<boolean>(false);
  const [text, setText] = useState("");
  const [activeText, setActiveText] = useState("");

  const deletePlayer = (p: IPlayer) => {
    removePlayer(p);
  };
  const handleChangePlayer = (
    e: React.ChangeEvent<HTMLInputElement>,
    p: IPlayer
  ) => {
    setText(e.target.value);
p.name=text;
    changePlayer(p);
  };

  const addNewPlayer = () => {
    if (players.length === 6) {
      setWarning(true);
      return;
    } else if (players.length > 0) {
      const last = players[players.length - 1];
      last &&
        addPlayer({
          id: last.id + 1,
          name: "Player "+ (last.id + 1),
          avatar: "./setting.png",
          turn: false,
          points: 0,
        });
    } else {
      addPlayer({
        id: 0,
        name: "Player",
        avatar: "./setting.png",
        turn: false,
        points: 0,
      });
    }
  };
  const handleFocus = (p: IPlayer, e: React.ChangeEvent<HTMLInputElement>, id:number) => {

  };

  useEffect(() => {}, [warning, players]);

  return (
    <>
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
                <h2 className="mr-4 text-4xl">{player.id + 1}</h2>
                <input
                  type="text"
                  id={JSON.stringify((player.id))}
                  onFocus={(e) => handleFocus(player, e, player.id)}
                  onChange={(e) => handleChangePlayer(e, player)}
                  value={text}
                  placeholder= {JSON.stringify("Игрок "+(player.id+1))}
                  className="px-3 py-1 text-xl"
                />
                <button
                  onClick={() => deletePlayer(player)}
                  className="px-4 py-2 font-sans text-lg bg-red-500 text-white font-bold w-fit ml-4 rounded-lg shadow-xl hover:bg-red-600 hover:shadow-sm"
                >
                  Удалить
                </button>
              </li>
            );
          })}
        </ul>
        <Link
          to="/GamePage"
          className="px-14 py-4 font-sans text-4xl bg-orange-500 text-white font-extrabold w-fit mx-auto mt-2 rounded-lg shadow-xl hover:bg-orange-600 hover:shadow-sm"
        >
          Играть
        </Link>
      </div>
    </>
  );
}
