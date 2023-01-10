import React from 'react';
import { useState } from 'react';

const Event_ex = () => {
  const [arr, setArr] = useState([
    { name: '코디', mail: 'codi@gmail.com' },
    { name: '윤소희', mail: 'yoonsohee@gmail.com' },
  ]);

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="이름"
        value={name}
        onChange={(e) => {
          //온체인지 이벤트 자체를 객체로 보내면 그 안에서 여러 요소를 쓸 수 있다.
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        name="mail"
        placeholder="이메일"
        value={mail}
        onChange={(e) => {
          setMail(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          setArr(arr.concat({ name: name, mail: mail }));
          setName('');
          setMail('');
        }}
      >
        등록
      </button>
      {arr.map((el, index) => (
        <h1 key={index}>
          {el.name} : {el.mail}
        </h1>
      ))}
    </div>
  );
};

export default Event_ex;

//document.queryselector 로 인풋 밸류를 가져올 수도 있지만, 돔을 직접 건드리는 방법은 리액트에서 지양한다.
//e.target.value == document.queryselector("input").value
//내가 삽질한 이유 : state변수로 네임과 이메일은 만들어 뒀는데 배열을 스테이트로 만들 생각을 못했다.
//작업순서 : 배열을 만들어서 맵 사용하여 요소추가 - 인풋밸류가 입력될때마다 바뀌는 스테이트 변수 선언
//- 밸류에 값이 들어오면 변경된 스테이트로 구성된 {}를 배열에다 추가, 및 변경된 배열로 맵 돌려서 요소 보여주기
//- 변경 후에 스테이트는 다시 원래상태로 되돌려 놓기 위한 작업. 밸류에 스테이트로 지정, 온클릭 마지막에 다시 셋스테이트로 리셋
