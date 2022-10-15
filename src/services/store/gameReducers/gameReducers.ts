import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlayer } from "../../models/IPlayer";

const LS_PLRS_KEY = "react_plrs_keys";

interface PlayersState {
  players: IPlayer[];
}

const initialState: PlayersState = {
  players: JSON.parse(localStorage.getItem(LS_PLRS_KEY) ?? "[]"),
};

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    addPlayer(state, action: PayloadAction<IPlayer>) {
      state.players.push(action.payload);
      localStorage.setItem(LS_PLRS_KEY, JSON.stringify(state.players));
    },
    changePlayer(state, action: PayloadAction<IPlayer>) {
      state.players = state.players.splice(action.payload.id, 1, action.payload);
      localStorage.setItem(LS_PLRS_KEY, JSON.stringify(state.players));
    },
    removePlayer(state, action: PayloadAction<IPlayer>) {
      state.players = state.players.filter((p) => p.id !== action.payload.id);
      localStorage.setItem(LS_PLRS_KEY, JSON.stringify(state.players));
    },
  },
});
export const playersReducer = playersSlice.reducer;
export const playersActions = playersSlice.actions;
