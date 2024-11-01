import './App.css';

import Quiz from './components/Quiz';
import Questions from './components/Questions';
import { useState } from 'react';

function App() {

  const [questions, setQuestions] = useState([]);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <Quiz setQuestions={setQuestions}/>
      <Questions questions={questions}></Questions>
    </div>
  );
}

export default App;
