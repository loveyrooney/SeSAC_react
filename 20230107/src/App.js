import './App.css';
import CallChange from './components/CallChange';
import CallCObj from './components/CallCObj';
import CallCustom from './components/CallCustom';
import ClassProps from './components/ClassProps';
import ExamMap from './components/ExamMap';
import List from './components/List';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className="App">
      <CallChange />
      <hr />
      <CallCustom />
      <CallCObj />
      <ExamMap />
      <List />
      <MainHeader text="go naver" href="http://naver.com" userID="rooney" />
      <ClassProps text="go naver" href="http://naver.com" userID="rooney" />
    </div>
  );
}

export default App;
