import React, { useState } from 'react';

export default function ArrayState() {
    const [state, setState] = useState([0]);
    console.log("origin state:",state);

    return(
        <div>
            {state[0]}
            <br/>
            {/* <button onClick={()=>{state[0] = 1; setState(state); console.log(state);}}>+1</button> */}
            <button onClick={()=>{
                state[0] =1; 
                const copyArr = [...state];
                setState(copyArr); 
                console.log("changed state:",state);}}>+1</button>
        </div>
    );
}

//state에 넣는 것이 원시적 타입이면 값이 그대로 할당되지만, 객체타입의 경우 객체에 접근할 메모리주소가 할당됨.
//따라서 객체의 값이 같더라도 메모리주소가 다르므로 변수의 비교를 하면 다른 것이 됨. 
//state는 state에 들어가 있는 것이 변경이 되었을때 렌더링을 다시 해주는 구조이기 때문에 주석처리한 버튼처럼
//setState안에 바로 변경된 state를 넣으면 객체의 메모리주소는 같은 상태가 되어서 리로드가 안 됨.
//...state 전개연산자 사용해서 값만 똑같은 새로운 배열 만들어주는 방식으로 해야 메모리주소 달라짐