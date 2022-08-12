import { useState } from 'react';
import './App.css';
import TodoForm from './components/ToDoForm';
import TodoItem from './components/ToDoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }

    let todo = { id: id, text: text, completed: false, important: false };
    let newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  let sortedTodos = todos.sort((a, b) => b.important - a.important);
  return (
    <div className='App'>
      <h1 className='title'>You have {todos.length} todos</h1>
      <TodoForm addTodo={addTodo} />
      {sortedTodos.map((todo) => {
        return <TodoItem removeTodo={removeTodo} todo={todo} key={todo.id} />;
      })}
    </div>
  );
}

export default App;
