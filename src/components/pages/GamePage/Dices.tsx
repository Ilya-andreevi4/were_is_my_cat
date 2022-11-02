import { createPopper } from "@popperjs/core";
import { memo, useEffect, useState } from "react";
import { useActions } from "../../../services/hooks/actions";
import { useAppSelector } from "../../../services/hooks/redux";
import diceDescription from "./DiceDescription";

function Dices() {
  const { players, activeDices } = useAppSelector(
    (state) => state.gameReducers
  );
  const { dicesRoll, layingDices } = useActions();
  const [openPop, setOpenPop] = useState(false);
  const [diceArr, setDiceArr] = useState([
    activeDices.mainColorDice,
    activeDices.postureDice,
    activeDices.secColorDice,
  ]);
  const setPopper = () => {
    Object.values(diceArr).forEach((d) => {
      const diceText = d?.replace(/[^a-zа-яё]/gi, "");
      const dice = document.querySelector("#" + diceText);
      const popText = diceDescription(d);
      if (popText) {
        const popper: HTMLElement | null = document.querySelector(
          "#" + popText.replace(/[^a-zа-яё]/gi, "")
        );
        dice &&
          popper &&
          createPopper(dice, popper, {
            placement: "left",
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, 8],
                },
              },
            ],
          });
      }
    });
  };
  const handlePopOpen = () => {
    setOpenPop(!openPop);
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
      setPopper();
    } else return;
  }, [activeDices]);

  useEffect(() => {
    layingDices();
  }, []);

  return (
    <>
      <h2 className="text-md font-extrabold mb-2 font-sans text-blue-700 text-center mx-auto">
        Найди кота
        <br /> по чертам
      </h2>
      {diceArr &&
        Object.values(diceArr).map((d, idx) => {
          return (
            <div key={idx}>
              <div
                key={idx}
                id={d.replace(/[^a-zа-яё]/gi, "")}
                onClick={() => handlePopOpen()}
                className={
                  openPop
                    ? "w-fit h-fit mb-3 mx-auto border-2 border-y-cyan-700 border-x-blue-800 rounded-md bottom-1 bg-gradient-to-tr from-blue-300 to-cyan-400 bg-blue-500 shadow-md shadow-gray-800 cursor-pointer scale-105 brightness-105"
                    : "w-fit h-fit mb-3 mx-auto border-2 border-y-cyan-700 border-x-blue-800 rounded-md bottom-1 bg-gradient-to-tr from-blue-300 to-cyan-400 bg-blue-500 shadow-sm shadow-gray-800 cursor-pointer hover:shadow-md hover:shadow-gray-800 hover:scale-105"
                }
              >
                <img src={d} alt="" className="w-20 h-20 lg:w-24 lg:h-24" />
              </div>
              <div
                id={diceDescription(d)?.replace(/[^a-zа-яё]/gi, "")}
                className={
                  openPop && d !== "./axi_logo.png"
                    ? "popover max-w-[200px]"
                    : "hidden"
                }
                role="tooltip"
              >
                {diceDescription(d)}
                <div id="arrow" className="" data-popper-arrow></div>
              </div>
            </div>
          );
        })}

      <button
        onClick={() => dicesRoll()}
        className="px-3 pt-1 pb-2 z-30 font-sans text-lg md:text-xl  bg-gradient-to-tr from-orange-400 to-orange-500 bg-orange-400 text-white font-extrabold w-fit mx-auto my-2 rounded-xl shadow-sm shadow-slate-700 hover:shadow-slate-700 hover:shadow-md hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-none"
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
};
export default memo(Dices);
