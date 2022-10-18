import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { gameReducer } from "./gameReducers/gameReducers";

const rootReducer = combineReducers({
  gameReducers: gameReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

setupListeners(store.dispatch);

export default store;
export type RootState = ReturnType<typeof store.getState>;
