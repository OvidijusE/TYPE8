export default function TodoItem(props) {
  const { todo, removeTodo } = props;
  return (
    <div className='task-output-container'>
      <p className='task-output' onClick={() => removeTodo(todo.id)}>
        {todo.text}
        <i class='fa fa-times-circle-o' aria-hidden='true'></i>
      </p>
    </div>
  );
}
