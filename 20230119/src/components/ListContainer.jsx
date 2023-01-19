import React from 'react';
import DoneList from './DoneList';
import TodoList from './TodoList';

const ListContainer = () => {
  return (
    <>
      <TodoList />
      <DoneList />
    </>
  );
};

export default ListContainer;
