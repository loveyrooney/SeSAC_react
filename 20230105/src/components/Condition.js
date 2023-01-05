import { useState } from 'react';

function Condition() {
    const [condition, setCondition] = useState(true);

    return(
        <div>
            <button onClick={()=>{setCondition(!condition)}}>change condition</button><br/>
            <span>{condition ? "ok😆" : "not ok😥"}</span>
        </div>
    );
}

export default Condition;


