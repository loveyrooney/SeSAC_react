import React, { useState } from 'react';
import Timer from './Timer';

const ShowTimer = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            {show && <Timer/>}
            <button onClick={()=>{setShow(!show)}}>btn</button>
        </div>
    );
};

export default ShowTimer;