import React, {Component} from 'react';

export default class ClassState extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         teacher: '이효석',
    //     };
    state = {teacher: '이효석',};

    render() {
        const {teacher} = this.state;
        return (
            <div>
                <button onClick={()=>this.setState({teacher: 'tetz'})}>클래스컴포넌트 영어로!</button>
                <br/>
                <span>{teacher}</span>
            </div>
        );
    }
}

//클래스형 컴포넌트에서는 this.setState라고 함수이름이 고정. set스테이트명