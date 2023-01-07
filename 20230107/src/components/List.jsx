import React from "react";
import ListChild from "./ListChild";
import Modal from "./Modal";

export default function List() {
    const dataArr = [
        {
            title: "리액트 공부하기",
            content: "state 사용법 익히기"
        },
        {
            title: "코테 문제 풀기",
            content: "레벨 0 문제 풀기"
        }
    ]
    return (
        <div>
            <h1>오늘 해야 할 일</h1>
            <hr/>
            <Modal/>
            {dataArr.map((el, index) => { //함수 안에 리턴밖에 없는경우 중괄호, 리턴을 함께 생략 가능
                return (
                    <div key={index}>
                        <h2>{el.title}</h2>
                        <p>{el.content}</p>
                        <p>이 버전은 ListChild까지 안가고 List단계에서 해결</p>
                        <hr/>
                    </div>
                )})
            }
            <ListChild title={dataArr[0].title} content={dataArr[0].content} key={dataArr[0].index}/>
            <ListChild title={dataArr[1].title} content={dataArr[1].content} key={dataArr[1].index}/> 
            <Modal/>
        </div>
    );
}

//props를 조상-손자 단위로 사용하려고 할 경우, 부모는 props를 받아서 패싱을 해주면 사용가능
//나는 여기서 바로 자식으로 보냈지만, App.js에서 보낼경우 여기에서는 props 받고 title={title} 해주면 됨
//<ListChild title="리액트 공부하기" content="state 사용법 익히기" /> 라고 바로 지정하면 문제는 이 태그를 100개 만들어야 된다는 거. 
//그래서 내용이 지정된 배열을 만들고 위에 주석처리 된 형태로 사용할 경우에도 어쨌거나 태그를 100개 써야됨. 
//그래서 배열함수 map을 활용.

//이거는 맵을 활용해서 ListChild를 활용하는 버전.
// {dataArr.map((el, index) => { //함수 안에 리턴밖에 없는경우 중괄호, 리턴을 함께 생략 가능
//     return <ListChild title={el.title} content={el.content} key={index}/>
// })//라스트차일드 태그가 반복될경우 구분을 위해 유니크한 키가 필요(브라우저 콘솔 경고),db기본키 여기서씀! 인덱스는 최후에 쓰도록
// }