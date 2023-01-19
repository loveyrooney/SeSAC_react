import { useSelector } from 'react-redux';

const DoneList = () => {
  const list = useSelector((state) => state.todo.list).filter((el) => el.done === true);

  return (
    <section>
      <h1>Done List</h1>
      <ul>
        {list.map((el) => (
          <li key={el.id}>{el.text}</li>
        ))}
      </ul>
    </section>
  );
};

export default DoneList;
