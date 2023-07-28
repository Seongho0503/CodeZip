import React, { useState } from 'react';
import './style.css';
import { createStore } from 'redux';
// react - redux의 4인방
// 1. Provider : 컴포넌트, state를 어떤 컴포넌트에게 제공할 것인가 (가장 바깥쪽의 울타리 지정)
// 2. useSelector : 어떤 state를 사용하고 싶은지?
// 3. useDispatch : state 값을 변경시킬 때
// 4. connect : 재사용성을 고려할 때 필요하지만 사용 어렵다.
import { Provider, useSelector, useDispatch, connect } from 'react-redux';

// reducer는 store 안의 state를 어떻게 바꿀 것인가?
// 두 개의 값을 받는다 
// 1) 현재의 state 값
// 2) action : 어떻게 바꿀 것인가 (요청받은 action)
function reducer(currentState, action) {
  // 정의되지 않았다면
  if (currentState === undefined) {
    return {
      // state default 값 반환
      number: 1,
    };
  }

  // 과거의 state객체 복제
  // 복제본을 수정해서 불변성을 유지한다.
  const newState = { ...currentState };
  if (action.type === 'PLUS') {
    newState.number++;
  }
  return newState;
}

// createStore을 생성할 때 반드시 reducer 주입하기
const store = createStore(reducer);
export default function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">

        {/* Provider로 감싸준다, Provider의 store를 반드시 prop으로 정의해야함 , 그럼 Provider의 하위 컴포넌트는 store 사용이 가능함*/}
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}
function Left1(props) {
  return (
    <div>
      <h1>Left1 </h1>
      <Left2></Left2>
    </div>
  );
}
function Left2(props) {
  console.log('2');
  return (
    <div>
      <h1>Left2 : </h1>
      <Left3></Left3>
    </div>
  );
}


function Left3(props) {
  console.log('3');
// function f(state){
//   return state.number;
// }

  // number 값을 무선으로 연결하고 싶다 
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
}
function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}
function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}

// + 버튼 누리면 left3만 렌더링되고 부모 컴포넌트인 left1, left2는 렌더링 x => 퍼포먼스로 상당히 좋다
function Right3(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          // dispatch에 plus 라는 액션을 제공 => reducer 호출
          dispatch({ type: 'PLUS' });
        }}
      ></input>
    </div>
  );
}
