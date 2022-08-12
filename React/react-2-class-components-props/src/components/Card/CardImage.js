// create CardImage component
// component gets img prop and displays image
// use this component in App.js

export default function CardImage(props) {
  return <img className='card-image' src={props.img} alt='Card' />;
}
