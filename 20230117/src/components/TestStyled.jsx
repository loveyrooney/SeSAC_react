import React from 'react';
import styled from 'styled-components';

const MyDiv = styled.div`
  background-color: orange;
`;
const MyHeafing = styled.h1`
  color: white;
`;
const Myspan = styled.span`
  color: blue;
`;

const TestStyled = () => {
  return (
    <MyDiv>
      <MyHeafing>hello my heading</MyHeafing>
      <Myspan>hello my span</Myspan>
    </MyDiv>
  );
};

export default TestStyled;
