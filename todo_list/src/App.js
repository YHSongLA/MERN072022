import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import TodoForm from './components/TodoForm';

function App() {
  // STATE
  const [todos, setTodos] = useState([])

  // ADD TODOS
  const addNewTodo = (todoObj) => {
    setTodos([...todos, todoObj]);
  }

  // DELETE TODOS
  const deleteTodo = (index) => {
    const filterTodos = todos.filter((todo, i) => {
      return i !== index
    });
    setTodos(filterTodos)
  }

  return (
    <div className="App">
      <TodoForm addNewTodo={addNewTodo}/>
      <Display deleteTodo={deleteTodo} allTodos={todos}/>
    </div>
  );
}

export default App;
