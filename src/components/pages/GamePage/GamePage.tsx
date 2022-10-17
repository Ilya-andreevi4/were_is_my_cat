import { useEffect, useMemo, useState } from "react";
import { useActions } from "../../../services/hooks/actions";
import { useAppSelector } from "../../../services/hooks/redux";
import { ICard } from "../../../services/models/ICard";
import { IPlayer } from "../../../services/models/IPlayer";

function GamePage() {
  const { cards } = useAppSelector((state) => state.cardsReducers);

  const randomize = () => {
    const getData = Object.values(cards);
    const cardsData = getData;
    const cardData = cardsData.sort(() => Math.random() - 0.5);
    return cardData;
  };

  const cardsData = useMemo(() => randomize(), []);
  const [activePlayer, setActivePlayer] = useState<IPlayer>();
  const { layingCards, changeCard, refreshCards } = useActions();
  const { players } = useAppSelector((state) => state.playersReducers);

  useEffect(() => {
    setActivePlayer(players.find((p) => p.turn));
  }, []);

  return (
    <div className="flex flex-col justify-between left-0 mx-auto my-auto top-[5%] h-[50%]">
      <div className="flex text-white justify-center pb-2 font-sans text-3xl font-extrabold mx-auto mt-4 bg-gradient-to-br from-green-500 to-green-600 w-96 h-20 fancy-border transition ease-in-out delay-1500 shadow-md hover:shadow-sm ">
        <h2 className="my-auto">Ходит {activePlayer?.name}</h2>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-10 gap-4 p-6 mx-auto mt-4 justify-between items-baseline h-fit w-[80%] bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl">
        {cardsData.map((card) => {
          return (
            <div key={card.id} className="h-[2%] w-fit mt-2 mb-2">
              {!card.completed && (
                <img
                  src={!card.opened ? card.face : card.back}
                  alt="Карта кота"
                  className="rounded-md shadow-lg hover:shadow-sm hover:scale-105 cursor-pointer"
                />
              )}
            </div>
          );
        })}
        <div></div>
      </div>
    </div>
  );
}

export default GamePage;
