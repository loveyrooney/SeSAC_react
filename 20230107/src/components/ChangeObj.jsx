import React from 'react';
import { useState } from 'react';

const ChangeObj = (props) => {
    const [index, setIndex] = useState(0);
    const obj = props.objArr[index];

    function changeProfile() {
        if(index === props.objArr.length - 1) {
            setIndex(0);
        } else {
            setIndex(index+1); 
        }
        
    }
    return (
        <div>
            <h2>{obj.name}</h2>
            <h2>{obj.age}</h2>
            <h2>{obj.nickName}</h2>
            <button onClick={changeProfile}>변경</button>
        </div>
    );
}
    

export default ChangeObj;

