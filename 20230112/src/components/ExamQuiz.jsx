import React from 'react';
import { useRef } from 'react';

const ExamQuiz = () => {
    const first = Math.floor(Math.random()*10);
    const second = Math.floor(Math.random()*10);
    const arr = ['+','-','*'];
    const calcul = arr[Math.floor(Math.random()*arr.length)];
    const answer = useRef();

    const realanswer = eval(first+calcul+second);

    function submit() {
        console.log(realanswer);
        if(answer.current.value == realanswer) {
            alert("정답입니다");
            window.location.href='/';
        } else {
            alert("오답입니다");
            answer.current.value = '';
        }
        
    }
    return (
        <div>
            <p>{first}{calcul}{second}</p>
            <input ref={answer}/>
            <button onClick={submit}>정답제출!</button>
        </div>
    );
};

export default ExamQuiz;

//선생님 풀이법 요약 : 어레이의 인덱스 자체만 변수지정해서 그림 보여줄때 어레이[인덱스변수] 로 넣고
//이프문을 통해 연산 미리 계산해둔 뒤 정답버튼 함수에서는 정답과 맞는지 아닌지 판별만하고
//리렌더링은 어떤 요소에 스테이트 지정하는게 아니라 그냥 상태에 대한 체크를 위한 불리언 형태로 적용. 
// const fisrtRandomNumber = Math.floor(Math.random() * 10);
//   const secondRandomNumber = Math.floor(Math.random() * 10);
//   const arithmeticArr = ['+', '-', 'x'];
//   const arithmetic = Math.floor(Math.random() * 3);

//   let answer = 0;
//   if (arithmetic === 0) {
//     answer = fisrtRandomNumber + secondRandomNumber;
//   } else if (arithmetic === 1) {
//     answer = fisrtRandomNumber - secondRandomNumber;
//   } else {
//     answer = fisrtRandomNumber * secondRandomNumber;
//   }

//   const answerInput = useRef();
//   const [again, setAgain] = useState(false);

//   const checkAnswer = () => {
//     if (answer === Number(answerInput.current.value)) {
//       alert('정답 입니다!');
//       answerInput.current.value = '';
//       answerInput.current.focus();
//       setAgain(!again);
//     } else {
//       alert('틀렸습니다. 다시 입력해 주세요!');
//       answerInput.current.value = '';
//       answerInput.current.focus();
//     }
//   };

//   return (
//     <div>
//       <h1>
//         {fisrtRandomNumber} {arithmeticArr[arithmetic]} {secondRandomNumber}
//       </h1>
//       <input ref={answerInput} />
//       <button onClick={checkAnswer}>정답 제출</button>
//     </div>
//   );
// }