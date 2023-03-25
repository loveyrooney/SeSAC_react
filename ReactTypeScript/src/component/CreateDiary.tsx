import React from 'react';
import { useRef, useState } from "react";
import { useNavigate  } from "react-router";
import { useSelector, useDispatch } from "react-redux"
import { IDate, RootState } from '../global/global';

export default function CreateDiary() {
  const dates:IDate[] = useSelector((state:RootState) => state.dates);
  const diaries = useSelector((state:RootState) => state.diaries);
  const history = useNavigate();
  const dispatch = useDispatch();

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const dateRef = useRef<HTMLSelectElement>(null);


  function onSubmit(e: { preventDefault: () => void; }) {
    if(titleRef.current != null && dateRef.current != null && contentRef.current != null){
      e.preventDefault();

      let data = {
        id: diaries.length + 1,
        date: dateRef.current.value,
        title: titleRef.current.value,
        content: contentRef.current.value,
      }

      dispatch({type: 'DIARY/WRITE', payload: data});    
      alert("생성이 완료 되었습니다");
      history(`/date/${dateRef.current.value}`);
    }
  }


  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>제목</label>
        <input type="text" placeholder="일기장 제목" ref={titleRef} />
      </div>
      <div className="input_area">
        <label>내용</label>
        <textarea placeholder="일기장 내용" ref={contentRef} />
      </div>
      <div className="input_area">
        <label>Date</label>
        <select ref={dateRef}>
          {dates.map(date => (
            <option key={date.id} value={date.date}>
              {date.date}
            </option>
          ))}
        </select>
      </div>
      <button>작성</button>
    </form>
  );
}
