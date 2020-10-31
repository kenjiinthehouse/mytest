import { combineReducers } from 'redux';
// import counter from './counter';
import msgBoardReducer from './msgBoardReducer'

// export const rootReducer = combineReducers({ counter: counter });
// 合併所有的reducers成一個大的reducer
export const rootReducer = combineReducers({
  msgBoardReducer,
});
