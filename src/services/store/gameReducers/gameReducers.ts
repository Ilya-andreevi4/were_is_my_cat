import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlayer } from "../../models/IPlayer";
import { ICard } from "../../models/ICard";
import { CardsInitial } from "../../models/CardsInitialState";
import { IActiveDices, IDices } from "../../models/IDices";
import {
  DicesInitial,
  startDicesInitial,
} from "../../models/DicesInitialState";
import { IGameStatus } from "../../models/IGameStatus";
import { PlayerInitialState } from "../../models/PlayersInitialState";

const LS_PLRS_KEY = "react_plrs_keys";
const LS_CRDS_KEY = "react_crds_keys";
const LS_ADCS_KEY = "react_adcs_keys";
const LS_GS_KEY = "react_gs_keys";
const LS_FG_KEY = "react_fg_keys";
const PLAYING_DICES = "playingDice";
const FINDING_CAT = "findingCat";
const SCORING = "scoring";
const END_GAME = "endGame";

interface GameState {
  players: IPlayer[];
  cards: ICard[];
  dices: IDices[];
  activeDices: IActiveDices;
  gameStatus: IGameStatus;
}

const initialState: GameState = {
  players: JSON.parse(
    localStorage.getItem(LS_PLRS_KEY) ?? JSON.stringify(PlayerInitialState)
  ),
  cards: JSON.parse(
    localStorage.getItem(LS_CRDS_KEY) ?? JSON.stringify(CardsInitial)
  ),
  dices: DicesInitial,
  activeDices: JSON.parse(
    localStorage.getItem(LS_ADCS_KEY) ?? JSON.stringify(startDicesInitial)
  ),
  gameStatus: {
    firstGame: JSON.parse(localStorage.getItem(LS_FG_KEY) ?? "true"),
    check: localStorage.getItem(LS_GS_KEY) ?? JSON.stringify(PLAYING_DICES),
  },
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    // Players
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

    // Cards
    layingCards(state) {
      state.gameStatus.check = PLAYING_DICES;
      state.cards.sort(() => Math.random() - 0.5);
      localStorage.setItem(LS_CRDS_KEY, JSON.stringify(state.cards));
      localStorage.setItem(LS_GS_KEY, JSON.stringify(state.gameStatus.check));
    },
    openCard(state, action: PayloadAction<ICard>) {
      const card = state.cards.find((c) => c.id === action.payload.id);
      if (card) {
        card.opened = true;
        localStorage.setItem(LS_CRDS_KEY, JSON.stringify(state.cards));
      }
    },
    checkCard(state, action: PayloadAction<ICard>) {
      const dice = state.activeDices;
      const cards = state.cards;
      const card = cards.find((c) => c.id === action.payload.id);
      if (card) {
        if (
          card.mainColorDice === dice.mainColorDice &&
          card.postureDice === dice.postureDice &&
          card.secColorDice === dice.secColorDice
        ) {
          card.completed = true;
          card.opened = false;

          if (state.players.length > 1) {
            state.gameStatus.check = SCORING;
          } else {
            state.gameStatus.check = PLAYING_DICES;
            state.players[0] && state.players[0].points++;
            const tableCards = state.cards.filter(
              (el) => el.completed === false
            );
            if (tableCards.length === 0) {
              state.gameStatus.check = END_GAME;
              localStorage.setItem(
                LS_GS_KEY,
                JSON.stringify(state.gameStatus.check)
              );
            }
          }
          localStorage.setItem(
            LS_GS_KEY,
            JSON.stringify(state.gameStatus.check)
          );
          localStorage.setItem(LS_CRDS_KEY, JSON.stringify(cards));
          localStorage.setItem(LS_PLRS_KEY, JSON.stringify(state.players));
          return;
        } else {
          card.opened = false;
          localStorage.setItem(LS_CRDS_KEY, JSON.stringify(cards));
          return;
        }
      }
    },

    quitGame(state) {
      state.cards = CardsInitial;
      state.gameStatus.check = PLAYING_DICES;
      state.players = PlayerInitialState;
      localStorage.setItem(LS_PLRS_KEY, JSON.stringify(state.players));
      localStorage.setItem(LS_CRDS_KEY, JSON.stringify(state.cards));
      localStorage.setItem(LS_GS_KEY, JSON.stringify(state.gameStatus.check));
    },

    // Scoring
    handleScoring(state, action: PayloadAction<IPlayer>) {
      const winner = state.players.find((p) => p.id === action.payload.id);
      if (winner) {
        winner.points++;
        state.gameStatus.check = PLAYING_DICES;
        const prevPlayer = state.players.find((p) => p.turn);
        if (prevPlayer) {
          const nextPlayer = state.players.find(
            (p) => p.id === prevPlayer.id + 1
          );
          if (!nextPlayer) {
            prevPlayer.turn = false;
            state.players[0].turn = true;
          } else {
            prevPlayer.turn = false;
            nextPlayer.turn = true;
          }
        }
        localStorage.setItem(LS_PLRS_KEY, JSON.stringify(state.players));
        localStorage.setItem(LS_GS_KEY, JSON.stringify(state.gameStatus.check));
        const tableCards = state.cards.filter((el) => el.completed === false);
        if (tableCards.length === 0) {
          state.gameStatus.check = END_GAME;
          localStorage.setItem(
            LS_GS_KEY,
            JSON.stringify(state.gameStatus.check)
          );
        }
      } else console.error("Произошла ошибка при начеслении очков.");
    },

    // Dices
    layingDices(state) {
      state.activeDices = startDicesInitial;
      localStorage.setItem(LS_ADCS_KEY, JSON.stringify(state.activeDices));
    },

    dicesRoll(state) {
      const getData = () => {
        const activeDices = state.activeDices;
        const restCards = state.cards.filter((el) => !el.completed);
        const rand = Math.floor(Math.random() * restCards.length);
        const card = restCards[rand];
        activeDices.mainColorDice = card.mainColorDice;
        activeDices.secColorDice = card.secColorDice;
        activeDices.postureDice = card.postureDice;
      };
      getData();
      state.gameStatus.check = FINDING_CAT;
      localStorage.setItem(LS_GS_KEY, JSON.stringify(state.gameStatus.check));
      localStorage.setItem(LS_ADCS_KEY, JSON.stringify(state.activeDices));
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;
