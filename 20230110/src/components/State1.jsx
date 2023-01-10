import React, { Component } from 'react';

class State1 extends Component {
    state = {num: 0}
    render() {
        const {num} = this.state;
        return (
            <div>
                <p>{num}</p>
                <button onClick={()=>this.setState({num:num+2})}>+2</button>
                <button onClick={()=>this.setState({num:num-1})}>-1</button>
            </div>
        );
    }
}

export default State1;