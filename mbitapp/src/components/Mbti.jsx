import React from 'react';
import styled from 'styled-components';
import SkyblueBtn from './SkyblueBtn';
import { useSelector, useDispatch } from 'react-redux';
import { next, check } from '../store/modules/mbti';

const SurveyQuestion = styled.p`
  font-size: 1.5em;
  color: #777;
`;
const Vs = styled.p`
  font-size: 2em;
  padding-top: 2em;
`;

const Mbti = () => {
  const survey = useSelector((state) => state.mbti.survey);
  const page = useSelector((state) => state.mbti.page);
  const dispatch = useDispatch();
  return (
    <>
      <SurveyQuestion>{survey[page - 1].question}</SurveyQuestion>
      <ul>
        {survey[page - 1].answer.map((el, index) => {
          return (
            <li key={index}>
              <SkyblueBtn
                text={el.text}
                clickEvent={() => {
                  dispatch(next());
                  dispatch(check(el.result));
                }}
              />
              {index === 0 && <Vs>VS</Vs>}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Mbti;
