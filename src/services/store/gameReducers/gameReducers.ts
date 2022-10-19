import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlayer } from "../../models/IPlayer";
import { ICard } from "../../models/ICard";
import { CardsInitial } from "../../models/CardsInitialState";
import { IActiveDices, IDices } from "../../models/IDices";
import {
  activeDicesInitial,
  DicesInitial,
} from "../../models/DicesInitialState";

const LS_PLRS_KEY = "react_plrs_keys";
const LS_CRDS_KEY = "react_crds_keys";
const LS_DCS_KEY = "react_dcs_keys";
const LS_ADCS_KEY = "react_adcs_keys";

interface GameState {
  players: IPlayer[];
  cards: ICard[];
  dices: IDices[];
  activeDices: IActiveDices;
}

const initialState: GameState = {
  players: JSON.parse(localStorage.getItem(LS_PLRS_KEY) ?? "[]"),
  cards: JSON.parse(
    localStorage.getItem(LS_CRDS_KEY) ?? JSON.stringify(CardsInitial)
  ),
  dices: JSON.parse(
    localStorage.getItem(LS_DCS_KEY) ?? JSON.stringify(DicesInitial)
  ),
  activeDices: JSON.parse(
    localStorage.getItem(LS_ADCS_KEY) ?? JSON.stringify(DicesInitial)
  ),
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
    layingCards(state) {
      state.cards = CardsInitial;
      localStorage.setItem(LS_CRDS_KEY, JSON.stringify(state.cards));
    },
    changeCard(state, action: PayloadAction<ICard>) {
      state.cards.splice(action.payload.id, 1, action.payload);
      localStorage.setItem(LS_CRDS_KEY, JSON.stringify(state.cards));
    },
    openCard(state, action: PayloadAction<ICard>) {
      const dice = state.activeDices;
      const cards = state.cards;
      const card = cards.find((c) => c.id === action.payload.id);
      if (card) {
        card.opened = true;
        cards.splice(card?.id, 1, card);
        localStorage.setItem(LS_CRDS_KEY, JSON.stringify(cards));
        setTimeout(() => {
          if (
            card.mainColorDice == dice.mainColorDice &&
            card.postureDice == dice.postureDice &&
            card.secColorDice == dice.secColorDice
          ) {
            card.completed = true;
            card.opened = false;
            cards.splice(card?.id, 1, card);
            localStorage.setItem(LS_CRDS_KEY, JSON.stringify(cards));
          } else {
            card.opened = false;
            cards.splice(card?.id, 1, card);
            localStorage.setItem(LS_CRDS_KEY, JSON.stringify(cards));
            return;
          }
        }, 2000);
      }
    },
    refreshCards(state) {
      state.cards.forEach((c) => {
        c.completed = false;
        c.opened = false;
      });
      localStorage.setItem(LS_CRDS_KEY, JSON.stringify(state.cards));
    },
    layingDices(state) {
      state.activeDices = activeDicesInitial;
      localStorage.setItem(LS_ADCS_KEY, JSON.stringify(state.activeDices));
    },
    dicesRoll(state) {
      const random = Math.floor(Math.random() * 3);
      state.dices.forEach((d) => {
        if (d.mainColorDice[1]) {
          const mainColor = d.mainColorDice[random];
          state.activeDices.mainColorDice = mainColor.url;
        } else if (d.postureDice[1]) {
          const posture = d.postureDice[random];
          state.activeDices.postureDice = posture.url;
        } else {
          const secColor = d.secColorDice[random];
          state.activeDices.secColorDice = secColor.url;
        }
      });
      return localStorage.setItem(
        LS_ADCS_KEY,
        JSON.stringify(state.activeDices)
      );
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;
