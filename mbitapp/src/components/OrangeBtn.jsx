import React from 'react';
import Button from './Button';

const OrangeBtn = ({ text, clickEvent }) => {
  return <Button text={text} clickEvent={clickEvent} mainColor="#fae243" subColor="#fa9f1a" hoverColor="#faf000" />;
};

export default OrangeBtn;
