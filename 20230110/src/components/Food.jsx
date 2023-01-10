import React from 'react';

const Food = (props) => {
    return (
        <div>
            제가 좋아하는 음식은 <span style={{color:"red"}}>{props.food}</span>입니다.
        </div>
    );
};

export default Food;