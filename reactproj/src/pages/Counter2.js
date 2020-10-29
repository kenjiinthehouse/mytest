import React from 'react';
// connect是一個高階元件 用法類似 withRouter
import { connect } from 'react-redux';
// 改用動作類型的常數
// import { ADD_VALUE, MINUS_VALUE } from '../actions/actionTypes';
// 導入全部]]的action  ，較沒有最佳化
// import * as actionCreators from '../actions/index';
// 導入actions/index.js中，這個元件只需要一部份的action creators
import { addValue, minusValue, addValueAsync } from '../actions/index';

function Counter2(props) {
  //觀察props裡的得到的store對應和方法
  console.log('props', props);
  return (
    <>
      <h1>{props.total}</h1>
      {/* <button
        onClick={() =>
          // 改用dispatch發送動作，改變redux裡的store中記錄的state值
          props.dispatch({ type: ADD_VALUE, value: 1 })
        }
      >
        +1
      </button> */}
      {/* 注意: 執行動作建立器時，Redux會協助自動dispatch */}
      <button onClick={() => props.addValue(1)}>+1</button>
      <button onClick={() => props.addValueAsync(1)}>(兩秒後)+1</button>
      <button
        onClick={() =>
          // 改用dispatch發送動作，改變redux裡的store中記錄的state值
          props.minusValue(1)
        }
      >
        -1
      </button>
    </>
  );
}

// 將redux中的store的state(狀態)
// 對應到這個元件中的props中，名稱為total

// 原本的 mapStateToProps
// const mapStateToProps = (store, ownProps) => {
//   console.log('ownProps', ownProps);
//   return { total: store.counter };
// };

const mapStateToProps = (store) => {
  return { total: store.counter };
};
// 不使用這個值，略過後自動綁定store的dispatch方法到這個元件的props
// const mapDispatchToProps = null;

// 高階元件的樣式，必要的
//                redux store的state,這個元件的props(Counter2)
//                redux store的dispatch,這個元件的props(Counter2)
// export default connect(mapStateToProps, actionCreators)(Counter2);

// 綁定部份action creators
// 注意：第二個傳入參數` { addValue, minusValue ,addValueAsync }`是個物件值
export default connect(mapStateToProps, {
  addValue,
  minusValue,
  addValueAsync,
})(Counter2);
