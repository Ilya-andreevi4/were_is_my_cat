import { useEffect, useState } from "react";
import { useActions } from "../../../services/hooks/actions";
import { useAppSelector } from "../../../services/hooks/redux";
import { IPlayer } from "../../../services/models/IPlayer";

function GamePage() {
  const [activePlayer, setActivePlayer] = useState<IPlayer>();
  const { changeCard, refreshCards } = useActions();
  const { players } = useAppSelector((state) => state.playersReducers);
  const { cards } = useAppSelector((state) => state.cardsReducers);

  useEffect(() => {
    setActivePlayer(players.find(p => p.turn))
  }, []);

  return (
    <div className="flex flex-col justify-between left-0 mx-auto my-auto top-[5%] h-[50%]">
      <div className="flex text-white justify-center pb-2 font-sans text-3xl font-extrabold mx-auto mt-4 bg-orange-500 w-96 h-20 fancy-border shadow-md hover:shadow-sm">
        <h2 className="my-auto">Ходит {activePlayer?.name}</h2>
      </div>

      <div className="flex flex-row justify-between">
<div> </div>
<div></div>
      </div>
    </div>
  );
}

export default GamePage;
