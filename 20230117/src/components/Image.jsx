import React from 'react';
import logo from '../logo.svg';
const Image = () => {
  return (
    <>
      <img src="/images/logo192.png" alt="img" />
      <span>이거는 퍼블릭에서 불러온거</span>
      <img src={logo} alt="logo" />
      <span>이거는 src 내부에서 불러온거</span>
    </>
  );
};

export default Image;

//리액트의 public폴더는 자동으로 static 설정이 되어있기 때문에 public 내에 있는 이미지를 가져올 경우 경로를 위와 같이 하면됨
