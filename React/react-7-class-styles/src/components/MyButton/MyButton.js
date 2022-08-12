import css from './MyButton.module.css';

function MyButton(props) {
  return (
    <button onClick={props.onClick} className={`${css.btn} ${props.className}`}>
      {props.children}
    </button>
  );
}

export default MyButton;
