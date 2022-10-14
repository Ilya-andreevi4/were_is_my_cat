import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { playersActions } from "../store/gameReducers/gameReducers";

const actions = {
  ...playersActions
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
