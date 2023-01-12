import React, { useRef } from 'react';

const ExamRef = () => {
    const inputvalue = useRef();
    const divbox = useRef();

    function changeback() {
        divbox.current.style.backgroundColor = inputvalue.current.value; 
    }

    return (
        <div ref={divbox} style={{width:"15%"}}>
            <input ref={inputvalue}/><br/>
            <button onClick={changeback}>색 적용</button>
        </div>
    );
};

export default ExamRef;