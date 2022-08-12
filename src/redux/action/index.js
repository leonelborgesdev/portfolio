import { CHANGE_MODE } from "./types";

export const changeMode = (mode) => {
  return function (dispatch) {
    dispatch({
      type: CHANGE_MODE,
      payload: mode,
    });
  };
};
