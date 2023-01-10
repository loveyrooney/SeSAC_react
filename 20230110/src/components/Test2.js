import React, { Component } from 'react';
import logo from '../logo192.png';

class Test2 extends Component {
  render() {
    const style = { color: 'orange', fontSize: '40px', marginTop: '20px' };
    return (
      <div>
        <div style={style}>
          <h2>안녕하세요</h2>
          <img src={logo} alt="img" />
        </div>
      </div>
    );
  }
}

export default Test2;
