import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create, done } from '../store/modules/todo';

const TodoList = () => {
  const inputRef = useRef();
  const list = useSelector((state) => state.todo.list).filter((el) => el.done === false);
  const nextID = useSelector((state) => state.todo.nextID);
  const dispatch = useDispatch();
  return (
    <section>
      <h1>To Do List</h1>
      <div>
        <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            dispatch(create({ id: nextID, text: inputRef.current.value }));
            inputRef.current.value = '';
          }}
        >
          add
        </button>
      </div>
      <ul>
        {list.map((el) => (
          <li key={el.id}>
            {el.text} <button onClick={() => dispatch(done(el.id))}>done</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
