import { CHANGE_LANGUAJE, CHANGE_MODE } from "./types";

export const changeMode = (mode) => {
  return function (dispatch) {
    dispatch({
      type: CHANGE_MODE,
      payload: mode,
    });
  };
};
export const changeLanguaje = (languaje) => {
  return function (dispatch) {
    dispatch({
      type: CHANGE_LANGUAJE,
      payload: languaje,
    });
  };
};
