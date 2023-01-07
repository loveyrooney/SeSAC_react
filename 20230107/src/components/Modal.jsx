import React from "react";

export default function Modal() {
    return (
        <div>
            <div className="modal">
                <h2>오늘 해야할 일 2개</h2>
                <h2>오늘 완료할 일 0개</h2>
            </div>
        </div>
    );
}

//반복이 예상되는 코드 덩어리를 컴포넌트로 만들어서 컴포넌트로 익스포트도 가능.