import React, { useState } from 'react';

export default function StateVariable() {
    const [state, setState] = useState(0);
    let variable = 0;

    function setVariable() {
        variable += 1;
        console.log(`state: ${state} / variable: ${variable}`);
    }

    return(
        <div>
            {state} / {variable} <br/>
            <button onClick={()=>{setState(state+1); setVariable();}}>+1</button>
        </div>
    )
}

//변수와 스테이트의 차이는, 리로드에 있음. 리로드가 되면 변수는 항상 0상태의 선언지점으로 돌아오기 때문에 
//버튼 눌러도 1인데, 스테이트는 리로드 될때마다 변경이기 때문에 +가 됨