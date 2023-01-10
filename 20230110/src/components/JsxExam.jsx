import React from 'react';

const JsxExam = () => {
    const name = '로이';
    const animal = '강아지';
    const a = 13;
    const b = 7;
    const title = 'Hello, World';
    return (
        <div>
            <div>
        이것은 div입니다
        <h3>이것은 div 안에 있는 h3태그 입니다</h3>
      </div>
      <hr />
      <h2>
        제 반려동물의 이름은 <u>{name}</u>입니다.
      </h2>
      <h2>
        <u>{name}</u>는 <u>{animal}</u>입니다.
      </h2>
      <hr />
      <p>{3 + 5 == 8 ? '정답입니다!' : '오답입니다!'}</p>
      <hr />
      <p>{a > b && 'a가 b보다 큽니다'}</p>
      <hr />
      <p className="test">{title}</p>
      <p>
        아이디 : <input type="text" className="input" />
      </p>
      <p>
        비밀번호 : <input type="text" className="input" />
      </p>
      <hr />
      <div className="rainbow">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div>
        </div>
    );
};

export default JsxExam;