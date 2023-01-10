import React, { Component } from 'react';

class Prop3 extends Component {
    render() {
        const {text, valid} = this.props.obj
            return (
                <div>
                    <h1>{this.props.obj ? `App 컴포넌트에서 받아온 ${text}` : '이건 기본 text props'}입니다.</h1>
                    <button onClick={valid}>콘솔 메세지</button>
                </div>
            ); 
    }
}

export default Prop3;