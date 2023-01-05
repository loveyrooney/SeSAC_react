import './App.css';
import { useState } from 'react';
import ExamState from './components/ExamState';
import Condition from './components/Condition';
import LikeIt from './components/LikeIt';
import ClassState from './components/ClassState';
import StateVariable from './components/StateVariable';
import ArrayState from './components/ArrayState';
import ObjState from './components/ObjState';

function App() {
  let [teacher, setTeacher] = useState('hyoseok');

  function customSetTeacher(name) {
    setTeacher(name);
    //console.log(teacher);
  }

  return (
    <div className="App">
      <button onClick={() => {customSetTeacher(!teacher);}}>{!teacher ? 'to korean!' : 'to english'}</button>
      <br />
      <span>{!teacher ? 'hyoseok' : '효석'}</span><br/><br/>
      <ExamState/><br/>
      <Condition/><br/>
      <LikeIt/><br/>
      <ClassState/><br/>
      <StateVariable/><br/>
      <ArrayState/><br/>
      <ObjState/>
    </div>
  );
}

export default App;
