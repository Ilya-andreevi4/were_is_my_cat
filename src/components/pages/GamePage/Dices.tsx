import { useEffect, useState } from "react";
import { useActions } from "../../../services/hooks/actions";
import { useAppSelector } from "../../../services/hooks/redux";
import diceDescription from "./DiceDescription";
import tippy from "tippy.js";

function Dices() {
  const { players, activeDices } = useAppSelector(
    (state) => state.gameReducers
  );
  const { dicesRoll, layingDices } = useActions();
  const [diceArr, setDiceArr] = useState([
    activeDices.mainColorDice,
    activeDices.postureDice,
    activeDices.secColorDice,
  ]);

  const handleRoll = () => {
    Object.values(diceArr).forEach((d) => {
      const diceText = d?.replace(/[^a-zа-яё]/gi, "");
      const dice = document.querySelector("#" + diceText);
      const popText = diceDescription(d);
      if (popText && dice) {
        const instanse = tippy(dice, {
          content: popText,
          theme: "material",
          placement: "left",
          role: "tooltip",
          arrow: true,
          duration: 200,
          trigger: "hover",
        });
        instanse.destroy();
        instanse.unmount();
      }
    });
    dicesRoll();
  };
  const setPopper = () => {
    if (diceArr[1] !== "./axi_logo.png") {
      Object.values(diceArr).forEach((d) => {
        const diceText = d?.replace(/[^a-zа-яё]/gi, "");
        const dice = document.querySelector("#" + diceText);
        const popText = diceDescription(d);
        if (popText && dice) {
          const instanse = tippy(dice, {
            theme: "material",
            content: popText,
            placement: "left",
            role: "tooltip",
            arrow: true,
            duration: 200,
            trigger: "hover",
          });
          instanse.show();
        }
      });
    }
  };

  console.log("dices render");

  useEffect(() => {
    if (activeDices.mainColorDice) {
      setDiceArr(
        [
          activeDices.mainColorDice,
          activeDices.postureDice,
          activeDices.secColorDice,
        ].sort(() => Math.random() - 0.5)
      );
    } else return;
  }, [activeDices]);

  useEffect(() => {
    layingDices();
  }, []);

  return (
    <>
      {diceArr &&
        Object.values(diceArr).map((d, idx) => {
          return (
            <div key={idx}>
              <div
                key={idx}
                id={d.replace(/[^a-zа-яё]/gi, "")}
                className={
                  "w-fit h-fit mb-3 mx-auto border-2 border-y-cyan-700 border-x-blue-800 rounded-md bottom-1 bg-gradient-to-tr from-blue-300 to-cyan-400 bg-blue-500 shadow-sm shadow-gray-800 cursor-pointer hover:shadow-md hover:shadow-gray-800 hover:scale-105"
                }
                onClick={() => setPopper()}
              >
                <img src={d} alt="" className="w-20 h-20 lg:w-24 lg:h-24" />
              </div>
            </div>
          );
        })}

      <button
        onClick={() => handleRoll()}
        className="px-3 pt-1 pb-2 z-30 font-sans text-lg md:text-xl  bg-gradient-to-tr from-orange-400 to-orange-500 bg-orange-400 text-white font-bold w-fit mx-auto my-2 rounded-xl shadow-sm shadow-slate-700 hover:shadow-slate-700 hover:shadow-md hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-none"
      >
        Сходить
      </button>
      <ul
        className={
          players.length
            ? "p-1 mt-2 rounded-md bg-orange-200 shadow-sm"
            : "hidden"
        }
      >
        {players.map((p) => {
          return (
            <li
              key={p.id}
              className="flex z-10 justify-center flex-row mx-auto my-4 text-center text-sm font-bold font-sans text-stone-900"
            >
              {p.name} <br />
              баллов: {p.points}
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Dices;
