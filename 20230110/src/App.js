import logo from './logo.svg';
import './App.css';
import JsxExam from './components/JsxExam';
import Test from './components/Test';
import Test2 from './components/Test2';
import Food from './components/Food';
import Book from './components/Book';
import book from './book.jpg';
import Prop3 from './components/Prop3';
import State1 from './components/State1';
import State2 from './components/State2';
import Handler_ex from './ex/Handler_ex';
import Event_ex from './ex/Event_ex';

function App() {
  const food = 'pizza';
  const arr = ['나의 하루는 4시40분에 시작된다', book, '김유진', '13,500원', '자기계발서'];
  const obj = {
    text: 'text props',
    valid: () => {
      console.log('콘솔 띄우기 성공!');
    },
  };
  return (
    <div className="App">
      <Event_ex />
      <hr />
      <Handler_ex />
      <State2 />
      <State1 />
      <Prop3 obj={obj} />
      <Book arr={arr} />
      <Food food={food} />
      <Test />
      <Test2 />
    </div>
  );
}

export default App;
