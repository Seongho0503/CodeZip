import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counterSlice';

// 작은 store(=slcie)를 하나로 모을 때 configureStore 사용
// configureStore 객체를 전달
// store : 하나의 거대어 store
const store = configureStore({
  // reducer (복수 아님)
  reducer:{
    // counter 네임 프로퍼티 안에 있는 모든 reducer들읠 통합 한 것이 counterSlice.reducer이다
    counter:counterSlice.reducer
  }
});
export default store;
