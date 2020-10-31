// import { ADD_VALUE, INIT_VALUE, MINUS_VALUE } from './actionTypes';
import { GET_MSG } from './msgBoardActionTypes';

// action creator 動作建立器

// export const addValue = (value) => {
//   return { type: ADD_VALUE, value };
// };

// // 用setTimeout模擬 middleware可以做的事
// export const addValueAsync = (value) => {
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch(addValue(value));
//     }, 2000);
//   };
// };

// export const initValue = (value) => {
//   return { type: INIT_VALUE, value };
// };

// export const initValueAsync = (value) => {
//   return { type: INIT_VALUE, value };
// };

// export const minusValue = (value) => {
//   return { type: MINUS_VALUE, value };
// };

export const getMsg = (obj) => {
  return { type: GET_MSG, obj };
};
export const getMsgAsync = () => {
  return async function getMsgFunc(dispatch) {
    const url = 'http://localhost:5566/msg';
    const request = new Request(url, {
      method: 'POST',
    });
    const response = await fetch(request);
    const msgList = await response.json();
    dispatch(getMsg(msgList));
  };
};

// export const getMsg = () => {
//   return async (dispatch) => {
//     const url = 'http://localhost:5566/msg';
//     const response = await fetch(url);
//     const msg = await response.json();
//     console.log('actions',msg)
//     dispatch({
//       type: GET_MSG,
//       payload: msg,
//     });
//   };
// };
