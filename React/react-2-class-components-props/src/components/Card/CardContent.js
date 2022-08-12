import MyBtn from '../UI/MyBtn';

function CardContent({ title, date, text }) {
  // console.log('CardContent props ===', props);
  // const { title, date, text } = props;
  return (
    <div className='card-content'>
      <h3>{title}</h3>
      <p className='date'>{date}</p>
      <p className='text'>{text}</p>
      <MyBtn text='Buy tickets' />
    </div>
  );
}

export default CardContent;
