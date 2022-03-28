
// import components
import Form from './components/Todo-Form/Form.component';
import List from './components/Todo-List/List.component';
// import hooks
import { useState } from 'react';

// import styles
import './App.css';

function App() {
  const [input, setInput] = useState(''); 
  const [todos, setTodos] = useState([]); 

  return (
    <div className='todo-app-contianer'>
      <Form setInput={setInput} input={input} setTodos={setTodos} todos={todos}/>
      <List todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
