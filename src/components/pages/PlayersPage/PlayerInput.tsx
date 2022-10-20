import React, { FC, useEffect, useState } from "react";
import { useActions } from "../../../services/hooks/actions";
import { useAppSelector } from "../../../services/hooks/redux";
import { IPlayer } from "../../../services/models/IPlayer";

interface PlayerInputProps {
  p: IPlayer;
}

const PlayerInput: FC<PlayerInputProps> = ({ p }) => {
  const { removePlayer, changePlayer } = useActions();
  const [text, setText] = useState("");
  const deletePlayer = (p: IPlayer) => {
    removePlayer(p);
  };
  const handleChangePlayer = (
    e: React.ChangeEvent<HTMLInputElement>,
    p: IPlayer
  ) => {
    const newPlayer: IPlayer = {
      id: p.id,
      name: e.target.value,
      avatar: p.avatar,
      turn: p.turn,
      points: p.points,
    };
    changePlayer(newPlayer);
  };

  return (
    <>
      <h2 className="mr-3 text-2xl">{p.id + 1}</h2>
      <input
        type="text"
        id={JSON.stringify(p.id)}
        onChange={(e) => handleChangePlayer(e, p)}
        value={p.name}
        placeholder={JSON.stringify("Игрок " + (p.id + 1))}
        className="px-2 py-0 text-lg w-52 rounded-md border-blue-700 border-2"
      />
      <button
        onClick={() => deletePlayer(p)}
        className="px-2 py-0 font-sans text-lg bg-red-500 text-white font-bold w-fit ml-2 rounded-md shadow-xl hover:bg-red-600 hover:shadow-sm"
      >
        Удалить
      </button>
    </>
  );
};
export default PlayerInput;
