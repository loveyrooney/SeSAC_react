import React from 'react';

const ReactFragment = () => {
    return (
        <React.Fragment>
           <h1>안녕하세요</h1>
           <span>반갑습니다</span> 
        </React.Fragment>
    );
};

export default ReactFragment;

//리턴 내에 디폴트로 있어야 되는 div 태그를 앱에 반영하고 싶지 않을 때 리액트 프래그먼트를 쓰면 내부 요소만 반영. 
// <>
//  <h1>안녕하세요</h1>
//   <span>반갑습니다</span> 
// </>
//위와 같이 간소화하면 임포트할 필요 없이 앱에서 컴포넌트 태그만 형성하면 됨. 
//css꼬이거나, 부모자식태그의 관계성이 있는 부분에서 꼬일때 사용