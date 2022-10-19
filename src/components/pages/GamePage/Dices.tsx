import { useEffect, useState } from "react";
import { useActions } from "../../../services/hooks/actions";
import { useAppSelector } from "../../../services/hooks/redux";

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
    ]);
  }, [activeDices]);

  useEffect(() => {
    layingDices();
  }, []);

  return (
    <>
      {Object.values(diceArr)
        .sort(() => Math.random() - 0.5)
        .map((d, idx) => {
          return (
            <div
              key={idx}
              className="w-fit h-fit mb-4 border-2 rounded-md bottom-1 bg-teal-500 shadow-lg hover:shadow-sm hover:scale-105 cursor-pointer"
            >
              <img
                src={d}
                alt=""
                className="w-20 h-20 lg:w-32 lg:h-32"
              />
            </div>
          );
        })}

      <button
        onClick={() => dicesRoll()}
        className="px-2 py-2 z-50 font-sans text-xl md:text-3xl bg-orange-500 border-l-red-50 border-2 text-white font-extrabold w-fit mx-auto mt-2 rounded-xl shadow-sm hover:bg-amber-500 hover:shadow-xl hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:bg-amber-600 active:shadow-none"
      >
        Сходить
      </button>
    </>
  );
};
export default Dices;
