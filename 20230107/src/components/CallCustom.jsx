import React from 'react';
import CustomList from './CustomList';

const CallCustom = () => {
    const nameArr = ['뽀로로', '루피', '크롱']
    return (
        <div>
            <CustomList arr={nameArr}/>
        </div>
    );
};

export default CallCustom;