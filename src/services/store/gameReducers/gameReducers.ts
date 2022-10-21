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
    turn: true,
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
          state.gameStatus.check = SCORING;
          localStorage.setItem(
            LS_GS_KEY,
            JSON.stringify(state.gameStatus.check)
          );
          localStorage.setItem(LS_CRDS_KEY, JSON.stringify(cards));
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
        const lastCard = tableCards[1]
        console.log(tableCards);
        if (!lastCard) {
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
      const activeDices = state.activeDices;
      const getData = () => {
        state.dices.forEach((d) => {
          if (d.mainColorDice[1]) {
            const random = Math.floor(Math.random() * 3);
            const mainColor = d.mainColorDice[random];
            activeDices.mainColorDice = mainColor.url;
          } else if (d.postureDice[1]) {
            const random = Math.floor(Math.random() * 3);
            const posture = d.postureDice[random];
            activeDices.postureDice = posture.url;
          } else if (d.secColorDice[1]) {
            const random = Math.floor(Math.random() * 3);
            const secColor = d.secColorDice[random];
            activeDices.secColorDice = secColor.url;
          }
        });
      };
      if (state.cards.some((el) => el.completed)) {
        const complietedCards = state.cards.filter((el) => el.completed);
        const handlerCheck = () => {
          const check = complietedCards.some(
            (card) =>
              card.mainColorDice === activeDices.mainColorDice &&
              card.postureDice === activeDices.postureDice &&
              card.secColorDice === activeDices.secColorDice
          );
          return check;
        };
        if (activeDices.mainColorDice === "./axi_logo.png") {
          return getData();
        }
        while (handlerCheck() !== false) {
          getData();
        }
      } else {
        getData();
      }
      state.gameStatus.check = FINDING_CAT;
      localStorage.setItem(LS_GS_KEY, JSON.stringify(state.gameStatus.check));
      localStorage.setItem(LS_ADCS_KEY, JSON.stringify(state.activeDices));
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;
