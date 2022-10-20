import { useEffect, useState } from "react";
import { useActions } from "../../../services/hooks/actions";
import { useAppSelector } from "../../../services/hooks/redux";
import diceDescription from "./diceDescription";

const Dices = () => {
  const { activeDices } = useAppSelector((state) => state.gameReducers);
  const { dicesRoll, layingDices } = useActions();
  const [diceArr, setDiceArr] = useState([
    activeDices.mainColorDice,
    activeDices.postureDice,
    activeDices.secColorDice,
  ]);

  useEffect(() => {
    setDiceArr([
      activeDices.mainColorDice,
      activeDices.postureDice,
      activeDices.secColorDice,
    ].sort(() => Math.random() - 0.5));
  }, [activeDices]);

  useEffect(() => {
    layingDices();
  }, []);

  return (
    <>
      {Object.values(diceArr)
        .map((d, idx) => {
          return (
            <div
              key={idx}
              className="w-fit h-fit mb-3 border-2 border-y-cyan-700 border-x-blue-800 rounded-md bottom-1 bg-gradient-to-tr from-blue-300 to-cyan-400 bg-blue-500 shadow-lg hover:shadow-sm hover:scale-105 cursor-pointer"
            >
              <img
                src={d}
                alt=""
                className="w-20 h-20 lg:w-24 lg:h-24"
              />
            </div>
          );
        })}

      <button
        onClick={() => dicesRoll()}
        className="px-1 pb-1 z-30 font-sans text-lg md:text-2xl  bg-gradient-to-tr from-orange-400 to-orange-500 bg-orande-400  border-y-cyan-700 border-x-blue-800 border-2 text-white font-extrabold w-fit mx-auto mt-2 rounded-xl shadow-sm hover:shadow-xl hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-none"
      >
        Сходить
      </button>
    </>
  );
};
export default Dices;
