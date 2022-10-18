import { IDices } from "./IDices";

export const DicesInitial: IDices[] = [
  {
    id: 1,
    postureDice: {
      url1: "./dices/dice_sit.png",
      url2: "./dices/dice_stand.png",
      url3: "./dices/dice_rest.png",
    },
    mainColorDice: { url1: "", url2: "", url3: "" },
    secColorDice: { url1: "", url2: "", url3: "" },
  },
  {
    id: 2,
    postureDice: { url1: "", url2: "", url3: "" },
    mainColorDice: {
      url1: "./dices/dice_white.png",
      url2: "./dices/dice_gray.png",
      url3: "./dices/dice_ginger.png",
    },
    secColorDice: { url1: "", url2: "", url3: "" },
  },
  {
    id: 3,
    postureDice: { url1: "", url2: "", url3: "" },
    mainColorDice: { url1: "", url2: "", url3: "" },
    secColorDice: {
      url1: "./dices/dice_clear.png",
      url2: "./dices/dice_spotted.png",
      url3: "./dices/dice_striped.png",
    },
  },
];
