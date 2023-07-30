import {createSlice} from '@reduxjs/toolkit';
// slice 객체 만들기
const counterSlice = createSlice({
  // name : slice 이름
  name:'counterSlice',
  // 초기 값 
  initialState:{value:0},
  // reducer 공금 (복수형 주의!!)
  reducers:{
    // 타입별로 함수를 정의 (redux에서는 action.type에 따라 조건 분기)를 대신
    // action.type이 up 일 때는 해당 함수가 실행된다.
    // redux에서 state와 action 값 동일하게 받음
    // 기존 redux에서는 불변성 때문에 복제를 했음
    // 하지만 tookit 사용하면 밑에 주석처럼 복잡하게 짜지 않아도 됨
    up:(state, action)=>{
      state.value = state.value + action.payload;
      // state의 value를 바꾸고 싶으면 ~~
      // action.payload = action.step
    }
  }
});
```
function reducer(state, action) {
  if(action.type === 'up') {
  return {...state, value: state.value + action.step}  
}
}
```
export default counterSlice;
export const {up} = counterSlice.actions;
