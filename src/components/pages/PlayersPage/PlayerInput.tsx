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
    setText(e.target.value);
    p.name = text;
    changePlayer(p);
  };

  return (
    <>
      <h2 className="mr-4 text-4xl">{p.id + 1}</h2>
      <input
        type="text"
        id={JSON.stringify(p.id)}
        onChange={(e) => handleChangePlayer(e, p)}
        value={text}
        placeholder={JSON.stringify("Игрок " + (p.id + 1))}
        className="px-3 py-1 text-xl"
      />
      <button
        onClick={() => deletePlayer(p)}
        className="px-4 py-2 font-sans text-lg bg-red-500 text-white font-bold w-fit ml-4 rounded-lg shadow-xl hover:bg-red-600 hover:shadow-sm"
      >
        Удалить
      </button>
    </>
  );
};
export default PlayerInput;
