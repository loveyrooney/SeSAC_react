import React from "react";

export default function ExamMap() {
    const items = [
        {
          item: 'PS5',
          price: '685,000원',
        },
        {
          item: '에어 프라이어',
          price: '50,000원',
        },
        {
          item: '사세 치킨윙',
          price: '11,500원',
        },
      ];
    return (
        <div>
           {items.map((el, index) => { //함수 안에 리턴밖에 없는경우 중괄호, 리턴을 함께 생략 가능
                return (
                    <div key={index}>
                        <h2>품목명 : {el.item}</h2>
                        <p>가격 : {el.price}</p>
                        <hr/>
                    </div>
                )})
            }
        </div>
    );
}

//컴포넌트 활용방식으로 할 경우 div안에 
// {items.map((el, index) => {
//     return <ExamMapChild item={el.item} price={el.price} key={index}/>
// })} 이렇게 넣고 ExamMapChild.jsx 파일에서 <h2>{item}</h2> <p>{price}</p> 추가하면 됨