import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 套用 Redux 第一步
// 匯入 creatStore, combineReducers API
// import { createStore, combineReducers } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
// combineReducers >> ./reducers管理

// 導入redux-thunk中介軟體
import thunk from 'redux-thunk';
// 匯入綁定react與redux用的最上層元件
import { Provider } from 'react-redux';
//reducers管理
import { rootReducer } from './reducers';




// 在建立store時要加入中介軟體
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    {/* 最上層的react與redux綁定用的元件，屬性即為上面建立的store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
