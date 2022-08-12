function MyBtn(props) {
  console.log('props ===', props);
  return <button className='btn-black'>{props.text}</button>;
}

export default MyBtn;
