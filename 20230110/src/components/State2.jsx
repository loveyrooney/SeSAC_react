import React from 'react';
import {useState} from 'react';

const State2 = () => {
    let [num, setNumber] = useState(0);

    function Increase() {
        setNumber(num+1);
    }
    function Decrease() {
        setNumber(num-2);
    }
    return (
        <div>
            <p>{num}</p>
            <button onClick={Increase}>+1</button>
            <button onClick={Decrease}>-2</button>
        </div>
    );
};

export default State2;