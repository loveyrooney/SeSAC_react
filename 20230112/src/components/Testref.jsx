import React, { useState } from 'react';
import {useRef} from 'react';

const Testref = () => {
    const [text, setText] = useState("안녕하세요");
    const inputvalue = useRef();

    function onChangeText() {
        console.log(inputvalue);
        setText(inputvalue.current.value);
        // const inputText = e.target.value;
        // setText(inputText);
    }
    return (
        <div>
           <h1>{text}</h1>
           <input type="text" ref={inputvalue} onChange={() => {onChangeText()}}/> 
        </div>
    );
};

export default Testref;

//useState 사용시 온체인지에 e인자 보내줘야함