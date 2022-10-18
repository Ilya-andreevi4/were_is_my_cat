import { useEffect, useMemo, useState } from "react";
import { useActions } from "../../../services/hooks/actions";
import { useAppSelector } from "../../../services/hooks/redux";
import { ICard } from "../../../services/models/ICard";
import { IDices } from "../../../services/models/IDices";
import { IPlayer } from "../../../services/models/IPlayer";

function GamePage() {
  const { cards, players, dices } = useAppSelector((state) => state.gameReducers);
  const [activePlayer, setActivePlayer] = useState<IPlayer>();
  const { layingCards, changeCard, refreshCards } = useActions();

  const randomizeCards = () => {
    const cardData = Object.values(cards).sort(() => Math.random() - 0.5);
    return cardData;
  };
  const cardsData = useMemo(() => randomizeCards(), []);

  const randomizeDice = (dice: IDices) => {
    const rand = Math.floor(Math.random() * 3);
    if (dice.mainColorDice[1]) {
      const rMCDice = dice.mainColorDice[rand];
      return rMCDice.url;
    } else if (dice.postureDice[1]) {
      const rPosDice = dice.postureDice[rand];
      return rPosDice.url;
    } else {
      const rSCDice = dice.secColorDice[rand];
      return rSCDice.url;
    }
  };

  useEffect(() => {
    setActivePlayer(players.find((p) => p.turn));
  }, []);

  return (
    <div className="flex flex-col justify-between left-0 mx-auto my-auto top-[5%] h-[50%]">
      <div className="flex text-white justify-center pb-2 font-sans text-3xl font-extrabold mx-auto my-4 bg-gradient-to-br from-green-500 to-green-600 w-96 h-20 fancy-border transition ease-in-out delay-1500 shadow-md hover:shadow-sm ">
        <h2 className="my-auto">Ходит {activePlayer?.name}</h2>
      </div>
      <div className="flex flex-row">
        <div className="grid grid-cols-3 md:grid-cols-7 lg:grid-cols-10 gap-4 p-2 mx-1 mb-2 md:p-6 md:mx-6  justify-between items-baseline h-fit w-[80%] bg-gradient-to-br from-amber-600 to-orange-500 rounded-xl">
          {cardsData.map((card) => {
            return (
              <div key={card.id} className="h-[2%] min-w-[3vh] w-fit mt-2 mb-2">
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
        </div>

        <div className="flex flex-col w-fit h-fit">
          <div className="grid grid-cols-1 gap-0 mx-auto my-4 justify-start h-fit w-fit ">
            {dices.map((dice, idx) => {
              return (
                <div key={idx} className="w-fit h-fit mb-4 border-collapse bottom-1 bg-teal-500">
                  <img
                    src={randomizeDice(dice)}
                    alt="Кубик"
                    className="w-20 h-20 lg:w-32 lg:h-32 rounded-md shadow-lg hover:shadow-sm hover:scale-105 cursor-pointer"
                  />
                </div>
              );
            })}
            {/* <div className="w-fit h-fit mb-4 border-collapse bottom-1 bg-teal-500">
              <img
                src="./dices/dice_sit.png"
                alt="Кубик"
                className="w-20 h-20 lg:w-32 lg:h-32 rounded-md shadow-lg hover:shadow-sm hover:scale-105 cursor-pointer"
              />
            </div>
            <div className="w-fit h-fit mb-4 border-collapse bottom-1 bg-teal-500">
              <img
                src="./dices/dice_ginger.png"
                alt="Кубик"
                className="w-20 h-20 lg:w-32 lg:h-32 rounded-md shadow-lg hover:shadow-sm hover:scale-105 cursor-pointer "
              />
            </div>
            <div className="w-fit h-fit mb-4 border-collapse bottom-1 bg-teal-500">
              <img
                src="./dices/dice_clear.png"
                alt="Кубик"
                className="w-20 h-20 lg:w-32 lg:h-32 rounded-md shadow-lg hover:shadow-sm hover:scale-105 cursor-pointer"
              />
            </div> */}
          </div>
          <button className="px-2 py-2 z-50 font-sans text-xl md:text-3xl bg-orange-500 border-l-red-50 border-2 text-white font-extrabold w-fit mx-auto mt-2 rounded-xl shadow-sm hover:bg-amber-500 hover:shadow-xl hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:bg-amber-600 active:shadow-none">
            Сходить
          </button>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
