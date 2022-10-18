import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlayer } from "../../models/IPlayer";
import { ICard } from "../../models/ICard";
import { CardsInitial } from "../../models/CardsInitialState";
import { IDices } from "../../models/IDices";
import { DicesInitial } from "../../models/DicesInitialState";

const LS_PLRS_KEY = "react_plrs_keys";
const LS_CRDS_KEY = "react_crds_keys";
const LS_DCS_KEY = "react_dcs_keys";

interface GameState {
  players: IPlayer[];
  cards: ICard[];
  dices: IDices[];
}

const initialState: GameState = {
  players: JSON.parse(localStorage.getItem(LS_PLRS_KEY) ?? "[]"),
  cards: JSON.parse(localStorage.getItem(LS_CRDS_KEY) ?? JSON.stringify(CardsInitial)),
  dices: JSON.parse(localStorage.getItem(LS_DCS_KEY) ?? JSON.stringify(DicesInitial)),
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addPlayer(state, action: PayloadAction<IPlayer>) {
      state.players.push(action.payload);
      localStorage.setItem(LS_PLRS_KEY, JSON.stringify(state.players));
    },
    changePlayer(state, action: PayloadAction<IPlayer>) {
      state.players.splice(action.payload.id, 1, action.payload);
      localStorage.setItem(LS_PLRS_KEY, JSON.stringify(state.players));
    },
    removePlayer(state, action: PayloadAction<IPlayer>) {
      state.players = state.players.filter((p) => p.id !== action.payload.id);
      localStorage.setItem(LS_PLRS_KEY, JSON.stringify(state.players));
    },
    layingCards(state){
      state.cards = CardsInitial;
      localStorage.setItem(LS_CRDS_KEY, JSON.stringify(state.cards));
    },
    changeCard(state, action: PayloadAction<ICard>) {
      state.cards.splice(action.payload.id, 1, action.payload);
      localStorage.setItem(LS_CRDS_KEY, JSON.stringify(state.cards));
    },
    refreshCards(state) {
      state.cards.forEach((c) => {
        c.completed = false;
        c.opened = false;
      });
      localStorage.setItem(LS_CRDS_KEY, JSON.stringify(state.cards));
    },
    layingDices(state){
      state.dices = DicesInitial;
      localStorage.setItem(LS_DCS_KEY, JSON.stringify(state.dices));
    },
    changeDices(state) {
      state.dices.sort(() => Math.random() - 0.5);
      localStorage.setItem(LS_DCS_KEY, JSON.stringify(state.dices));
    },
    refreshDices(state) {
      // state.dices.forEach((d) => {
      //   d.completed = false;
      //   d.opened = false;
      // });
      localStorage.setItem(LS_DCS_KEY, JSON.stringify(state.dices));
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;
