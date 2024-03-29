import React from 'react';
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import { IDate, RootState } from '../global/global';

export default function DateList() {
  const dates:IDate[] = useSelector((state:RootState) => state.dates);
  
  if (dates.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <ul className="list_date">
      {dates.map(date => (
        <li key={date.id}>
          <Link to={`/date/${date.date}`}>{date.date}</Link>
        </li>
      ))}
    </ul>
  );
}
