import React from 'react';
import PractiecTimer from './PractiecTimer';
import { useState } from 'react';

const ExUnmount = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            {show && <PractiecTimer/>}
            <button onClick={()=>{setShow(!show)}}>{show ? 'stop' : 'start'}</button>
        </div>
    );
};

export default ExUnmount;

//코드 작성 순서 : 일단 조건부 렌더링 작업을 먼저 해서 프랙티스타이머 컴포넌트를 불러온다. 
//프랙티스 타이머 컴포넌트에서 시간버튼에 대한 작업을 한다. 리렌더링 될 때 지금까지 변경된 거 보여주는 useref 활용
//프랙티스 타이머 컴포넌트에서 useEffect작업을 한다. 