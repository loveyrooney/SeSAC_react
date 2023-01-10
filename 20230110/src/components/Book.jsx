import React from 'react';

const Book = (props) =>{
    return (
        <div>
           <div className='book'>
                <h2>이번주 베스트셀러</h2>
                <img src={props.arr[1]} alt="img"/>
                <h3>{props.arr[0]}</h3>
                <h4>저자: {props.arr[2]}</h4>
                <h4>판매가: {props.arr[3]}</h4>
                <h4>구분: {props.arr[4]}</h4>
            </div> 
            
        </div>
    );
};

export default Book;