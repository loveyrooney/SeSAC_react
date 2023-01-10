import React, { Component } from 'react';

class Test extends Component {
  render() {
    const name = 'rooney';
    const my_style = { backgroundColor: 'blue', color: 'orange', fontSize: '40px', padding: '12' };
    return (
      <div>
        <div style={my_style}>{name}</div>
      </div>
    );
  }
}

export default Test;
