// 集中管理所有的動作類型
// 將動作類型字串先以(常數)[固定變數]來代表，之後在動作建立器reducer使用
// 容易抓 bug、易於管理

// counter
export const ADD_VALUE = 'ADD_VALUE';
export const MINUS_VALUE = 'MINUS_VALUE';
// 新增初始化的動作類型
export const INIT_VALUE = 'INIT_VALUE';
