import {GET_MSG} from '../actions/msgBoardActionTypes';




export default function msgBoardReducer(state = {}, action) {
  switch (action.type) {
    case GET_MSG:
      return action.obj;
    default:
      return state;
  }
}

// const initialState = {
//   cmt: [],
// };


// export default function msgBoardReducer(state = initialState, action) {
//   switch (action.type) {
//     case GET_MSG:
//       return {
//         ...state,
//         cmt: action.obj.rows,
//       };
//     default:
//       return state;
//   }
// }
