import logo from './logo.svg';
import './App.css';
//import UseEffectFetch from './components/UseEffectFetch';
import InlineCss from './components/InlineCss';
import TestCss from './components/TestCss';
import TestStyled from './components/TestStyled';
import AppCopy from './components/AppCopy';
//import Image from './components/Image';
import FancyBorder from './components/FancyBorder';
import Router1 from './components/Router1';
import Router2 from './components/Router2';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Router2List from './components/Router2List';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/router1" element={<Router1 />} />
        <Route path="/router2" element={<Router2 />} />
        <Route path="/router2/:router2ID" element={<Router2List />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <hr />
      <FancyBorder color="orange">
        <TestCss />
        <p>merong this is real html</p>
      </FancyBorder>
      <span>this is app</span>
      <hr />
      <AppCopy />
      <hr />
      <TestStyled />
      <hr />
      <InlineCss />
      <hr />
    </div>
  );
}

export default App;

//props.children 으로 컴포넌트 태그 안에다가 html요소를 넣어서 보낼 수 있음. 컴포넌트 태그도 보낼 수 있음.
//router 처리 방향은 위에서 아래로, 라우터에 /가 있으면 기본주소/해당라우터, 없으면 현재위치/해당라우터 !!
//컴포넌트 안에 불러온 css 파일이, 앱 전체에 불러온 css 파일보다 우선적용되므로
//컴포넌트 css를 컴포넌트 안에서만 효력있게 하려면 클래스네임 잘 쓰도록 할것
