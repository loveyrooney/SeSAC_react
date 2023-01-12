import React, { useState } from 'react';
import Item from './Item';

const ConditionalRender = () => {
    const [condition, setCondition] = useState('보여주기');
    const onChange = () => {
        condition === '보여주기' ? setCondition('감추기') : setCondition('보여주기');
    }
    const ConditionalRender = condition === '감추기' && <Item/> //이거를 변수처리 안하고 그냥 밑에 바로 넣어도 됨
    return (
        <>
            {ConditionalRender}
            <button onClick={onChange}>{condition}</button>
        </>
    );
};

export default ConditionalRender;