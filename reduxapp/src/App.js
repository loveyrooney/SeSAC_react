import './App.css';
import Contact from './components/Contact';
import Test from './components/Test';
import { useState } from 'react';
import Provider from 'react-redux';

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      개수 : {list.length}
      <br />
      <Contact list={list} setList={setList} />
      <hr />
      <Test />
    </div>
  );
}

export default App;
