import css from './Button.module.css';

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={props.secondary === true ? css.secondary : css.main}>
      {props.children}
    </button>
  );
};

export default Button;
