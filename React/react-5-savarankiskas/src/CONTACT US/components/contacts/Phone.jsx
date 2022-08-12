export default function Phone(props) {
  return (
    <div className='phone'>
      <h3>Phone</h3>
      <p className='phone-number'>{props.phone}</p>
    </div>
  );
}
