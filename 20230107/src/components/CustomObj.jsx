import React from 'react';

const CustomObj = (props) => {
    console.log(props);
    if(props.obj) {
        const {name, age, nickName} = props.obj;
        return (
            <div>
                <h1>{name}</h1>
                <h2>{age}</h2>
                <h2>{nickName}</h2>
            </div>
        )
    } else {
        return (
            <div>데이터가 없습니다</div>
        )
    }
    
};

export default CustomObj;