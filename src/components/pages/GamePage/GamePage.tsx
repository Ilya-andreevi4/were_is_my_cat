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
    <div className="flex flex-col justify-between left-0 mx-auto my-auto top-[5%] h-[50%]">
      <div className="flex text-white justify-center pb-2 font-sans text-3xl font-extrabold mx-auto my-4 bg-gradient-to-br from-green-500 to-green-600 w-96 h-20 fancy-border transition ease-in-out delay-1500 shadow-md hover:shadow-sm ">
        <h2 className="my-auto">{activePlayer?`Ходит ${activePlayer?.name}`:"Найди кота!"}</h2>
      </div>
      <div className="flex flex-row">
        <div className="grid grid-cols-3 md:grid-cols-7 lg:grid-cols-10 gap-4 p-2 mx-1 mb-8 md:p-6 md:mx-6 justify-between items-baseline h-fit w-[80%] bg-gradient-to-br from-amber-600 to-orange-500 rounded-xl">
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
                    className="rounded-md shadow-lg hover:shadow-sm hover:scale-105 cursor-pointer"
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
  );
}

export default GamePage;
