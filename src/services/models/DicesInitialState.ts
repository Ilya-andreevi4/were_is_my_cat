import { IDices } from "./IDices";

export const DicesInitial: IDices[] = [
  {
    postureDice: [
      { url: "./dices/dice_sit.png" },
      { url: "./dices/dice_stand.png" },
      { url: "./dices/dice_rest.png" },
    ],
    mainColorDice: [],
    secColorDice: [],
  },
  {
    postureDice: [],
    mainColorDice: [
      { url: "./dices/dice_white.png" },
      { url: "./dices/dice_gray.png" },
      { url: "./dices/dice_ginger.png" },
    ],
    secColorDice: [],
  },
  {
    postureDice: [],
    mainColorDice: [],
    secColorDice: [
      { url: "./dices/dice_clear.png" },
      { url: "./dices/dice_spotted.png" },
      { url: "./dices/dice_striped.png" },
    ],
  },
];
