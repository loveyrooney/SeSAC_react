import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { next } from '../store/modules/mbti';
import OrangeBtn from './OrangeBtn';

const Header = styled.p`
  font-size: 3em;
`;
const MainImg = styled.img`
  width: inherit;
`;
const SubHeader = styled.p`
  font-size: 1.5em;
  color: #777;
`;

const Start = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Header>개발자 MBTI 조사</Header>
      <MainImg src="/images/main.jpg" alt="main" />
      <SubHeader>개발자가 흔히 접하는 상황에 따른 MBTI</SubHeader>
      <OrangeBtn text="Start" clickEvent={() => dispatch(next())} />
    </>
  );
};

export default Start;
