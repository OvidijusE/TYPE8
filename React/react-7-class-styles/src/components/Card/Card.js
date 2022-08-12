import Container from '../Container';
import MyButton from '../MyButton/MyButton';
import css from './Card.module.css';

function Card() {
  return (
    <Container wide>
      <div className={`${css.card} container`}>
        <img className={css.img} src='./assets/newyork.jpg' alt='' />
        <div className={css.info}>
          <h3>New York</h3>
          <p className={css.date}>Fri 27 Nov 2016</p>
          <p className={css.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, suscipit.
          </p>
          <MyButton className={css.button}>Buy tickets</MyButton>
        </div>
      </div>
    </Container>
  );
}

export default Card;
