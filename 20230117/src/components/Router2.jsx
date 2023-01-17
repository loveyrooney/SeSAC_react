import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Router2 = () => {
  const router2List = { textAlign: 'left' };
  return (
    <>
      <Header />
      <h1>this is Router2</h1>
      <Link to="1" style={router2List}>
        <h2>this is list1</h2>
      </Link>
      <Link to="2" style={router2List}>
        <h2>this is list2</h2>
      </Link>
    </>
  );
};

export default Router2;
