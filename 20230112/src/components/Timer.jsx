import React, { useEffect } from 'react';

const Timer = () => {
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log('go timer');   
        }, 1000);
        return(()=>{ //unmount 될 때 실행할 내용을 리턴 안에 적어준다.
            clearInterval(timer);
        });
    },[]);
    return (
        <div>
            <h1>timer</h1>
        </div>
    );
};

export default Timer;