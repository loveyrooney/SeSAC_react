import React from 'react';
import { useRef } from 'react';

const Changefocus = () => {
    const input1 = useRef();
    const input2 = useRef();

    const ChangeFocus1 = () => {
        input1.current.focus();
    }

    function ChangeFocus2 () {
        input2.current.focus();
    }

    return (
        <div>
            <input ref={input1} />
            <input ref={input2} />
            <br/>
            <button onClick={ChangeFocus1}>1번</button>
            <button onClick={ChangeFocus2}>2번</button>
        </div>
    );
};

export default Changefocus;