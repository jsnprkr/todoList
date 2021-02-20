import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [todoText, setTodoText] = useState('');
  const addTodo = () => {
    console.log('Button Click')
    
  };
  const onTextInput = (event) => {
    setTodoText(event.target.value);
  };
  return (
    <div className="App">
      <input type = 'text' value={todoText} onInput={onTextInput}/>
      <button onClick={addTodo}> add to todo list</button>
    </div>
  );
}

export default App;
