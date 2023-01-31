import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//store 영역
const weight = 100; //스토어에서 쓸 스테이트 변수는 그냥 변수선언을 하면됨

function reducer(state = weight, action) {
  if (action.type === 'increase') {
    state += 1;
    return state;
  } else if (action.type === 'decrease') {
    state -= 1;
    return state;
  } else return state;
}

let store = createStore(reducer);
//

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//provider를 여기서 적용하면 모든 리액트 컴포넌트에 리덕스적용한단거고
//특정 범위 내에서 리덕스를 적용하고 싶을 때는 App.js 안에서 그 범위에다 Provider 생성
