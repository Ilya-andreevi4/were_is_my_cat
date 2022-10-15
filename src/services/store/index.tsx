import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { playersReducer } from "./gameReducers/gameReducers";

const rootReducer = combineReducers({
  gameReducers: playersReducer,
});

const store = configureStore({
  reducer: rootReducer,

});

setupListeners(store.dispatch);

export default store;
export type RootState = ReturnType<typeof store.getState>;
