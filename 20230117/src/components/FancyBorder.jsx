import React from 'react';

const FancyBorder = (props) => {
  return (
    <div style={{ border: `3px solid ${props.color}` }}>
      {props.children}
      <span>this is inner Fancy line</span>
    </div>
  );
};

export default FancyBorder;
