import { ADD_VALUE, INIT_VALUE, MINUS_VALUE } from '../actions/actionTypes';

// action = { type: 'ADD_VALUE', value: 1 }
// action = { type: 'MINUS_VALUE', value: 1 }

// export default 只能由函式使用
export default function counter(state = 5566, action) {
  switch (action.type) {
    case ADD_VALUE:
      return state + action.value;
    case MINUS_VALUE:
      return state - action.value;
    case INIT_VALUE:
      return action.value;

    default:
      return state;
  }
}
