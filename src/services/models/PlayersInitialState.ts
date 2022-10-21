import { isPending } from "@reduxjs/toolkit";
import { IPlayer } from "./IPlayer";

export const PlayerInitialState:IPlayer[]= [{
  id:0,
  name: "Игрок 1",
  avatar: "",
  turn: true,
  points: 0,
}]