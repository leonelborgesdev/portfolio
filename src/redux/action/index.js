import { CHANGE_MODE } from "./types";

export const changeMode = (mode) => {
  // let new_mode = "";
  // if (mode === "light") {
  //   new_mode = "dark";
  // } else {
  //   new_mode = "light";
  // }
  return function (dispatch) {
    dispatch({
      type: CHANGE_MODE,
      payload: mode,
    });
  };
};
