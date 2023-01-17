import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Test = () => {
  const weight = useSelector((state) => state); //store에서 선언한 state 가져오기
  const dispatch = useDispatch(); //store에게 state 변경 요청하는 애
  return (
    <>
      <h1>your weight is '{weight}(=store에서 받아온 state임)'!</h1>
      <button
        onClick={() => {
          dispatch({ type: 'increase' }); //디스패치 안에는 객체형태로 보내고, store에서 조건 설정한 대로 키와 밸류 지정
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'decrease' });
        }}
      >
        decrease
      </button>
    </>
  );
};

export default Test;
