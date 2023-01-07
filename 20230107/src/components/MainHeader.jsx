import React from "react";

export default function MainHeader({userID, href, text}) {
    //인자에 props 보내고 이 자리에 const {userID, href, text} = props; 라고 변수로 지정해도 됨
    return (
        <div>
            <h1>{userID}님 반갑습니다</h1>
            <a href={href}>{text}</a>
        </div>
        
    )
}

//함수에 객체형태의 인자를 받게 되면, App.js 에서 보내는 인자를 받아서 넣게 된다. 
//인자를 구조분해 할당으로 보내도 된다. eslint는 구조분해 할당으로 처리 하는 방식을 유도한다.
//태그 구조를 짜 놓고 내용만 바뀌는 스트럭쳐가 있을 때 이 방법을 쓰면 된다. 
//서버에서 ejs로 변수 보낼때와 비슷하다. 

// const obj = {
//     str: "test",
//     num: 10
// }
// const str = obj.str;  
// const {str} = obj; 위와 같은 방법을 구조분해 할당으로 쓴 것

//구조분해할당 안하고 객체 통으로 보냈을 경우
// export default function MainHeader(props) {
//     return (
//         <div>
//             <h1>{props.userID}님 반갑습니다</h1>
//             <a href={props.href}>{props.text}</a>
//         </div>
        
//     )
// }