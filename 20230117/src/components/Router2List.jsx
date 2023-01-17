import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';

const Router2List = () => {
  const { router2ID } = useParams();
  //객체형태로 받는다. 키는 앱.js에서 설정한 라우터아이디, 값은 상위컴포넌트에서 저장해놓은 라우터.
  return (
    <>
      <Header />
      <h1>this is Router2</h1>
      <aside style={{ display: 'inline-block', width: '20%' }}>
        <Link to="/router2/1" style={{ textAlign: 'left' }}>
          <h2>this is list1</h2>
        </Link>
        <Link to="/router2/2" style={{ textAlign: 'left' }}>
          <h2>this is list2</h2>
        </Link>
      </aside>
      <article style={{ display: 'inline-block', width: '80%' }}>
        <h2>{router2ID} 번 글입니다</h2>
      </article>
    </>
  );
};

export default Router2List;
