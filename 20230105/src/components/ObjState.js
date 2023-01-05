import React, { useState } from 'react';

export default function ObjState() {
    const [state, setState] = useState({teacher: '이효석'});
    console.log(state);

    return (
        <div>
            <button onClick={()=>{
                //전개연산자로 카피한 객체를 주든가
                state.teacher = 'tetz';
                const copyobj = {...state};
                setState(copyobj);
                //setState({teacher: 'tetz'}); 아예 새 객체를 주든가 
                console.log(state);
            }}>영어로!</button>
            <br/>
            <span>{state.teacher}</span> 
        </div>
    )
}