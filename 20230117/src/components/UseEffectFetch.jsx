import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Profile from './Profile';

const UseEffectFetch = () => {
    const [dataArr, setdataArr] = useState([]);

    async function fetchData() {
        const resFetch = await axios.get('http://localhost:4000');
        if(resFetch.status !== 200) return alert('통신 에러');
        const data = resFetch.data; //데이터를 새롭게 변수할당 했기 때문에 스테이트의 배열과 다른 배열임
        setdataArr(data);
        console.log(data);

    }

    useEffect(()=>{
        fetchData();
    }, []);

    return (
        <div>
            {dataArr.map((el, index)=>{
                return <Profile key={index} name={el.name} age={el.age} nickName={el.nickName}/>
            })}
        </div>
    );
};

export default UseEffectFetch;

//useeffect는 리턴 전 자바스크립트 -> 리턴 그림 부분 -> 이 다음에 실행이 된다. 