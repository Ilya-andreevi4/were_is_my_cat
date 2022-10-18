import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { cardsReducer, dicesReducer, playersReducer } from "./gameReducers/gameReducers";

const rootReducer = combineReducers({
  playersReducers: playersReducer,
  cardsReducers: cardsReducer,
  dicesReducers: dicesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

setupListeners(store.dispatch);

export default store;
export type RootState = ReturnType<typeof store.getState>;
