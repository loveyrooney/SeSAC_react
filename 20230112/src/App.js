import './App.css';
import Comparing from './components/Comparing';
import ConditionalRender from './components/ConditionalRender';
import ExamQuiz from './components/ExamQuiz';
import ExamRef from './components/ExamRef';
import ExConditional from './components/ExConditional';
import ExUnmount from './components/ExUnmount';
import ReactFragment from './components/ReactFragment';
import Refdom from './components/Refdom';
import ShowTimer from './components/ShowTimer';
import Testref from './components/Testref';
import TestUseEffect from './components/TestUseEffect';

function App() {
  return (
    <div className="App">
      <ExUnmount />
      <hr />
      <ShowTimer />
      <hr />
      <TestUseEffect />
      <hr />
      <ExConditional />
      <hr />
      <ConditionalRender />
      <hr />
      <ReactFragment />
      <hr />
      <Comparing />
      <hr />
      <ExamQuiz />
      <hr />
      <ExamRef />
      <hr />
      <Refdom />
      <hr />
      <Testref />
    </div>
  );
}

export default App;
