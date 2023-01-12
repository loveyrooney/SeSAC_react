import React, { useEffect, useRef, useState } from 'react';

const TestUseEffect = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('입력 하세요');
    const inputValue = useRef();

    function onBtnClick() {
        console.log('🖱️버튼 클릭');
        setCount(count +1);
    }

    function onInputChange() {
        console.log('keydown');
        setText(inputValue.current.value);
    }

    useEffect(()=>{
        console.log('🪢렌더링 될때마다 실행');
    });

    useEffect(()=>{
        console.log('🪢mount될 때만 실행');
    },[]); //배열에 바뀔 값을 안 줬기 때문에 어떤 변경에도 실행되지 않음. 오직 마운트 될 때만 실행

    useEffect(()=>{
        console.log('🪢버튼 클릭시에만 실행');
    },[count]); //버튼을 클릭하면 카운트가 변경이 되므로 카운트가 변할 때마다 실행

    useEffect(()=>{
        console.log('🪢keydown시에만 실행');
    },[text]);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onBtnClick}>+1</button>
            <br/>
            <h1>{text}</h1>
            <input ref={inputValue} onChange={onInputChange}/>
        </div>
    );
};

export default TestUseEffect;

//useEffect에는 두가지 인자를 받는다. 익명함수, 배열 
//익명함수만 전달할시, 처음 마운트 될 때, 컴퍼넌트 업데이트 될 때 모두 실행. 렌더링이 될 때마다 실행. 
//배열에 값을 넣어 전달할시, 배열에 넣은 값에 변경이 일어날 때만 실행. 
//언마운트 될때 실행할 무언가를 넣고싶으면 리턴(()=>{}) 넣기.
//useEffect는 데이터 통신할 때 주로 쓰임. 반응형을 만들때도 쓸 수 있다. 다양하게 쓰임. 
