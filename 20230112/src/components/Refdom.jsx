import React, { useRef } from 'react';

const Refdom = () => {
    const orangeEl = useRef();
    const skyblueEl = useRef();
    const inputEl = useRef();

    const adjustCSS = () => {
        orangeEl.current.style.backgroundColor = 'orange';
        skyblueEl.current.style.backgroundColor = 'skyblue';
    }

    function clearInput() {
        inputEl.current.value = "";
    }
    return (
        <div>
            <h1 ref={orangeEl}>orange</h1>
            <h1 ref={skyblueEl}>skyblue</h1>
            <input ref={inputEl}/>
            <br/>
            <button onClick={adjustCSS}>CSS변경</button>
            <button onClick={clearInput}>input초기화</button>
        </div>
    );
};

export default Refdom;