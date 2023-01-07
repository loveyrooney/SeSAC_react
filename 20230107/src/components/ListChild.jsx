import React from "react";

export default function ListChild(Props) {
    const {title,content} = Props;
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>이 버전은 ListChild로 props 보내는 방식</p>
            <hr/>
        </div>
    );
}