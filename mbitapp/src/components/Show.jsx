import React from 'react';
import styled from 'styled-components';
import OrangeBtn from './OrangeBtn';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../store/modules/mbti';

const Header = styled.p`
  font-size: 3em;
`;
const Explaination = styled.p`
  font-size: 1.5em;
  color: #777;
`;
const Result = styled.p`
  font-size: 3em;
  color: dodgerblue;
`;
const Addtional = styled.p`
  font-size: 2em;
  color: orange;
`;
const AddtionalImg = styled.img`
  width: 500px;
  transform: translateX(-35px);
`;

const Show = () => {
  const result = useSelector((state) => state.mbti.mbtiResult);
  const explaination = useSelector((state) => state.mbti.explaination[result]);
  const dispatch = useDispatch();

  return (
    <>
      <Header>당신의 개발자 MBTI 결과는?</Header>
      <Explaination>{explaination.text}</Explaination>
      <Result>{result}</Result>
      <Addtional>이건 재미로 읽어 보세요</Addtional>
      <AddtionalImg src={explaination.img} alt="팩폭" />
      <OrangeBtn text="restart" clickEvent={() => dispatch(reset())} />
    </>
  );
};

export default Show;
