import React from 'react';
import Button from './Button';

const SkyblueBtn = ({ text, clickEvent }) => {
  return <Button text={text} clickEvent={clickEvent} mainColor="#7edcfa" subColor="#3a82E0" hoverColor="#cfecf2" />;
};

export default SkyblueBtn;
