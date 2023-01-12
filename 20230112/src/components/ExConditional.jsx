import React from 'react';
import { useState } from 'react';
import PracticeOne from './PracticeOne';
import PracticeTwo from './PracticeTwo';

const ExConditional = () => {
    const [one, setOne] = useState('1번');
    const ChangeOne = () => {
        one === '1번' ? setOne('2번') : setOne('1번');
    }
    
    return (
        <div>
            {one === '1번' && <PracticeOne text="1번 컴포넌트"/>}
            {one === '2번' && <PracticeTwo text="2번 컴포넌트"/>}
            <button onClick={ChangeOne}>{one}</button>
        </div>
    );
};

export default ExConditional;