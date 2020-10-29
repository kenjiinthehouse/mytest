import { ADD_VALUE, INIT_VALUE, MINUS_VALUE } from './actionTypes';

// action creator 動作建立器

export const addValue = (value) => {
  return { type: ADD_VALUE, value };
};

// 用setTimeout模擬 middleware可以做的事
export const addValueAsync = (value) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addValue(value));
    }, 2000);
  };
};

export const initValue = (value) => {
  return { type: INIT_VALUE, value };
};

export const initValueAsync = (value) => {
  return { type: INIT_VALUE, value };
};

export const minusValue = (value) => {
  return { type: MINUS_VALUE, value };
};
