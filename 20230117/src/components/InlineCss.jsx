import React from 'react';

const InlineCss = () => {
  const divStyle = { backgroundColor: 'skyblue' };
  const headingStyle = { backgroundColor: 'yellow', fontWeight: '700' };
  const spanStyle = { backgroundColor: 'green', fontWeight: '700' };
  return (
    <div style={divStyle}>
      <h1 style={headingStyle}>CSS 컴포넌트입니다</h1>
      <span style={spanStyle}>해당 컴포넌트를 꾸며 보아요</span>
    </div>
  );
};

export default InlineCss;
