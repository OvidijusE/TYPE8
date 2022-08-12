import { useState } from 'react';

export default function TodoForm(props) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='toDoForm'>
      <input
        className='text-input'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Add a todo'
      />
      <button type='submit' className=''>
        Add Todo
      </button>
    </form>
  );
}
