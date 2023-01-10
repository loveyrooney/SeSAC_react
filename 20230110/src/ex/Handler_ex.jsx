import React, { Component } from 'react';

class Handler_ex extends Component {
    state = {event:'Hello World!'}
    render() {
        const {event} = this.state;
        return (
            <div>
                <h1>{event}</h1>
                <button onClick={()=>this.setState({event:'Goodbye World!'})}>click</button>
            </div>
        );
    }
}

export default Handler_ex;