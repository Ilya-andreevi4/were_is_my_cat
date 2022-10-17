import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { cardsActions, playersActions } from "../store/gameReducers/gameReducers";

const actions = {
  ...playersActions,
  ...cardsActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
