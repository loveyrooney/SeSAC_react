import React, { useRef, useState } from 'react';

const Comparing = () => {
    const [countState, setCountState] = useState(0);
    const countRef = useRef(0);
    let countVar = 0;
    const [render, setRender] = useState(false);

    const countUpState = () => {
        setCountState(countState+1);
        console.log('state:',countState);
    }
    const countUpRef = () => {
        countRef.current += 1;
        console.log('ref:',countRef.current);
    }
    const countUpVar = ()=>{
        countVar += 1;
        console.log('var:',countVar);
    }
    const reRender = ()=>{
        setRender(!render);
    }
    return (
        <div>
            <h1>state: {countState}</h1>
            <h1>ref: {countRef.current}</h1>
            <h1>var: {countVar}</h1>
            <br/>
            <button onClick={countUpState}>state up</button>
            <button onClick={countUpRef}>ref up</button>
            <button onClick={countUpVar}>var up</button>
            <button onClick={reRender}>rerender</button>
        </div>
    );
};

export default Comparing;

//state는 뷰에 바뀐거 실시간 반영, ref는 바뀐거 리렌더 할때 뷰에 반영, var는 뷰에 반영 아예 안함. 
//셋 모두는 페이지 새로고침 하면 초기화. 
//state는 그 자체가 리렌더링을 일으키는 속성이 있음. 