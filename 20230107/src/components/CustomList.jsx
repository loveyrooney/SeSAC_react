import React from 'react';

export default function CustomList(props) {
    return (
        <ul>
            {props.arr.map((el) => <li key={el}>{el}</li>)}
        </ul>
    );
}
    

//맵 사용하려고 할때 맵을 사용할 키가 있는지 없는지 확신할 수 없을때 키가 있는경우에만 실행하라고 할 경우 arr?.map을 쓸것