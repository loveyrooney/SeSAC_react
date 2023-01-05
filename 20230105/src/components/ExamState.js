import { useState } from 'react';

function ExamState() {
    let [count, setCount] = useState(1);

    return(
        <div className="App">
            <button onClick={() => {setCount(count+1)}}>+</button>
            <button onClick={() => {setCount(count-1)}}>-</button>
            <br />
            <span>{count}</span>
        </div>
    );
}

export default ExamState;