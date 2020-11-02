// import { ADD_VALUE, INIT_VALUE, MINUS_VALUE } from './actionTypes';
import { GET_MSG, GET_REPLY } from './msgBoardActionTypes';

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
export const getMsg = (payload) => {
  return { type: GET_MSG, payload: payload };
};
export const getMsgAsync = () => {
  return async function getMsgFunc(dispatch) {
    const url = 'http://localhost:5566/msg';
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-type': 'application/json',
      }),
    });
    const response = await fetch(request);
    const msgList = await response.json();
    // console.log(msgList)
    dispatch(getMsg(msgList));
  };
};

export const getReply = (payload) => {
  return { type: GET_REPLY, payload: payload };
};
export const getReplyAsync = (sid) => {
  return async function getReplyFunc(dispatch) {
    const url = `http://localhost:5566/msg/reply/${sid}`;
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-type': 'application/json',
      }),
    });
    const response = await fetch(request);
    const replyList = await response.json();
    // console.log(replyList);
    dispatch(getReply(replyList));
  };
};

