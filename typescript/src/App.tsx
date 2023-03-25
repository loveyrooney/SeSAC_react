import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  const showAlert = ():void {
    alert('hello');
  }
  return (
    <div className="App">
      <Button onClick={showAlert}>버튼</Button>
    </div>
  );
}

export default App;
