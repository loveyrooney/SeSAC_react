import {useState} from 'react';

function LikeIt() {
    const [Like, setLike] = useState(0);

    return(
        <div>
            <span onClick={()=>setLike(Like+1)}>{Like<11 ? "👍" : "😎"}</span><br/>
            <span>{Like}</span>
        </div>
        
    );
}

export default LikeIt;


//삼항연산자를 이용하면 조건적으로 사용할 수 있다. 단 리턴 안에서 if문을 쓰는 것은 안됨