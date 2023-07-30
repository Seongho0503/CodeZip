import React from "react";
import {createStore} from 'redux';
import {Provider,useSelector,useDispatch} from 'react-redux';
import store from './store';
import {up} from './counterSlice';

function Counter(){
  const dispatch = useDispatch();
// 인자로 전달된 state는 store에서 전체
  const count = useSelector(state=>{
    return state.counter.value;
  });
  return <div>
    <button onClick={()=>{
// dispatch ({type : 'counter/up' ,step: 2}); 와 밑에 동일
// dispatch (counterSlice.actions.up(2)); 
      dispatch(up(2));
    }}>+</button> {count}
  </div>
}
export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}
