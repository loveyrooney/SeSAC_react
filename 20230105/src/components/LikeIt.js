import {useState} from 'react';

function LikeIt() {
    const [Like, setLike] = useState(0);

    return(
        <div>
            <span onClick={()=>setLike(Like+1)}>{Like<11 ? "π" : "π"}</span><br/>
            <span>{Like}</span>
        </div>
        
    );
}

export default LikeIt;


//μΌν­μ°μ°μλ₯Ό μ΄μ©νλ©΄ μ‘°κ±΄μ μΌλ‘ μ¬μ©ν  μ μλ€. λ¨ λ¦¬ν΄ μμμ ifλ¬Έμ μ°λ κ²μ μλ¨