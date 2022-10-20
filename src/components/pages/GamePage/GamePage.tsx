import { useEffect, useMemo, useState } from "react";
import { useActions } from "../../../services/hooks/actions";
import { useAppSelector } from "../../../services/hooks/redux";
import { ICard } from "../../../services/models/ICard";
import { IPlayer } from "../../../services/models/IPlayer";
import Dices from "./Dices";

function GamePage() {
  const { cards, players } = useAppSelector((state) => state.gameReducers);
  const { layingCards, openCard } = useActions();
  const [activePlayer, setActivePlayer] = useState<IPlayer>();

  useEffect(() => {
    setActivePlayer(players.find((p) => p.turn));
  }, [activePlayer]);
  useEffect(() => {
    layingCards();
  }, []);

  return (
    <div className="bg-gradient-to-tr from-amber-200 to-orange-200 bg-orange-200 h-fit w-screen min-h-screen">
    <div className="flex flex-col justify-between left-0 mx-auto my-auto top-[5%] h-[50%]">
      <div className="flex text-white justify-center text-center pb-1 px-2 font-sans text-xl font-extrabold mx-auto mt-4 bg-gradient-to-tr from-orange-400 to-amber-500 bg-orange-400 w-fit h-10 fancy-border transition ease-in-out delay-1500 shadow-md hover:shadow-sm ">
        <h2 className="my-auto">{activePlayer?`Ходит ${activePlayer?.name}`:"Найди кота!"}</h2>
      </div>
      <div className="flex flex-row">
      {/* bg-gradient-to-br from-amber-600 to-orange-500 rounded-xl */}
        <div className="grid grid-cols-3 md:grid-cols-7 lg:grid-cols-10 gap-4 p-2 mx-1 md:p-6 md:mx-6 justify-between items-baseline h-fit w-[80%] ">
          {cards.map((card) => {
            return (
              <button
                onClick={() => openCard(card)}
                key={card.id}
                className="h-[2%] min-w-[3vh] w-fit mt-2 mb-2"
              >
                {!card.completed && (
                  <img
                    src={!card.opened ? card.face : card.back}
                    alt="Карта кота"
                    className="rounded-md border-4 border-blue-900 shadow-lg hover:shadow-sm hover:scale-105 cursor-pointer"
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col w-fit h-fit">
          <div className="grid grid-cols-1 gap-0 mx-auto my-4 justify-start h-fit w-fit ">
            <Dices />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default GamePage;
