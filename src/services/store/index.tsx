import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { cardsReducer, playersReducer } from "./gameReducers/gameReducers";

const rootReducer = combineReducers({
  playersReducers: playersReducer,
  cardsReducers: cardsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

setupListeners(store.dispatch);

export default store;
export type RootState = ReturnType<typeof store.getState>;
